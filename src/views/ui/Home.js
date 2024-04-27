import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom/dist";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

const tableHeader = [
  { columnName: "AdvId" },
  { columnName: "Vendor Name" },
  { columnName: "Postback Url" },
  { columnName: "Payout" },
  { columnName: "Callback Limit" },
  { columnName: "Active Status" },
  { columnName: "Share" },
];

const Home = () => {
  const navigate = useNavigate();
  const [buttonType, setButtonType] = useState();
  const location = useLocation();
  const { data, serviceDatas } = location.state;
  const [tableContent, setTableContent] = useState([
    {
      advId: "",
      name: "",
      postbackUrl: "",
      postbackUrl: "",
      payout: "",
      capping: "",
      callbackLimit: "",
      status: "",
      Share: "",
    },
  ]);
  useEffect(() => {
    getVendorDetail();
  }, [data]);

  const getVendorDetail = async () => {
    axios
      .post(
        "http://localhost:8080/api/content/getVendors",
        {
          serverKey: "1234",
        },
        {
          headers: {
            Accept: "*/*",
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setTableContent(response.data);
      })
      .catch((error) => {
        navigate("/login");
        console.error("There was a problem with the request:", error);
      });
  };

  return (
    <Row>
      <Col>
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
          {buttonType === "add-vendor" && <Vendor vendorData={data.subItem} />}
          {buttonType === "conversion" || buttonType === "vendor-detail" ? (
            <ProjectTables tableData={tableContent} tableHeader={tableHeader} />
          ) : null}
          {buttonType === "supress-logic" && <Suppres vendor={tableContent} />}
        </Card>
      </Col>
    </Row>
  );
};
export default Home;
