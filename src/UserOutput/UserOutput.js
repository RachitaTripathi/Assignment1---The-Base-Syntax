import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <h2>User Name: {props.username}</h2>
            <p>Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
            
            <p>Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh.</p>
        </div>
    ) 
};

export default userOutput;