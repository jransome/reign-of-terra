# Reign of Terra

built by
* James
* Yulia
* Ryan
* Ben

#### Description

Establish your rule over vast swathes of London just by going for a run or cycle! Raid other people’s territories and gain their lands! Who will have the largest empire? Who’s Reign of Terra will dominate?

#### How does our app work?

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
* To make our app deployable to both Android and iOS, we used React Native.
* React Native allows you to develop apps for both platforms in Javascript
* Our app is broken down into components and screens.
* Components are organised in a heirarchy. For example,
* Map - google map. Holds references to both the grid and to journies
* Grid - holds references to squares (grid cells)
* Squares - has coordinates and an owner/colour
* When a user has made a journey, its coordinates are saved to our database in real time, meaning that other users will be able to see the new journey without reloading.
* The new journey is broken down into lines and each line is checked for a collision with each square on the grid. When a square is ‘collided’ with, the ownership of said square is transferred to the owner of that journey.

#### Struggles

* Never built a mobile app before
* How to choose the technologies to use
* What materials to use to build a boat?
* The idea was floated between a mobile app and a web app
* No idea how none of these stacks work
* Spending too much time on choosing technologies, could not make firm decision  
* Once we decided on React Native all error messages didn’t make sense
* Went through the dependency hell - could not get code running on all machines
* Extracting logic to the separate components
* Getting false positives from the simulator - defaulted to San Francisco
* Working out the detection collision on the square
* … and many others along the way
