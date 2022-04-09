---
title: "Making your first Allegro program"
---

Here you will learn to use Allegro, and learn what all the code does

First, make a new project in Dev-C++ and add a main.cpp file to it.

Before you put any code in, you will need to include the Allegro library in the linker.

Go to Project>Project Options  
![Go to Project Options in the Project menu](/images/allegro/projectoptions.png)

Go to the Linker window, and type "-lalleg", and press Ok.  
![Type -lalleg into the linker window](/images/allegro/-lalleg.png)

Now that the Allegro library is linked, paste this code in and run it.

```c
#include <allegro.h>

BITMAP* buffer;

void updateScreen(){
	draw_sprite(screen,buffer,0,0);
}

int main(){
	allegro_init();
	install_keyboard();
	set_color_depth(32);
	set_gfx_mode(GFX_AUTODETECT_WINDOWED, 800, 600, 0, 0);

	buffer = create_bitmap(800,600);

	while(!key[KEY_ESC]){
		updateScreen();
	}

	return 0;
}
END_OF_MAIN()
```

Give this a run, and if it works, you should see a window like this(press ESC to exit):  
![Window](/images/allegro/window.png)

Now, let's have a look at the code.

```c
#include <allegro.h> // tells the compiler to include the Allegro library. You need it to use any Allegro code.
BITMAP* buffer; // initialises the bitmap buffer. The buffer is what draws everything to the screen.
void updateScreen(){ // will contain all the code for the program that is ran every frame. For this simple program, all it does is draw the buffer every frame.
draw_sprite(screen,buffer,0,0); // draws the buffer in the screen at the coordinates(0,0).
allegro_init(); // initialises the Allegro engine. You need it to use any Allegro code.
install_keyboard(); // installs the keyboard. You need it if you want to use the keyboard in your program.
set_color_depth(32); // sets the color depth. In this case, it sets it to 32 bit color. You need this for drawing colors.
set_gfx_mode( GFX_AUTODETECT_WINDOWED, 800, 600, 0, 0); // sets the graphics mode. 800, 600 is the resolution, and you can change it to whatever you want.
GFX_AUTODETECT_WINDOWED // can be changed to GFX_AUTODETECT if you want the program to run in fullscreen.
buffer = create_bitmap(800,600); // creates the buffer to draw everything onto. The (800,600) must be set to the same resolution as your program.
while(!key[KEY_ESC]){ // runs the updateScreen void as long as the ESC key is NOT pressed.
key[KEY_ESC] // is used to check if a key is pressed. For example, if(key[KEY_W]){ will check if the key "W" is pressed.
return 0; and END_OF_MAIN(); // is used to exit out of the program.
```

Head over to the next tutorial to get started programming in Allegro
