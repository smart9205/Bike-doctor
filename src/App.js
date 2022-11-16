import "./App.css";
import Navbar2 from "./page/Shared/Navbar2";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home/Home";
import Blog from "./page/Home/Blog";
import Login from "./page/Login/Login";
import Dashboard from "./page/Dashboard/Dashboard";
import Purchase from "./page/Purchase/Purchase";
import NotFound from "./page/NotFound/NotFound";
import SignUp from "./page/Login/SignUp";
import RequireAuth from "./page/Login/RequireAuth";
import Footer from "./page/Home/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyOrders from "./page/Dashboard/MyOrders";
import AddReview from "./page/Dashboard/AddReview";
import MyProfile from "./page/Dashboard/MyProfile";
import ManageProducts from "./page/Dashboard/ManageProducts";
import MakeAdmin from "./page/Dashboard/MakeAdmin";
import AddProduct from "./page/Dashboard/AddProduct";
import Parts from "./page/Home/Parts";

function App() {
  return (
    <div>
      <Navbar2></Navbar2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Parts" element={<Parts />} />
        <Route
          path="Dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="AddReview" element={<AddReview></AddReview>}></Route>
          <Route path="MyProfile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="ManageProducts"
            element={<ManageProducts></ManageProducts>}
          ></Route>
          <Route path="MakeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path="AddProduct" element={<AddProduct></AddProduct>}></Route>
        </Route>
        <Route
          path="/PartsCard/:PartsCardId"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
