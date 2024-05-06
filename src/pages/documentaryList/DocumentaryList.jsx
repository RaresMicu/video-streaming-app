import "./documentarylist.scss";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState, useContext, useEffect } from "react";
import AdminMode from "../adminMode/AdminMode";
import { Link } from "react-router-dom";
import { DocumentaryContext } from "../../context/documentaryContext/DocumentaryContext.js";
import {
  getDocumentaries,
  deleteDocumentary,
} from "../../context/documentaryContext/apiCalls.js";

function DocumentaryList() {
  const { documentaries, dispatch } = useContext(DocumentaryContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDocumentaries(dispatch);
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const handleDelete = (id) => {
    deleteDocumentary(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "documentary",
      headerName: "Documentary",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="documentaryListUser">
            <img className="documentaryListImgg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "Year", width: 120 },
    { field: "duration", headerName: "Duration", width: 120 },
    { field: "isShort", headerName: "isShort", width: 120 },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="documentaryListActionCenter">
            <Link
              to={"/admin/documentaries/documentary/" + params.row._id}
              state={{ documentary: params.row }}
            >
              <button className="documentaryListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="documentaryListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <AdminMode>
      <div className="documentarylist">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <DataGrid
            rows={documentaries ? documentaries : []}
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

export default DocumentaryList;
