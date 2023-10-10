import React from "react";

function ListItem(props) {
    return <div>
        <h3>{props.heading}</h3>
        <ul>
            <li>HTML AND CSS</li>
            <li>node js and Mongodb</li>
            <li>Javascript and api</li>
            <li>React</li>
        </ul>
    </div>
}

export default ListItem;