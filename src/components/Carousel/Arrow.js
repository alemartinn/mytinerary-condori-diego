import '../../styles/Arrow.css'

function Arrow(props) {
    if (!props.icon) {
        throw new Error('A string is required for the icon property')
    }

    if (!props.click) {
        throw new Error('A function is required for the click property')
    }

    return (
        <div className="Arrow-box">
            <button className="Arrow-button" onClick={props.click}>
                {props.icon}
            </button>
        </div>
    )
}

export default Arrow