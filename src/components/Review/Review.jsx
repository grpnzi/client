import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import FormLogin from "./FormLogin";
import FormAnon from "./FormAnon";


function Review(props) {
    const { user } = useContext(AuthContext);
    const { experienceId, getReviews } = props;

    return (
        <>
            {!user ? (
                <>
                    <FormAnon experienceId={experienceId} getReviews={getReviews}/>
                </>
            ) : (
                <>
                    <FormLogin experienceId={experienceId} getReviews={getReviews}/>
                </>
            )}
        </>
    );
}

export default Review;
