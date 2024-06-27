import React, { Component } from 'react'

export default class ClassUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
      }

    //   static getDerivedStateFromProps(props, state) {
    //     return {favoritecolor: "Black"};
    //   }

      shouldComponentUpdate() { //return a Boolean value that specifies whether React should continue with the rendering or not.
        return true;
      }

      changeColor = () => {
        this.setState({favoritecolor: "blue"});
      }

      getSnapshotBeforeUpdate(prevProps, prevState) {  // method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.
        // you should also include the componentDidUpdate() method, otherwise you will get an error.
        document.getElementById("div1").innerHTML =
        "Before the update, the favorite was " + prevState.favoritecolor;
      }
      componentDidUpdate() { //  method is called after the component is updated in the DOM.
        document.getElementById("div2").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
      }



      render() {
        return (
          <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <button type="button" onClick={this.changeColor}>Change color</button>
          <div id="div1"></div>
          <div id="div2"></div>
          </div>
        );
}
}




  
