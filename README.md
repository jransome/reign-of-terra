# Reign of Terra

<img src="https://i.imgur.com/U0wuNXj.png" width="300" align="right">

Makers Academy final project, July-September 2017

built by
* James
* Yulia
* Ryan
* Ben

Please see our [presentation](http://slides.com/teamdream/deck/live#/) for explanations of our design process, technologies used, architecture and how we worked on this as a team.

#### Description

Establish your rule over vast swathes of London just by going for a run or cycle! Raid other people’s territories and gain their lands! Who will have the largest empire? Who’s Reign of Terra will dominate?

#### To use our app

[Install node](https://nodejs.org/en/download/)

[Install React Native dependencies](https://facebook.github.io/react-native/docs/getting-started.html#content/)

From the terminal:

```
git clone git@github.com:jransome/reign-of-terra.git
cd reign-of-terra
npm i
npm start
```

Then in a new terminal window:

For ios: `react-native run-ios`

For ios: `react-native run-android`

#### How does our app work?

Here is a video demo:

<a href="http://slides.com/teamdream/deck#/1">
<img src="https://i.imgur.com/MGOsp3M.png" width="200">
</a>

* Login/signup
* Pick your empire’s colours
* At beginning of your exercise, press start
* Your run/cycle will be the borders of your territory
* When you finish, press stop.
* Your journey will be saved and your territory allocated.
* Everyone can see territories by their colour

#### How do we allocate territories?
* Initial idea was to draw a line for the journey you make and save that as a polygon
* Users would have to make a 2D shape out of their path (ie. no 1 dimensional route)
* Didn’t appear to have much scope for expanding the game mechanics/rewards
* Therefore the idea of predefined territories came up (grid system)
* Allows ownership of squares which in future can be assigned a value/be contested/contain rewards etc.
* Thus, the scope for more game depth was much greater

#### Architecture

![Architecture](https://i.imgur.com/Qsj5TEi.png)

* To make our app deployable to both Android and iOS, we used React Native.
* React Native allows you to develop apps for both platforms in Javascript
* Our app is broken down into components and screens.
* Components are organised in a heirarchy. For example,
* Map - google map. Holds references to both the grid and to journies
* Grid - holds references to squares (grid cells)
* Squares - has coordinates and an owner/colour
* When a user has made a journey, its coordinates are saved to our database in real time, meaning that other users will be able to see the new journey without reloading.
* The new journey is broken down into lines and each line is checked for a collision with each square on the grid. When a square is ‘collided’ with, the ownership of said square is transferred to the owner of that journey.
