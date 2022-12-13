import Parens from "./Parens";

function MemberAccess(props) {

    function createMemberHTML() {
        let colorStylesArray = ['secondary-accent-color', 'accent-color', 'quinary-accent-color'];
        let membersList = [];
        let i = 0;
        let k = 0;

        props.members.forEach(member => {
            // create the array of words that will be split into different colors
            let membersSplit = member.split(" ");
            // for each word change color and push to memberList array
            membersSplit.forEach(el => { 
                membersList.push(
                // if the last member then add Parenthesis and ommit the dot
                k !== membersSplit.length-1 ?
                        <span key={ el }><span className={colorStylesArray[i]}>{el}</span><span className="dot">.</span></span>
                    :
                        <span key={ el }><span className={colorStylesArray[i]}>{el}</span><Parens func={false} /></span>
                )
                i !== colorStylesArray.length - 1 ? i++ : i = 0;
                k++;

            })
            // starts the colors cycle over when the end of the colors array has been reached
        })

        return membersList;
    }

   

    return (
        <div className="flex-row member-access-text">
            {createMemberHTML()}
        </div>
    )
}

export default MemberAccess;