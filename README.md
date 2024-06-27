# Counter using useState Hook

This is a simple React application that demonstrates the usage of the `useState` hook by implementing a counter. The counter can be incremented, reset, or decremented using buttons.

## Features

- Increment the counter
- Reset the counter to zero
- Decrease the counter

## Usage
This application has a simple user interface with three buttons:

Increment: Increases the counter by 1
Reset: Resets the counter to 0
Decrease: Decreases the counter by 1

## How the onClick Function Works
The onClick event handler is used in React to handle click events on elements, such as buttons. In this application, three buttons are used to manipulate the counter value. Here’s a detailed explanation of how each onClick function works:

Increment Button : 

```jsx
<button onClick={() => setCounter(counter + 1)} className='p-2 rounded-lg ml-3 bg-green-400'>Increment</button>
onClick Event: When the button is clicked, the function inside the onClick event handler is executed.
Function: () => setCounter(counter + 1)
```
This is an arrow function that calls the setCounter function with the current counter value incremented by 1.
Result: The counter state is updated, and the displayed counter value increases by 1.
similar other button Decrement Button work.
