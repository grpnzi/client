import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import FormLogin from "./FormLogin";
import FormAnon from "./FormAnon";
import IsPrivate from "../IsPrivate/IsPrivate";


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
                    <IsPrivate>
                        <FormLogin experienceId={experienceId} getReviews={getReviews}/>
                    </IsPrivate>
                </>
            )}
        </>
    );
}

export default Review;
