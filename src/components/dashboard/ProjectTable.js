import { CardBody, CardSubtitle, CardTitle, Table } from "reactstrap";

const ProjectTables = ({ tableHeader, tableData }) => {
  return (
    <div>
      <CardBody>
        <CardTitle tag="h5">Project Listing</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Overview of the projects
        </CardSubtitle>

        <Table className="no-wrap mt-3 align-middle" responsive borderless>
          <thead>
            <tr>
              {tableHeader.map((item) => (
                <th>{item.columnName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((tdata, index) => (
              <tr key={index} className="border-top">
                <td>{tdata.name}</td>
                <td>{tdata.postbackUrl}</td>

                <td>{tdata.payout}</td>
                <td>{tdata.capping}</td>
                <td>{tdata.callbackLimit}</td>
                <td>
                  {tdata.status === "pending" ? (
                    <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                  ) : tdata.status === "holt" ? (
                    <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                  ) : (
                    <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                  )}
                </td>
                <td>{tdata.Share}%</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </div>
  );
};

export default ProjectTables;
