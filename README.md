# react_clock

This is a mini project to demonstrate the purpose of state in React. 

It is a single clock at first and at the click of a button more and more clocks appear, all of which share one state, living in the overarching Page class. The number of clocks is also held in the state of that parent.

The Babel transformer might misbehave in Chrome because of CORS restrictions, so if that doesn't work try another webbrowser, like FireFox.

![So Many Clocks](/docs/more-clocks.png)

I did this project during my internship with [Corestone Investment Managers](http://corestone.ch/en/home/ "Corestone Investment Managers") (Summer 2017) to learn React.

See the React docs on lifting state up (as I have done here from the individual clocks to the page class): https://facebook.github.io/react/docs/lifting-state-up.html

This was done in no small part with the help of React's documentation on State and Lifecycle: 
https://facebook.github.io/react/docs/state-and-lifecycle.html
