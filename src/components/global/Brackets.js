function Brackets(props) {
    return (
        props.active ?
                <div className="flex-direction-row"><span className="accent-color">&#123;</span>{props.name}<span className="accent-color">&#125;</span></div>
            :
            <>{props.name}</>
            
    )
}

export default Brackets;