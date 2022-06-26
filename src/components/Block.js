import React from 'react';
import './block.css';
function Block(props) {
    return (
      <div>
        
       <img id='img' src='https://image.shutterstock.com/image-photo/playing-piano-closeup-shot-260nw-738539140.jpg' alt=''></img>
       <h3 id="name">{props.Name}</h3>
       <h3 id="music">EMLSA music</h3>
       <h3 id="price">{props.prise}</h3>
       <button>Add to cart</button>
      </div>
    )
  
}
export default Block;
