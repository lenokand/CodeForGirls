import React from "react";


function Item(props){

    return(
        <div className="item">
            <div className="item-image">
                <img src={props.url}/>
            </div>
            <div className="item-description">
                {props.title}
            </div>
            <button className="button">Contact me</button>
        </div>
        
    )
        
    
}
export default Item;