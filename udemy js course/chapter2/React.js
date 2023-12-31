// What is React js?
// React js is a library of a javascript with help of react we can build single page application , resuable components.

// what is single page appication ?
//  A single-page application is an app that works inside a browser and does not require page reloading during use.
// 1 SPA is fast, as most resources (HTML+CSS+Scripts) are only loaded once throughout the lifespan of application. Only data is transmitted back and forth.
// 2 When a user interacts with an SPA, such as clicking a link or submitting a form, the JavaScript framework handles the request and updates the content dynamically.

// What is dom ?
// When a page is loaded , the browser creates a Document Object Model of the page. Html documents allows javascript to access html elements and style to manipulate them.

// What is virtual Dom ?
// virtual dom is the copy of actual Dom and it is lighter than a actual Dom. Manipulating a Orginal Dom is slow but manipulating a virtual Dom is fast .if there is change in our application virtual dom gets updated. instead of the original Dom. if there is any change in a application a new virtual dom is created and it will compare with previous virtual dom tree and make a note of the changes . and it will find best possible way to make changes to the realDom. now only the updated element will get rendered on the page again.

// what is higher order component ?
// Higher Order Component(HOC) is a function which takes a component as a props and return a new component.

// A HOC is an advanced tech in react for reusing component logic.

// what is event ?
// An event is an action that could be triggered as a result of the user action or system generated event. For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events.

// What is lexical Scopping ?
// Lexical Scoping : a function that is inside a another function get access to the scope of the outer function.(inner function can access to the parent varible but parrent cannot access to inner function variable.)

// What is HOOKS ?
// Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

//1. features of class based components in function based components
//2. it allows you to use state and other react features without writing a class.

// what is profiler ?
// profiler measures how react application render at what "cost" of rendering. its purpose is to help identify parts of an application that are slow and may benefit from optimizations such as memoization.

// what is react dom?
// ReactDOM is a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page.

// what is fragmensts ?
// React is for a components to return multiple elements Fragments let you group a list of children without adding extra nodes to the DOM

// what is Reconciliation state ?
// Reconciliation is a process in which react updates the DOM. when a component's state changes.

// what is the diff between react component and react pure component ?
// In react component when the parent's props are changed in that condition whole tree will be rerender.

// but in react pure component when the parent's prop are changed in that condition whole tree will not be rerender. only those component will rerender where props are changing


// what is key in map 
// A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are used to give an identity to the elements in the lists.

// useEffect how we can handle clean up function in useEffect

// In React, the useEffect hook is used to handle side effects in functional components. Side effects can include things like data fetching, subscriptions, manually changing the DOM, or any action that affects the outside world from within a component.

// When you use useEffect, it is essential to clean up after the side effect is done or before the component is unmounted. The reason for this is to avoid memory leaks and unexpected behavior in your application. Here's why cleanup functions are important:

// Preventing memory leaks: If you set up a subscription, timer, or any ongoing process within useEffect without cleaning it up, it may continue to exist even after the component is unmounted. This can lead to memory leaks, as the resources associated with those side effects are not released properly.

// Avoiding stale data and state updates: If you fetch data asynchronously in useEffect and the component is unmounted before the data is received, attempting to update the state or modify the component can lead to errors or unexpected behavior. The cleanup function ensures that the state updates or DOM manipulations do not happen on an unmounted component.

// Unsubscribing from subscriptions: When setting up subscriptions (e.g., WebSocket connections), you need to unsubscribe or close the connection when the component is unmounted. Otherwise, you might receive data updates on a component that is no longer visible or valid.

