import { useState } from "react";
import {
  Button,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
export const Suppres = (props) => {
  const [vendor, setVendor] = useState(null);
  const handleVendorChange = (selectedValue) => {
    const vendors = JSON.parse(selectedValue);
    setVendor(vendors);
  };

  const onSubmit=(e)=>{
    e.preventDefault();
    console.log(vendor);
  }
  return (
    <>
      <CardBody>
        <Form>
          <FormGroup>
            <Row className="mt-3">
              <Col xs="6" sm="4">
                <Label for="exampleEmail">Vendor Name</Label>
                <Input
                  id="exampleEmail"
                  name="vendorName"
                  placeholder="Enter vendor name"
                  type="select"
                  onChange={(event) => handleVendorChange(event.target.value)}
                >
                  <option></option>
                  {props.vendor.map((item, index) => (
                    <option key={index} value={JSON.stringify(item)}>
                      {item.vendorName}
                    </option>
                  ))}
                </Input>
              </Col>
              {/* <Col xs="6" sm="4">
                <Label for="exampleSelect">Daily Capping</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="0"
                  type="number"
                />
              </Col> */}
              <Col sm="4">
                <Label for="exampleSelect">Callback Limit</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="0"
                  value={vendor ? vendor.callbackLimit : ""}
                  onChange={(event) =>
                    setVendor({
                      ...vendor,
                      callbackLimit: event.target.value,
                    })
                  }
                  type="number"
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row className="mt-3"></Row>
          </FormGroup>
          <FormGroup>
            <Row className="mt-3">
              <Col xs="6" sm="4">
                <Label for="exampleSelect">Share</Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="number"
                  value={vendor ? vendor.cut : ""}
                  onChange={(event) =>
                    setVendor({
                      ...vendor,
                      cut: event.target.value,
                    })
                  }
                />
              </Col>
              <Col xs="6" sm="4">
                <Label for="exampleSelect">Supress</Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="number"
                  value={vendor ? vendor.counter : ""}
                  onChange={(event) =>
                    setVendor({
                      ...vendor,
                      counter: event.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            {/* <Row className="mt-3">
              <Col
                sm="12"
                md={{
                  offset: 2,
                  size: 8,
                }}
              >
                <div className="bg-light p-2 borde text-center ">
                  Share 1 Suppres :: 1
                </div>
              </Col>
            </Row> */}
          </FormGroup>
          <Button onClick={onSubmit} className="mt-2" color="success">
            Update
          </Button>
        </Form>
      </CardBody>
    </>
  );
};
