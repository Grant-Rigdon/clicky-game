import React from "react";
import "./style.css";



function Jumbotron() {
    return(
        <div className="jumbotron jumbotron-fluid">
            <div  id="jtron">
                <h1 className="display-1">Clicky <img id="title" alt="got" src="https://i1.sndcdn.com/artworks-000105278416-7e855q-t500x500.jpg"/></h1>
                <h4>Click on an image to earn points, but don't click on any more than once!</h4>
            </div>
        </div>
    )
  }
  
  export default Jumbotron;