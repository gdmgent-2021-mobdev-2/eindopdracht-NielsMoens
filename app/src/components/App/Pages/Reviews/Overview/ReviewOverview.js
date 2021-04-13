import useFetch from "../../../../../core/hooks/useFetch";
import Alert from "../../../../Design/Alert";
import Spinner from "../../../../Design/LoadingSpinner";
import {Link, Route} from "react-router-dom";
import {route, Routes} from "../../../../../core/routing/routing";
// import AdminContainer from "../../../../Shared/Admin/AdminContainer";
// import useAdmin from "../../../../../core/hooks/useAdmin";
import {fetchReviews} from "../../../../../core/modules/reviews/api";


const ReviewOverview = () => {
    const {
        data: reviews,
        error,
        isLoading
    } = useFetch(fetchReviews);

    // const admin = useAdmin();

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return <Alert color="danger">{error}</Alert>;
    }


    return (
        <>
            <h1>Reviews</h1>
            <Route>
                <Link to={Routes.ReviewsCreate}>Create review</Link>
            </Route>
            <ul>
                { reviews.map((review) => (
                    <li key={review._id}>
                        {
                            // admin ? <Link to={route(Routes.ClientsDetail, {id: review._id})}>{review.name}</Link>
                            // : <p> {client.name}</p>
                            <p>JA WE ZEN DER</p>
                        }
                    </li>
                ))}
            </ul>
        </>
    )
};

export default ReviewOverview