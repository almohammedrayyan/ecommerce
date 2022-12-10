import React from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        <Link to="/users/new" className="link">
          Add New
        </Link>
        <DataGrid
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          className="datagrid"
          rowsPerPageOptions={[9]}
          checkboxSelection
          style={{ position: "relative", marginTop: "10px" }}
        />
      </div>
    </div>
  );
};

export default Datatable;
