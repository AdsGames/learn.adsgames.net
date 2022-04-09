---
title: "Loading TGX Files"
---

Many of the older games created by Firefly Studios use an obscure image format with the '.tgx' extension to store non animated image files. There is little documentation on how to open these files so, lets take a look at how we can decompose the files using a hex editor.

## Case Study: gfx/armybar.tgx

The armybar.tgx is a very short file, so it is a good starting place for studying the tgx file format. The first few bytes are as follows.

```text
87 00 00 00 18 00 00 00
5F FF FF 5F FF FF 5F FF
FF 5F FF FF 45 FF FF 00
10 C2 80 00 FF FF 5F 10
C2 5F 10 C2 5F 10 C2 5F
10 C2 44 10 C2 00 42 88
80 00 FF FF 5F 10 C2 5F
10 C2 5F 10 C2 5F 10 C2
44 10 C2 00 42 88 80 00
FF FF 5F 10 C2 5F 10 C2
5F 10 C2 5F 10 C2 44 10
C2 00 42 88 80 00 FF FF
5F 10 C2 5F 10 C2 5F 10
C2 ...
(lets leave it at this for now)
```

## Header

The first 8 bytes of these files is composed of a very basic header. This header contains the size information for the image. It is stored in little-endian format.

```
87 00 00 00 // Width (125)
18 00 00 00 // Height (24)
```

Height and width are stored as 32 bit integers (4 bytes) which gives plenty of room for larger images however, most images will never use more than the first two bytes.

#### C++ Example

```cpp
// Create file
std::ifstream f(filename, std::ios::binary | std::ios::ate);
std::ifstream::pos_type pos = f.tellg();

// Vector to dump file into
std::vector<char> result(pos);

// Read the file into vector of chars
f.seekg(0, std::ios::beg);
f.read(&result[0], pos);

// Header (only use first 2)
unsigned int width = (unsigned char)result.at(0) + 256 _ (unsigned char)result.at(1);
unsigned int height = (unsigned char)result.at(4) + 256 _ (unsigned char)result.at(5);
```

## Image data

### Tokens and lengths

The image data starts immediately after the 8 byte header. Each chunk of image data begins with a single byte comprised of a 'token' and length data. Lets look at the binary representation of the 9th byte in the file.

```
5F = 01011111, 010 = token, 11111 = length
```

There are 4 types of tokens defined in the tgx format:

1. Stream of pixels (000)
2. Transparent pixel stream (001)
3. Repeating pixels (010)
4. New line (100)

The length part of the byte follows an odd, but justified representation of data. The binary representation of the length is actually the length -1. This limits the range to 1-32.

In this case the token is 010 (repeating pixels) and the length is 11111 (32) meaning that one colour of pixel is repeated 32 times.

### Colour representation

The TGX format uses 15 bit colour. Each colour is stored in 2 bytes with 3 bits per colour and 1 bit unused (generally this bit would be used for alpha but as far as I know TGX does not use it so we can ignore it!). As with width and height data, it is stored little endian.

Here are some examples of colours:

```
format: gggbbbbb-0rrrrrgg
blue:   00011111-X0000000 (1F 00) rgb(0, 0, 255)
red:    00000000-X1111100 (00 7C) rgb(255, 0, 0)
green:  11100000-X0000011 (E0 03) rgb(0, 255, 0)
yellow: 11100000-X1111111 (E0 7F) rgb(255,255,0)
note: X represents our ignored bit
```

It becomes much easier to understand when they are converted to big endian.

#### Mapping to 24 bit colour

These colour values can be approximately mapped to 24 bit colour by multiplying each colour value by 8. This does however, result in a max value of 248 (31 \* 8) where as a single byte can represent the range of 0 - 255. This however, should be the least of our worries as we will be missing 7 out of 8 colour representations regardless due to this multiplication.

```
Example:
10 C2 (little endian)
C2 10 (big endian)
11000010 00010000 (binary representation)

r = 10000 (16)
g = 10000 (16)
b = 10000 (16)

colour ~= rgb(128, 128, 128)
and we get a nice grey colour.
```

#### C++ example

```cpp
// Extract values from 2 colour bytes
unsigned char r = byte2 >> 2;
unsigned char g = ((byte1 >> 5) & 0b00000111) | ((byte2 << 3) & 0b00011000);
unsigned char b = byte1 & 0b00011111;

// Convert from 15 bit to 24
r = r * 8;
g = g * 8;
b = b * 8;
```

This example is in c++, but can be translated easily to any language supporting bit masking and bit shifting.

## All together

So, now that we know how the tokens, lengths and colours are stored, how can we load this data?

### Stream of pixels (000)

When we get a token of type 000, we know we are dealing with a stream of pixels. The length in this case defines how many pixels follow this token.

```
00 10 C2 (bytes 16-18 of example file)
```

In this case we start with a stream of pixels length 1 (remember 00000 represents a length of 1). What follows is the 'stream'. Here we only have a single pixel as our stream and its colour is defined as 10 C2. We can convert this using our above method and get a medium grey colour.

In the case of a larger length, the next colour would be stored immediately after. Once we have parsed as many colours as the length defines, we are on to the next token.

### Transparent pixel stream (001)

The transparent pixel stream is the simplest of all tokens. The length defined is how many repeated transparent pixels are to be drawn. The next token follows immediately after.

### Repeating pixels (010)

The repeating pixel works much like the pixel stream except, only one colour is defined for the whole stream. The length defines how many repeated pixels there will be, and the following two bytes define the colours for the stream.

```
5F FF FF (bytes 9-11 of example file)
```

Here we have a repeated pixel stream of length 32. The colour used is pure white.

### New line (100)

The new line token is perhaps the simplest of all. A newline occurs at any point that we are done drawing the current horizontal line. This would increment the y position of our cursor by 1.

```
45 (byte 21 of example file)
```

The length is unused and should always be set to '00000'.

A new line may not always occur once the number of pixels defines by the width are set. This means that the rest of the line should be filled with transparent pixels before moving on to the next.

## Conclusion

TGX files are not by any means a standard file format, but through dissecting the file format, it will be easier to understand other file formats, and maybe, create your own custom loaders.

I have implemented in full loading tgx files using c++ and allegro 4. Code can be found [here](https://github.com/alegemaate/aliv/blob/master/src/TGXLoader.cpp).
