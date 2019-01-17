import React from "react";
import "./style.css";

function ImgCard(props) {
  return (
    <div className="card" >  
      <span onClick={() => props.clickImg(props.id)} >
        <img className="card-img" alt={props.id} src={props.image} />
      </span>          
        
      
    </div>
  );
}

export default ImgCard;
