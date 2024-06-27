import React, { Component } from 'react'

export default class ClassMount extends Component {

  constructor(props) { //Place to set up the initial state and other initial values
    super(props);  //The super() keyword is used in a constructor to call the constructor of the parent class.
    this.state = {favoritecolor: "red"};
  }

  static getDerivedStateFromProps() {  //Static- you can only call the method on the class itself.
    // getDerivedStateFromProps- returns an object with changes to the state
    return {favoritecolor: "Green"};
  }


   componentDidMount(){// React will call it when your component is added (mounted)
    console.log("componentDidMount: When component renders for first time")
   }

   
  render() { // method that actually outputs the HTML to the DOM
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}
