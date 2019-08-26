import React from 'react';
const Avatarlist = (props) =>{
    return(
        <div className="avatar ma4 bg-yellow dib pa4 tc grow shadow-4">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Harish" ></img>
            <h1>{props.name}</h1>
            <p>{props.work}</p>
        </div>
    )
}
export default Avatarlist;