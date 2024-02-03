import { useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip'

export default function Mytooltip() {

    const [placement, setPlacement] = useState("top");

    // function to update placement state when button is clicked
    const onBtnClick = (_, position) => {
        setPlacement(position);
    };

    return (

        <div>


            <div><h1 style={{ "backgroundColor": "blue", "padding": "20px" }}>Tooltip App</h1></div>
            <ReactTooltip id="my-tooltip" />

            <div ClassName="" style={{"margin":"80px"}}>
                <h2>Select tooltip position</h2>
                <button type="button" onClick={(e) => onBtnClick(e, "top")} style={{"margin":"10px"}}>Top</button>
                <button type="button" onClick={(e) => onBtnClick(e, "bottom")} style={{"margin":"10px"}} >Bottom</button>
                <button type="button" onClick={(e) => onBtnClick(e, "left")} style={{"margin":"10px"}}>Left</button>
                <button type="button" onClick={(e) => onBtnClick(e, "right")} style={{"margin":"10px"}} >Right</button>
            </div>

            <a  data-tooltip-id="my-tooltip" data-tooltip-place={placement} data-tooltip-content="Hello Tooltip!">
                Hello Ninja
            </a>

        </div>
    )
}