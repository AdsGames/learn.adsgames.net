---
title: "Calculate Distance in 1 Dimension"
---

Now, you may be wondering, "In what world would I ever need to find a distance in 1 dimension, aren't all games in 2D or 3D?". This is partially true but also partially false. All games (as far as I know) are _displayed_ in 2D or 3D however there are applications where finding a 1 dimensional distance would be all you need. For example, below is a simple game where our main character, jim lets call him, needs to collect chickens. Jim does not jump, nor do the chickens therefore he will only be moving along 1 axis.

![](/images/trig/distance_chicken.png)

![](/images/trig/distance_chicken2.png)

![](/images/trig/distance_chicken3.png)

Since we are only dealing with 1 axis (the x axis), finding this is really quite trivial. All we have to do is subtract x1 from x2 and then make sure it is positive since distance can not be negative.

In math form this would look something like:

$$
distance = x_1 - x_2
$$

Observe the following pseudocode where x1 = 5 and x2 = 10.

```js
number x1 = 5
number x2 = 10

number distance = absolute(x1 - x2)
```

There you have it. Absolute is a function that returns a positive number when given a negative (-20 becomes 20 where as 10 remains 10). In every language absolute may be different but in many it is just abs(). This alone isn't too useful so lets put it into a function.

### C Example

```c
#include <math.h>

// Find distance between 2 points
int findDistance1D( int x1, int x2){
  return abs( x1 - x2);
}
```

### Java Example

```java
// Find distance between 2 points
public static int findDistance1D( int x1, int x2){
  return Math.abs( x1 - x2);
}
```

### Python Example

```python
# Find distance between 2 points
def findDistance1D( x1, x2):
  return abs( x1 - x2)
```
