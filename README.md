# React JS 

## Chapter 1 - Introduction to React & Setup

Definition -
            React is front-end JavaScript library for buliding single page application and It's user interface based on UI Components.
            
Installation
1. Download and install NodeJs
2. npx create-react-app appname
3. React Developer tool- Chrome/Edge Extension
4. npm start

## Chapter 2 - Components - JSX and Props

### Components :
- Components are one of the core concepts of React. They are the foundation upon which you build user interfaces (UI).Here In this example, There are Two Compenents which are App are parent Component and Video are child component.

### JSX :
- JSX are same as HTML But in JavaScript language which some rule are : 
1. <> </> This empty tag is called a `Fragment`.
2. All the attributes are in the Caml Case Such as the `className` , `BackgroundColor` etc.
3. The attributes in the `style` are in the Experssion Which is the object.
4. All the attributes are Closing tag must be present such as `<div> </div>`

### Props :
- React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.
- Props are the information that you pass to a JSX tag. For example, `className`, `src`, `alt`, `width`, and `height` are some of the props you can pass to an `<img>`.

## Chapter 3 - Conditional Rendering & Lists

- We have rendering the different condition `on JSX` which is called Conditional Rendering.and which are minized them conditional as you possible.
- `map()` In which  we have write a 3 different `video` inside of we are convert data in a single array.and use them in map function. This work are called as `list`.