import {Switch, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductDetail from "../pages/ProductDetail";
import Contact from "../pages/Contact";
import Team from "../pages/Team";
import About from "../pages/About";
import SignUp from "../pages/SignUp";

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
                <Route path="/product">
                    <ProductDetail />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/team">
                    <Team />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
            </Switch>
        </div>
    )
}