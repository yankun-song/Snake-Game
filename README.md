# Snake_Game

## HTML
In the html, I only constructed two divs. One is for the board, in which we play the game. The other is for counting scores.

## JS
- main.js
1. I used querySelector to get the html element <div> for the board, so I can pass it into the constructor of _Apple_ and _Head_.
2. I created corresponding instances for _Apple_, _Head_ and _Body_.
3. In the end, I added an eventListener so I can capture the keyboard instructions.
&nbsp;
- Head.js
1. _constructor(el)_. In the constructor function, I created a html element and appended it to the el, so for a given _Head_ instance, there will be a corresponding html element, where we can show it in the UI. I also added some properties like speed, direction, target.
One thing worth noting is at the end, I used a _setTimeOut()_ where I called the _move()_ method, so the snake can move after being created.
2. _move()_. In this method, I checked if the snake should move to its next position and if it gets an apple. The main logic of the game were all in this method. If I have time to refactor, I will separate some logic like _checkGetApple_, _checkOutRange_ in individual methods.
&nbsp;
- Apple.js
1. _constructor(el)_. Similar to the _Head_. Created a html element so I can change its position on the board.
2. _resetApple()_. Randomly give it a new position.
&nbsp;
- Body.js
1. _constructor(head)_. A body instance will always be linked to a head instance. It also has a _length_ property. 
2. _show()_. In this method, I showed the body nodes. Everytime show the body nodes, I cleared the past body nodes. And then I added current body nodes as html elements. The position of these nodes would be retrieved from the path of the head. What I'm doing can work, but is not efficient, I should refactor in the future.
