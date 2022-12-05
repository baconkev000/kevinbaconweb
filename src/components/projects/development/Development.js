import ProjectButton from "../ProjectButton";

function Development() {
    let linksAr = [
        [ "Art", null ],
        ["Video",null],
    ];

    return (
        <div className="row">
        <ProjectButton addThis={false} cols={3} links={new Map(linksAr)} />
        </div>
    )
}

export default Development;