import "./userList.scss";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState, useContext, useEffect } from "react";
import AdminMode from "../adminMode/AdminMode";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserContext";
import { getUsers, deleteUser } from "../../context/userContext/apiCalls";

function UserList() {
  const { users, dispatch } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImgg"
              src={params.row.profilePicture}
              alt=""
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 300 },
    { field: "isAdmin", headerName: "IsAdmin", width: 200 },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListActionCenter">
            <Link
              to={"/admin/users/user/" + params.row._id}
              state={{ user: params.row }}
            >
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <AdminMode>
      <div className="userList">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <DataGrid
            rows={users ? users : []}
            disableSelectionOnClick
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            getRowId={(r) => {
              if (r._id && typeof r._id !== "boolean") {
                return r._id;
              } else {
                return Math.floor(Math.random() * 100000);
              }
            }}
          />
        )}
      </div>
    </AdminMode>
  );
}

export default UserList;
