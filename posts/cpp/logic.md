---
title: "Using logic in C++"
---

# Using logic in C++

Up to now, all your programs ran the same code every time. But, what if you wanted different code to run for different circumstances(like in games)

First, make a new project in Dev-C++ and add a main.cpp file to it.

```cpp
#include <iostream>

int number1;

int main(){
  std::cout << "Enter a number:";
  std::cin >> number1;

  if(number1 > 10){
    std::cout << "Your number is larger than 10." << std::endl;
  }

  if(number1 < 10){
    std::cout << "Your number is smaller than 10." << std::endl;
  }

  if(number1 == 10){
    std::cout << "Your number is 10!" << std::endl;
  }

  system("pause");

  return 0;
}
```

Compile and run it. It should look like this

![The enter program window](/images/cpp/enternumber.png)

The if(){ statement will check if whatever is in it's brackets(). If it's true, it will run the code in its curly brackets{}  
The first if(){ checks if the variable "number1" is bigger than 10, and if it is, then it will run "cout<<"Your number is larger than 10.\\n";"  
because it's in the if(){ statement's curly brackets.

If the if(){ statement comes up false, it will continue on with the rest of the code.

If you are checking if a variable equals a number, you need to use ==, or else it will set the variable to that number.  
For example, if(number1==10){ checks if number1 equals 10. If you used if(number1=10){, number1 will equal 10.  
This is important to remember when using if(){ statements, as it will make your program not run.  
I made this mistake A LOT when I started programming.  
Now, onto the while(){ loop.

```cpp
#include <iostream>

int number1;

int main(){
  std::cout << "Enter the number 235:";
  std::cin >> number1;

  while(number1!=235){
    std::cout << "Enter the number 235:";
    std::cin >> number1;
  }

  std::cout << "Correct!!" << std::endl;
  system("pause");

  return 0;

}
```

Copy and paste this code, and run it.

![You need to enter the number 235.](/images/cpp/enter235.png)

What this program does is ask for the user to input a number until they enter the number 235.  
The while(){ loop repeats whatever is in the curly brackets{} for as long as what is in the brackets() is true.  
For example, the while(){ loop in this program will loop "cout<<"Enter the number 235:"; cin>> number1;" as long as number1 doesn't equal 235.

!= means not equal to.  
\== means equal to.  
\> means larger than.  
< means less than.  
\=> means equal to or larger than.  
\=< means equal to or less than.  
&& means and.  
|| means or.

Now, lets look at && and ||, and the else statement:

```cpp
#include <iostream>

int number1;
int number2;

int main(){
  std::cout << "Enter the number 11 and the number 72" << std::endl;
  std::cin >> number1;
  std::cin >> number2;

  if(number1 == 11 && number2 == 72){
    std::cout << "Correct!!" << std::endl;
    system("pause");
  }
  else{
    std::cout << "Sorry, try again" << std::endl;
    system("pause");
  }

  return 0;
}
```

![You need to enter the number 11 and 72.](/images/cpp/enter11.png)

The && will check if both things in the brackets() are true.  
The if(){ statement in this program checks if number1==11 and number2==72.  
You can have as many &&'s as you want in an if(){ statement.

Go the above code and change the && to ||.  
Now, it is "Enter the number 11 or the number 72".  
The if(){ statement checks if number1 equals 11 OR number2 equals 72.  
It will run the code in the curly brackets{} if either statement is true.

The }else{ statement is for when the if(){ statement comes up false, it will run that code instead.  
For example, in this program it has if(number1==11 && number2==72){, then some code. If the if(){ statement comes of false,  
and number1 doesn't equal 11 or number2 doesn't equal 72, it will go to the }else{ statement instead.

Head over to the next tutorial to learn what Allegro engine is, and to make your own graphical games
