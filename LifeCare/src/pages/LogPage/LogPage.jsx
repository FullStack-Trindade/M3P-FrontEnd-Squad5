import { useAxios } from "../../hooks/useAxios";
import * as Style from "./LogPage.styles";
import { DataGrid } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
import { LogCardComponent } from "../../components/LogCard/LogCardComponent";

export const LogPage = () => {
  const [data, isLoading] = useAxios({
    method: "get",
    resource: "/logs",
  });

  const method = ["create", "read", "update", "delete"];

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "message", headerName: "Action", width: 470 },
    { field: "endpoint", headerName: "Resource", width: 145 },
    { field: "httpVerb", headerName: "Method", width: 80 },
    { field: "createdAt", headerName: "Date", width: 195 },
  ];

  return (
    <Style.Container>
      <Style.Header>
        {method.map((method, index) => (
          <LogCardComponent key={index * 2} method={method} value={data.data} />
        ))}
      </Style.Header>
      <Style.Body>
        {isLoading ? (
          <CircularProgress color="secondary" size={90} />
        ) : (
          <DataGrid
            rows={data.data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 20, 50]}
          />
        )}
      </Style.Body>
    </Style.Container>
  );
};
