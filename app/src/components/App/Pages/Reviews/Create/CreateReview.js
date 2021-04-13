import ReviewForm from "../Form/ReviewForm";
import useAuthApi from "../../../../../core/hooks/useAuthApi";
import {useHistory} from "react-router";
import {useState} from "react";
import {createClient} from "../../../../../core/modules/clients/api";
import {Routes} from "../../../../../core/routing/routing";
import ErrorAlert from "../../../../Shared/ErrorAlert";

const CreateReview = () => {
    const withAuth = useAuthApi();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    const handleSubmit = (data) => {
        setIsLoading(true);
        withAuth(createClient(data))
            .then(() => {
                history.push(Routes.Clients);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    };

    return (
        <>
            <h1>Write a Review </h1>
            <ErrorAlert error={error}></ErrorAlert>
            <ReviewForm onSubmit={handleSubmit} disabled={isLoading} />
        </>
    )
}
export default CreateReview;