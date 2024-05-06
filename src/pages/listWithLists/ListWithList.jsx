import "./listWithLists.scss";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useContext, useEffect } from "react";
import AdminMode from "../adminMode/AdminMode.jsx";
import { Link } from "react-router-dom";
import { ListContext } from "../../context/listContext/ListContext.js";
import { getLists, deleteList } from "../../context/listContext/apiCalls.js";

function ListWithList() {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteList(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "Title", width: 350 },
    { field: "genre", headerName: "Genre", width: 180 },
    { field: "type", headerName: "type", width: 180 },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="documentaryListActionCenter">
            <Link
              to={"/admin/lists/list/" + params.row._id}
              state={{ list: params.row }}
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
        <DataGrid
          rows={lists}
          disableSelectionOnClick
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          getRowId={(r) => r._id}
        />
      </div>
    </AdminMode>
  );
}

export default ListWithList;
