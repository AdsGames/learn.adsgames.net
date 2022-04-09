---
title: "Using variables in C++"
---

# Using variables in C++

Here, you will learn how use variables and do math equations with them.

```cpp
#include <iostream>

int number1 = 10;
int number2 = 2;
int number3;

int main(){
    std::cout << "Hello world, and welcome to learn.adsgames.net!" << std::endl;
    std::cout << "The first number is " << number1<< "." << std::endl;
    std::cout << "The second number is " << number2<< "." << std::endl;

    system("pause");

    number3 = number1 + number2;

    std::cout << "The third number is the sum of number1 and number2: " << number3<< "." << std::endl;

    system("pause");

    std::cout << "Number1 divided by number2: " << number1 / number2 << "." << std::endl;

    system("pause");

    std::cout << "Number1 multiplied by by number2: " << number1 * number2 << "." << std::endl;

    system("pause");

}
```

Copy and paste this code into a new project. Compile it and run it.

![It should look like this](/images/cpp/console.png)

You should get a program like this.

To put variables in cout<< text, you need to end the quotes, and add <<variablename<<, then you can start the quotes again.  
For example,

```cpp
std::cout << "The score is " << team1 << " to " << team2 << ";
```

will display the variables team1 and team2 in the console along with the text

At the top, before the main(){ function, you will see int number1;, int number2;, and int number3;.  
The int part is the data type. This means integer, or a number.  
It can store a number from -32767 to 32767, and can be used throughout the program.  
To initialise an integer, you use "int", then "integername", then the value of the variable, then a ";"

For example:

```cpp
int numberOfCats;
```

would initialise the variable numberOfCats with the value of 0.  
If you don't say the value of the variable when you initialise it, it will default to 0.

Another example is:

```cpp
int timmysAge=32;
```

would initialise timmysAge with the value of 32.

Now, for math equations with variables. The operations in C++ are:

> \+ for addition. speed + power = impact;  
> \- for subtraction. skill = 50 - poison;  
> \* for multiplication. points \* time = finalScore;  
> / for division. 50 / numberOfPeople = price;

Adding and subtracting from variables are a bit different.

You can use increments

```cpp
score++; // will increase score by 1;
size--; // will decrease size by 1;
```

But, for adding or subtracting from a variable you use -= and +=.  
For example, score+=speed; will add speed to score, as score+speed would not work.  
It's the same for subtracting, score-damage; will not work. You would need to do score-=damage;
