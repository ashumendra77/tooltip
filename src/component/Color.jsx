import { Tooltip as ReactTooltip } from 'react-tooltip'

export default function Colordemo({ props }) {

    console.log(props);

    const name = 'Ashu';
    const lname = 'Singh';
    return (

        <div>
            {/* <h1>Hello {name + " " + lname}</h1>
            <h1>Colors Component</h1> */}
            {/* <button>Hover on me!</button> */}
            {/* <div data-tip="msg to show" data-for='toolTip1' data-place='top'>Tooltip</div> */}
            <ReactTooltip id="my-tooltip" />

            <a data-tooltip-id="my-tooltip"  data-tooltip-place= "bottom" data-tooltip-content="Hello world!">
                ◕‿‿◕
            </a>
            {/* <Tooltip id="my-tooltip" /> */}
            <ul>
                {/* {props.map((c) =>
                    <li>{c}</li>
                )} */}
            </ul>
        </div>
    )
}