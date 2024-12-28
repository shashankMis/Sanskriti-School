export default function Schools(props) {
    return(
        <>
        <div className="school">
            <img src={props.img} alt=" " />
            <p>{props.title}</p>
            <p>{props.message}</p>
        </div>
        </>
    )
}