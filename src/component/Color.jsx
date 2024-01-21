import { Tooltip as ReactTooltip } from 'react-tooltip'

export default function Mytooltip({ pos }) {

    return (

        <div>
            <div><h1 style={{ "backgroundColor": "blue", "padding": "20px" }}>Tooltip App</h1></div>
            <ReactTooltip id="my-tooltip" />

            <a data-tooltip-id="my-tooltip" data-tooltip-place={pos} data-tooltip-content="Hello Tooltip!">
                Hello Ninja!
            </a>

        </div>
    )
}