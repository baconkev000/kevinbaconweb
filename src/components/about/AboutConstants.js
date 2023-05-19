import MemberAccess from '../global/MemberAccess';

function ConstAbout(props) {
    let returningParagraph = "";

    const AboutParagraph1 = <p className="ap-1">Hi, my name is Kevin Bacon and I'm a full stack software engineer based in <MemberAccess members={["Salt Lake City Utah"]} />. I currently work for a company called <a className="link-color" href="https://www.hirelofty.com/" target="_blank">Lofty</a>, where I develop and implement scalable, data driven, high qualty products/features.</p>;
    const AboutParagraph2 = <p className="ap-2">
                             When I’m not working, I am likely executing one of the <span className="secondary-accent-color">hobbies</span> listed above. 
                        </p>;
    const AboutParagraph3 = <p className="ap-3">
                            <span className="quaternary-accent-color"># I enjoy excersizing my creative side in various ways and I am always wanting to gain skills in anything new. From creating art and animations to producing music, there is no limit to what I belive I can do. I love learning and trying new things. I have a strong drive for perfecting my craft and getting better at everything I do, especially programming. 
                        </span></p>;


    switch (props.ap) {
        case "1":
            returningParagraph = AboutParagraph1;
            break;
        case "2":
            returningParagraph = AboutParagraph2;
            break;
        case "3":
            returningParagraph = AboutParagraph3;
            break;
        default: <></>;
        }
    return (
        <>{ returningParagraph }</>
        )
}

export default ConstAbout;


