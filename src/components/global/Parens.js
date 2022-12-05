function Parens(props) {
    return (
            props.func ?
                <span><span className="senary-accent-color">&#40;&#41;</span>:</span>
                :
                <span className="senary-accent-color">&#40;&#41;</span>
    )
}

export default Parens;