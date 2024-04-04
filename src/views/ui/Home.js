import { useState } from "react";
import { useLocation } from "react-router-dom/dist";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import ProjectTables from "../../components/dashboard/ProjectTable";
import { Suppres } from "./Supress";
import { Vendor } from "./VendorAdd";
const tableData = [
  {
    name: "Hanna Gover",
    postbackUrl: "hgover@gmail.com",
    payout: "Flexy React",
    capping: "pending",
    callbackLimit: "35",
    status: "95K",
    Share: "95K",
  },
  {
    name: "Hanna Gover",
    postbackUrl: "hgover@gmail.com",
    payout: "Flexy React",
    capping: "pending",
    callbackLimit: "35",
    status: "95K",
    Share: "95K",
  },
  {
    name: "Hanna Gover",
    postbackUrl: "hgover@gmail.com",
    payout: "Flexy React",
    capping: "pending",
    callbackLimit: "35",
    status: "95K",
    Share: "95K",
  },
  {
    name: "Hanna Gover",
    postbackUrl: "hgover@gmail.com",
    payout: "Flexy React",
    capping: "pending",
    callbackLimit: "35",
    status: "95K",
    Share: "95K",
  },
  {
    name: "Hanna Gover",
    postbackUrl: "hgover@gmail.com",
    payout: "Flexy React",
    capping: "pending",
    callbackLimit: "35",
    status: "95K",
    Share: "95K",
  },
];

const tableHeader = [
  { columnName: "Vendor Name" },
  { columnName: "Postback Url" },
  { columnName: "Payout" },
  { columnName: "Daily Capping" },
  { columnName: "Callback Limit" },
  { columnName: "Active Status" },
  { columnName: "Share" },
];

const Home = () => {
  const [buttonType, setButtonType] = useState();
  const location = useLocation();
  const { data, serviceDatas } = location.state;
  // useEffect(() => {
  //   swal("Vendor Added !", "vendor Added Successfully", "success");
  // }, [data]);

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <Breadcrumb>
              <BreadcrumbItem>{serviceDatas.item.serviceName}</BreadcrumbItem>
              <BreadcrumbItem active>
                {data.subItem.operatorName}
              </BreadcrumbItem>
            </Breadcrumb>
            <div className="button-group">
              <Button
                onClick={() => {
                  setButtonType("add-vendor");
                }}
                active={buttonType === "add-vendor"}
                className="btn"
                outline
                color="primary"
              >
                Add Vendor
              </Button>
              <Button
                onClick={() => {
                  setButtonType("conversion");
                }}
                active={buttonType === "conversion"}
                className="btn"
                outline
                color="danger"
              >
                Conversion
              </Button>
              <Button
                onClick={() => {
                  setButtonType("supress-logic");
                }}
                active={buttonType === "supress-logic"}
                className="btn"
                outline
                color="success"
              >
                Supress Logic
              </Button>
              <Button
                onClick={() => {
                  setButtonType("vendor-detail");
                }}
                active={buttonType === "vendor-detail"}
                className="btn"
                outline
                color="info"
              >
                Vendor Detail
              </Button>
            </div>
          </CardTitle>
          {buttonType === "add-vendor" && <Vendor />}
          {buttonType === "conversion" || buttonType === "vendor-detail" ? (
            <ProjectTables tableData={tableData} tableHeader={tableHeader} />
          ) : null}
          {buttonType === "supress-logic" && <Suppres />}
        </Card>
      </Col>
    </Row>
  );
};
export default Home;
