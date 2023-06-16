import React from "react";
import 'tachyons'

const Card = (props)=>{
    const image="https://robohash.org/"+props.id+"?200x200";
    return(
        <div className='bg-light-green dib pa3 br3 ma2 grow bw2 shadow-5'>
            <img alt="Robots" src={image}></img>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}
export default Card;