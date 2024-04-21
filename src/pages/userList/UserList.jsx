import "./userList.scss";
import { DataGrid } from "@mui/x-data-grid";
import img from "../../assets/images/profile1.jpg";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState } from "react";
import AdminMode from "../adminMode/AdminMode";
import { Link } from "react-router-dom";

function UserList() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImgg" src={params.row.image} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 300 },
    { field: "status", headerName: "Status", width: 200 },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListActionCenter">
            <Link to={"/admin/users/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      username: "ZalmoxisIon",
      image: img,
      email: "Zamoxis@gmail.com",
      status: "active",
    },
    {
      id: 2,
      username: "ZalmoxisIon",
      image: img,
      email: "Zamoxis@gmail.com",
      status: "active",
    },
    {
      id: 3,
      username: "ZalmoxisIon",
      image: img,
      email: "Zamoxis@gmail.com",
      status: "active",
    },
    {
      id: 4,
      username: "ZalmoxisIon",
      image: img,
      email: "Zamoxis@gmail.com",
      status: "active",
    },
    {
      id: 5,
      username: "ZalmoxisIon",
      image: img,
      email: "Zamoxis@gmail.com",
      status: "active",
    },
    {
      id: 6,
      username: "ZalmoxisIon",
      image: img,
      email: "Zamoxis@gmail.com",
      status: "active",
    },
    {
      id: 7,
      username: "ZalmoxisIon",
      image: img,
      email: "Zamoxis@gmail.com",
      status: "active",
    },
    {
      id: 8,
      username: "ZalmoxisIon",
      image: img,
      email: "Zamoxis@gmail.com",
      status: "active",
    },
    {
      id: 9,
      username: "ZalmoxisIon",
      image: img,
      email: "Zamoxis@gmail.com",
      status: "active",
    },
    {
      id: 10,
      username: "ZalmoxisIon",
      image: img,
      email: "Zamoxis@gmail.com",
      status: "active",
    },
    {
      id: 11,
      username: "ZalmoxisIon",
      image: img,
      email: "Zamoxis@gmail.com",
      status: "active",
    },
  ];

  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <AdminMode>
      <div className="userList">
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </AdminMode>
  );
}

export default UserList;
