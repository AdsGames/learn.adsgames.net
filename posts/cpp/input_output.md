---
title: "Input and Output in the Console"
---

Here, you will learn how to input and output text and numbers to the console window.

```cpp
#include <iostream>

int number;

int main(){
  std::cout << "Hello world, and welcome to learn.adsgames.net!" << std::endl;
  std::cout << "Enter a number:";

  std::cin >> number;
  std::cout << "You entered " << number << "." << std::endl;

  system("pause");

  return 0;
}
```

![It should end up like this](/images/cpp/enternumber.png)

What `std::cin >>` and `std::cout <<` mean are console in and console out.  
`std::cin >>` tells the console to wait for the user to enter some text and press enter, then puts the input into the variable that is put beside it. For example:

```cpp
std::cin >> number;
```

will put the user text into the integer "number"(if the text is a number).

Let's put this code to good use with a calculator application:

```cpp
#include <iostream>

int number1;
int number2;
int finalAnswer;

int main(){
  std::cout << "Welcome to your calculator application!" << std::endl;
  std::cout << "Enter your first number:";
  std::cin >> number1;
  std::cout <<"Enter your second number:";
  std::cin >> number2;

  finalAnswer = number1 + number2;

  std::cout << "The answer is: "<< finalAnswer << "." << std::endl;
  system("pause");

  return 0;
}
```

![A simple calculator application](/images/cpp/calculator.png)

You can change the + to subtraction, or anything else, to change what the calculator can do.

> Note integers cannot store decimal points, so division will be rounded to the whole number.
