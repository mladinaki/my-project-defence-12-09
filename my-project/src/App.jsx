import { Route, Routes } from "react-router-dom";
import "./App.css";

import { AuthProvider } from "./contexts/authContexts";
import Path from "./path/path";

// import Create from "./component/create/Create";
import SingForms from './component/SingForm'
import Contact from "./component/contact/Contact";
import Details from "./component/details/Details";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";
import Login from "./component/login/Login";
import NavBar from "./component/Navigate/Navigate";
import Product from "./component/Product/Product";
import Logout from "./component/logout/Logout";
import ShoseEdit from "./component/shose-edit";
import AuthGard from "./component/gards/authGaard";
import ShopingCart from "./component/shopcart/ShopingCart";
import DeleteUser from "./component/DeleteUser";
import CheckOut from "./component/checkOut/CheckOut";
import Form from "./component/Form";
import Check from "./component/checkOut/Check";
import Comment from "./component/comment/comment";
import SingForm from "./component/SingForm";

function App() {
  return (
    <AuthProvider>
      <div id="templatemo_body_wrapper">
        <div id="templatemo_wrapper">
          <div id="templatemo_main"></div>
          <Header />
          <NavBar />
          <Routes>
            <Route path={Path.Home} element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checout/cart" element={<CheckOut />} />
            <Route path="/check/user" element={<Check />} />

            <Route path="/product/catalog" element={<Product />} />
            <Route path="/details/:shoseId" element={<Details />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Form />} />
            <Route path="/del/user/:shoseId" element={<DeleteUser />} />

            <Route element={<AuthGard />}>
              <Route path="/shoping/cart" element={<ShopingCart />} />
              <Route path="/add/sneakers" element={<SingForm />} />
              <Route path={'/edit/:shoseId'} element={<ShoseEdit />} />
              <Route path="/comment-edit/:shoseId" element={<Comment />} />
              <Route path={Path.Details} element={<Details />} />
              <Route path={Path.Logout} element={<Logout />} />
            </Route>
          </Routes>

          <Footer />
        </div>
      </div>
    </AuthProvider>
  );
}
export default App;
