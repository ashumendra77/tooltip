import React from "react";
//using props and styling
function ListItem(props) {
    return <div>
        <h3 style={{color: "green"}}>{props.heading}</h3>
        <ul>
            <li>HTML AND CSS</li>
            <li>node js and Mongodb</li>
            <li>Javascript and api</li>
            <li>React</li>
        </ul>
    </div>
}

export default ListItem;