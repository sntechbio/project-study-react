function Clock(props) {
    return (
        <div>
            <h1>teste, clock</h1>
            <h2>it is {props.date.toLocalTimeString()}.</h2>
        </div>
    )
}


 export default Clock