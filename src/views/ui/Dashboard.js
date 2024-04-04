import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardTitle,
    Col,
    Input,
    Label,
    Row
} from "reactstrap";
import SalesChart from "../../components/dashboard/SalesChart";

const Dashboard = () => {
  return (
    <>
      <Row>
        <Col>
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <Breadcrumb>
                <BreadcrumbItem>/ Dashboard</BreadcrumbItem>
              </Breadcrumb>
              <Row className="mt-3">
                <Col xs="3">
                  <Label for="exampleEmail">Service Name</Label>
                  <Input
                    id="exampleEmail"
                    name="vendorName"
                    placeholder="Search By"
                    type="select"
                  >
                    <option>Quiz2play</option>
                  </Input>
                </Col>
                <Col xs="6">
                  <Label for="exampleEmail">Search By</Label>
                  <Input
                    id="exampleEmail"
                    name="vendorName"
                    placeholder="Search By"
                    type="text"
                  />
                </Col>
              </Row>
            </CardTitle>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="6" lg="6" xl="4" xxl="4">
          <SalesChart operatorName={"Quiz2play Zain IQ"} />
        </Col>
        <Col sm="6" lg="6" xl="4" xxl="4">
          <SalesChart operatorName={"Quiz2play Mtn Nigeria"} />
        </Col>
        <Col sm="6" lg="6" xl="4" xxl="4">
          <SalesChart operatorName={"Quiz2play Zain IQ"} />
        </Col>
        <Col sm="6" lg="6" xl="4" xxl="4">
          <SalesChart operatorName={"Quiz2play Zain IQ"} />
        </Col>
        <Col sm="6" lg="6" xl="4" xxl="4">
          <SalesChart operatorName={"Quiz2play Zain IQ"} />
        </Col>
        <Col sm="6" lg="6" xl="4" xxl="4">
          <SalesChart operatorName={"Quiz2play Zain IQ"} />
        </Col>
      </Row>
    </>
  );
};
export default Dashboard;
