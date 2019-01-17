import React, { Component } from "react";
import ImgCard from "./components/ImgCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Jumbotron from "./components/Jumbotron";
import images from "./images.json";

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images,
    score: 0,
    top: 0
  };

  clickImg = id => {
    // Filter this.state.images for images with an id  equal to the id being passed
    let selected = (this.state.images.filter(image => image.id === id))
    // If image has not been clicked add point and rearrange images
    if (!selected[0].clicked) {
      selected[0].clicked = true
      this.setState(selected)
      this.setState({score: this.state.score + 1})
      this.shuffle(this.state.images)
      if (this.state.score >= this.state.top){
        this.setState({top: this.state.score})
      }
      
    }else {
      alert(`Game Over your score is: ${this.state.score}`)      
      this.reset()
    }
  }

  shuffle = (images) => {
    this.setState({images: images.sort(function() { return 0.5 - Math.random() })})
  }

  reset = () => {
    this.state.images.forEach(element => {
      element.clicked = false
    })
    this.setState({images: this.state.images})
    this.setState({score: 0})
  }
  // Map over this.state.images and render a ImgCrd component for each image object
  render() {
    return (
      <Wrapper>
        <Title score = {this.state.score} top = {this.state.top}/>
        <div className="container">
        <Jumbotron />
        {this.state.images.map(image => (
          <ImgCard
            clickImg={this.clickImg}
            id={image.id}            
            image={image.image}
            
          />
        ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
