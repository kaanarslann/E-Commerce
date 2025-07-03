import {Switch, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function PageContent() {
    return (
        <div className="page-content">
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
            </Switch>
        </div>
    )
}