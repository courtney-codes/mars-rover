# Mars Rover

Hey there! This is my approach to the Mars Rover coding challenge.

Built with React, Typescript and Vite. Time taken was ~3 hours.

## The solution

### Initial approach

I first set out to handle the structure I was going to need to define the grid and rovers. What information do we need to store about a rover?

We need its position on the grid (stored as _x_ and _y_ co-ordinates) and its direction - north, east, south, or west, represented by N, E, S, and W.

The power of Typescript lets us dictates these values as literal type unions, so that the input to our functions can only be these types.

I then created some helper functions:

- `createRover`, creating a rover object
- `moveRover`, moving the rover forward one tile in its intended direction
- `rotateRover`, which turns the rover left or right 90 degrees

With these instructions, we can take a list of instructions, and use a reducer to apply them one by one, ending at the final position.

### Assumptions

In my code and unit tests, I've made the following assumptions:

- Rovers cannot be created out of bounds. If a rover is created with either of its x or y co-ordinates out of bounds, they are set to the nearest boundary.
- Rovers cannot move out of bounds. If a rover is instructed to move out of bounds, it does nothing.
- Rovers can only face N, E, S, or W. If a rover is created with an invalid direction, it defaults to facing north (N).
- The only instructions that can be given to a rover are L, R, and M. Any other instructions or characters in that line are ignored.
- More than one rover can occupy the same square at the same time. If this isn't the case, I'd need to refactor the solution so that the _grid itself_ is aware of what rovers are on it, and then when moving a rover you can check if a rover already exists at that position. I would use some form of state management like Redux for this.
 
## Installation

Install the dependencies with `npm install`.

## Running the UI

I've built a quick UI so that the user can input instructions line by line and their input is parsed (to remove whitespace and characters not included).

To run the UI, run `npm run dev`.

## Running the tests

To verify the solution and all of the other functions work correctly, the unit tests can be run with `npm run test`.

Unit tests have been written in Vitest.

## What would I do next?

A few ideas to take this solution further:
- A visual representation of the rovers on a grid, animated to show each instruction being carried out
- Making the rovers aware of each other and act to avoid collisions
- Some more visual flair like animations
- Some input validation with feedback displayed to the user to help against incorrect input