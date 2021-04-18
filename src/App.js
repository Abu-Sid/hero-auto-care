import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddReview from "./components/Admin/AddReview/AddReview";
import AddService from "./components/Admin/AddService/AddService";
import AllOrder from "./components/Admin/AllOrder/AllOrder";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import ManageProduct from "./components/Admin/ManageProduct/ManageProduct";
import Checkout from "./components/Checkout/Checkout";
import Home from "./components/HomePage/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Order from "./components/Order/Order";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


export const UserContext= createContext();
export const ProductContext= createContext();

function App() {
  const [loggedUser,setLoggedUser]=useState({})
  const [orderProduct,setOrderProduct]=useState({})
console.log(orderProduct);
  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
    <ProductContext.Provider value={[orderProduct,setOrderProduct]}>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/order">
            <Order/>
          </PrivateRoute>
          <PrivateRoute path="/addProduct">
            <AddService/>
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <AddReview/>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <MakeAdmin/>
          </PrivateRoute>
          <PrivateRoute path="/manage">
            <ManageProduct/>
          </PrivateRoute>
          <PrivateRoute path="/allOrders">
            <AllOrder/>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <Checkout/>
          </PrivateRoute>
          <Route path="*">
            <h1 style={{textAlign: "center"}}>page not found</h1>
          </Route>
        </Switch>
      </Router>
      </ProductContext.Provider>  
    </UserContext.Provider>
  );
}


export default App;