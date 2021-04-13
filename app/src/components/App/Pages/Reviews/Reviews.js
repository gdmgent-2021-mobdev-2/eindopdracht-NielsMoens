import ReviewOverview from "./Overview/ReviewOverview";
import {Redirect, Route, Switch} from "react-router-dom";
import {Routes} from "../../../../core/routing/routing";
import CreateReview from './Create/CreateReview'

const Reviews  = () => {
    return(
        <>
            <Switch>
                <Route path={Routes.ReviewsCreate}>
                    <CreateReview />
                </Route>
                <Route path={Routes.Reviews}>
                    <ReviewOverview />
                </Route>
                <Redirect to={Routes.Reviews}/>
            </Switch>
        </>
    )
}
export default Reviews