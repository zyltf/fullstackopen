const Part = (props) => {
    console.log("Part Rendered")

    return (
        <>
            <p>
                {props.part} {props.exercises}
            </p>
        </>
    )
}

export default Part