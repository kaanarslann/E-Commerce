import {Switch, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";

export default function PageContent() {
    return (
        <div className="page-content">
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/shop">
                    <ShopPage />
                </Route>
            </Switch>
        </div>
    )
}