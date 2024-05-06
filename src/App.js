import React, { useContext } from "react";
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
import { AuthContext } from "./context/authContext/AuthContext";
import ListWithList from "./pages/listWithLists/ListWithList.jsx";
import List from "./pages/list/List.jsx";
import CreateList from "./pages/createList/CreateList.jsx";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route
          path={"/admin"}
          element={
            user ? (
              user.isAdmin === true ? (
                <AdminHome />
              ) : (
                <Navigate to="/" replace />
              )
            ) : (
              <Navigate to="/register" replace />
            )
          }
        />

        <Route
          path="/"
          element={
            user ? (
              user.isAdmin === true ? (
                <Navigate to="/admin" replace />
              ) : (
                <Home />
              )
            ) : (
              <Navigate to="/register" replace />
            )
          }
        />

        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" replace />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" replace />}
        />

        {user && !user.isAdmin && (
          <>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/longs" element={<Home type="long" />} />
            <Route path="/shorts" element={<Home type="short" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/video" element={<Stream />} />
          </>
        )}

        {user && user.isAdmin && (
          <>
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/admin/users" element={<UserList />}></Route>
            <Route path="/admin/users/user/:idUser" element={<User />}></Route>
            <Route path="/admin/createUser" element={<CreateUser />}></Route>
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
            <Route path="/admin/lists" element={<ListWithList />}></Route>
            <Route path="/admin/lists/list/:idList" element={<List />}></Route>
            <Route path="/admin/createList" element={<CreateList />}></Route>
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
