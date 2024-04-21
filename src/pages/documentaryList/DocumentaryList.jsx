import "./documentarylist.scss";
import { DataGrid } from "@mui/x-data-grid";
import img from "../../assets/images/profile1.jpg";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState } from "react";
import AdminMode from "../adminMode/AdminMode";
import { Link } from "react-router-dom";

function DocumentaryList() {
  const rows = [
    {
      id: 1,
      name: "Sfinxul",
      image: img,
      duration: 1321313,
    },
    {
      id: 2,
      name: "Sfinxul",
      image: img,
      duration: 1321313,
    },
    {
      id: 3,
      name: "Sfinxul",
      image: img,
      duration: 1321313,
    },
    {
      id: 4,
      name: "Sfinxul",
      image: img,
      duration: 1321313,
    },
    {
      id: 5,
      name: "Sfinxul",
      image: img,
      duration: 1321313,
    },
    {
      id: 6,
      name: "Sfinxul",
      image: img,
      duration: 1321313,
    },
    {
      id: 7,
      name: "Sfinxul",
      image: img,
      duration: 1321313,
    },
    {
      id: 8,
      name: "Sfinxul",
      image: img,
      duration: 1321313,
    },
    {
      id: 9,
      name: "Sfinxul",
      image: img,
      duration: 1321313,
    },
    {
      id: 10,
      name: "Sfinxul",
      image: img,
      duration: 1321313,
    },
    {
      id: 11,
      name: "Sfinxul",
      image: img,
      duration: 1321313,
    },
  ];

  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "documentary",
      headerName: "Documentary",
      width: 500,
      renderCell: (params) => {
        return (
          <div className="documentaryListUser">
            <img
              className="documentaryListImgg"
              src={params.row.image}
              alt=""
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "duration", headerName: "Duration", width: 300 },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="documentaryListActionCenter">
            <Link to={"/admin/documentaries/documentary/" + params.row.id}>
              <button className="documentaryListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="documentaryListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <AdminMode>
      <div className="documentarylist">
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

export default DocumentaryList;
