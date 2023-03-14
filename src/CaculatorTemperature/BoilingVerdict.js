export default function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>the water would boil</p>
    }
    return <p>The water would not boil</p>
}