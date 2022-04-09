---
title: "Making your first C++ Program"
---

Now, you are going to make your first program, so you can brag to everyone that you can program.  
First, open up Dev-C++. Click File > New > New Project

![Making a new project](/images/cpp/newproject.jpg)

You'll get a window like this:

![Making a new project](/images/cpp/newproject2.jpg)

Call your project "Hello World", and select a empty project, and click Ok.  
I would STRONGLY recommend making a new folder for your project. If you don't want to, go ahead.  
You will regret it. So, make a new folder called "Hello world" and save it in there.  
Next, we need to make the source file, where the code will actually be stored.  
Go to that folder and make a new text file. Rename it "main.cpp", it will ask you  
if you want to change the file extension, and say Yes. Then, go back to Dev-C++ and add the file you  
just made to your project.

![Add main.cpp to your project](/images/cpp/addfile.jpg)

Double click on main.cpp that's now in your project. It should look like this:

![Add main.cpp to your project](/images/cpp/fileadded.jpg)

You now have a project and a source file. You are ready to code!  
Your first program will be "Hello World"  
Copy this code into your main.cpp file

```cpp
#include <iostream>
#include <windows.h>

int main(){
     std::cout << "Hello World!!" << std::endl;
     system("pause");

     return 0;
}

```

Press this button, or, even easier, press F9. You will find out that F9 is much quicker.

![Press this to compile](/images/cpp/compile.jpg)

It should compile, and this window will come up. Pressing a key will make it exit.

![Congrats! You're first program](/images/cpp/helloworld.jpg)

Let's take a better look at what this code does.

```cpp
#include <iostream>
```

adds a library, telling the compiler what things like `cout` and `system("pause")` are.

```cpp
using namespace std;
```

does the same thing. You need them both to use console code.

```cpp
int main(){
```

is the beginning of the actual code. This is where you will put all your code

```
{}
```

are showing where the code starts and stops. In these brackets is where all your code goes.

```
cout<<"Hello world\n";
```

prints text to the console window. Inside the "quotes" is what is displayed
in the window.

```cpp
\n
```

tells the console to put all the rest of the text to the next line, it's
pretty much like hitting the enter key.

```cpp
system("pause")
```

Tells the console to wait until a key is pressed to continue with the code. It pauses the entire
program, basically, a system pause. You will find this helpful later on in console programs.

One important thing about C++ programs is when the program runs out of code, it ends the program,
closing the program. In the program you just made, if you take out the `system("pause")`, it will
it will run, display the "Hello World", reach the end of the code, and exit. Try it out!

Also, another important thing to remember is most C++ code needs a ; at the end of it, like `system("pause");`,
and `std::cout << "Hello World" << std::endl;`. If you get an error code like this,

![A very common error](/images/cpp/commonerror.jpg)

you probably forgot a ; on the end of something. This was a problem I had a lot when I started C++,
and it took me a long time to figure out the problem.

That's the end of the Hello World tutorial!
