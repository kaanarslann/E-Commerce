import {Switch, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductDetail from "../pages/ProductDetail";
import Contact from "../pages/Contact";
import Team from "../pages/Team";
import About from "../pages/About";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import ShoppingCart from "../pages/ShoppingCart";
import CreateOrder from "../pages/CreateOrder";
import PrivateRoute from "../components/PrivateRoute";
import OrderHistory from "../pages/OrderHistory";

export default function PageContent() {

    return (
        <div className="page-content">
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId">
                    <ProductDetail />
                </Route>
                <Route path="/shop/:gender/:categoryName/:categoryId">
                    <ShopPage />
                </Route>
                <Route exact path="/shop">
                    <ShopPage />
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
                <Route path="/login">
                    <LogIn />
                </Route>
                <Route path="/cart">
                    <ShoppingCart />
                </Route>
                <PrivateRoute path="/order">
                    <CreateOrder />
                </PrivateRoute>
                <PrivateRoute path="/history">
                    <OrderHistory />
                </PrivateRoute>
            </Switch>
        </div>
    )
}