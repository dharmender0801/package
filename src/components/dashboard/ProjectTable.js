import { CardBody, CardSubtitle, CardTitle, Table } from "reactstrap";

const ProjectTables = ({ tableHeader, tableData }) => {
  function truncateString(url, maxLength) {
    if (!url) return "";
    if (url.length <= maxLength) return url;
    return url.substring(0, maxLength) + "...";
  }

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
                <td>{tdata.advId}</td>
                <td>{tdata.vendorName}</td>
                <td>{truncateString(tdata.postbackUrl, 25)}</td>
                {/* <td>{truncateString(tdata.lpUrl, 25)}</td> */}
                <td>{tdata.payout}</td>
                <td>{tdata.callbackLimit}</td>
                <td>
                  {tdata.status === "0" ? (
                    <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
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
