import React,{Component} from 'react';
import reactDom from 'react-dom';
import './Demo.css';
const Demo = ({name}) => {
    return  <div className="main-div">
                <h1>Hello {name}!</h1>
                <p>hii</p>
            </div>;
}

export default Demo;