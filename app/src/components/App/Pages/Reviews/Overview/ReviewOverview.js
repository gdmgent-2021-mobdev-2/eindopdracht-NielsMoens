import useFetch from "../../../../../core/hooks/useFetch";
import Alert from "../../../../Design/Alert";
import Spinner from "../../../../Design/LoadingSpinner";
import { Link, Route } from "react-router-dom";
import { route, Routes } from "../../../../../core/routing/routing";
import { fetchReviews } from "../../../../../core/modules/reviews/api";
import Button from "../../../../Design/Button";

const ReviewOverview = () => {
  const { data: reviews, error, isLoading } = useFetch(fetchReviews);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert color="danger">{error}</Alert>;
  }
  const fields: JSX.Element[] = [];

  return (
    <>
      <h1>Reviews</h1>
      <Route>
        <Link to={Routes.ReviewsCreate}>
          <Button color="outline-dark">Write Review</Button>
        </Link>
      </Route>
      {reviews.map((review) => (
        <div key={review._id} className="card my-3">
          <div className="card-header">{review.name}</div>
          <div className="card-body">
            <h4 className="card-title fw-bold">
              Project: {review.project.name}
            </h4>
            <h5 className="card-subtitle my-2">{review.title}</h5>
            <p className="card-text">{review.description}</p>
            <span>Rating: {review.score} /5</span>
          </div>
          <div className="card-footer text-muted">{review.createdAt}</div>
        </div>
      ))}
    </>
  );
};

export default ReviewOverview;
