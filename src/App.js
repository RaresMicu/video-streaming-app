import React from "react";
import "./app.scss";
import Home from "./pages/home/Home.jsx";
import Stream from "./components/Stream/Stream";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminHome from "./pages/adminHome/AdminHome.jsx";
import UserList from "./pages/userList/UserList.jsx";
import User from "./pages/user/User.jsx";
import Documentary from "./pages/documentary/Documentary.jsx";
import DocumentaryList from "./pages/documentaryList/DocumentaryList.jsx";
import CreateDocumentary from "./pages/createDocumentary/CreateDocumentary.jsx";
import CreateUser from "./pages/createUser/CreateUser.jsx";

const App = () => {
  const user = true;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/register" replace />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" replace />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" replace />}
        />

        {user && (
          <>
            <Route path="/longs" element={<Home type="long" />} />
            <Route path="/shorts" element={<Home type="short" />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/video" element={<Stream />} />
            <Route path="/admin/users" element={<UserList />}></Route>
            <Route path="/admin/users/user/:idUser" element={<User />}></Route>
            <Route
              path="/admin/documentaries"
              element={<DocumentaryList />}
            ></Route>
            <Route
              path="/admin/documentaries/documentary/:idDocumentary"
              element={<Documentary />}
            ></Route>
            <Route
              path="/admin/createDocumentary"
              element={<CreateDocumentary />}
            ></Route>
            <Route path="/admin/createUser" element={<CreateUser />}></Route>
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
