export default function SubElements(props) {
    return (
        <>
            {
                props.text.split("").map((val, id) => {
                    return <props.element key={id} className={props.class_of_element} >{val}</props.element>
                })
            }
        </>
    )
}