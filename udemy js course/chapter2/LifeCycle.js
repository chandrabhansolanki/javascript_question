// what are lifecycle components
// 1 Mounting - Birth of your component
// 2 update = Growth of your component
// 3 UnMount - Death of your component

// Mounting = These method is called when a component is being created and inserted in to the DOM.
// Updating = These method is called when there is a change in the props and state when a component is being re-rendered.
// Unmounting = These method is called when a component is being removed from the DOM

// diff between component did mount and componentwillmount
// componentDidMount() is only called once, on the client, compared to componentWillMount() which is called twice, once to the server and once on the client

// how life cycle works step by step
// 1. first stage is Mounting = These method are called in following order when a component has been created and inserted into the DOM.

// a. constructor()
// b. static getDerivedstateFromProps()
// c. render()
// b. componentDidMount()

//2. secound stage is Updating = An update can be caused by changes to props or state. These methods are called  in the following order when a component is being re-rendered.
// a. static getDerivedStateFromProps(props, state)
// b. shouldComponentUpdate(nextProps, nextState)
// c. render()
// d. getSnapshotBeforeUpdate((prevProps, prevState))
// e.componentDidUpdate(prevProps, prevState, snapshot)

// 3. third state is Unmounting = These method is called when a component is removed from the DOM.
// a. componentWillUnmount()

// What is constructor and there uses?
//  "IMPORTANT POINT"
// IF WE ARE NOT INITIALIZE ANY STATE AND NOT BINDING ANY METHOD IN THAN  WE DON'T TO IMPLEMENT THE CONSTRUCTOR.

// Constructor are only used for two purpose
// 1. we can initialize the local state to this.state
// 2. we can bind the event handler method

// What is static getDerivedstateFromProps() ?
// It will invoke before the render method() and it will return an object to update the state or null if there is nothing.

// what is render()?
// Render function should be pure meaning that it does not modify the component state and it will return the same result.

// what is componentDidMount()
// it will allow us to excute the React code when the component is already present in the reactDom, You may call setState() immediately in componentDidMount(). It will trigger an extra rendering, but it will happen before the browser updates the screen.

// ShouldComponentUpdate(nextProps, nextState) ??
// it will help us to stop re-rendering of an componenet when we are passing props from parrent to a  child . with help of should component we can imporve the perferomance and responsivence of a web application.

// what is SnapshotBeforeUpdate (prevProps, prevState) ?
// These method is invoked just before the DOM is being rendered it will used to store the previous value of the state after the DOM is updated.

// what is componentDidUpdate ?
// whenever there is change in the component due to props , state , method or any other function it will run that component and display in the browser.

// what is ComponentWillUnmount() ?
// When a component is Unmounted you never render the setState, Timer, method, or any other function that were created in componentDidMount .
