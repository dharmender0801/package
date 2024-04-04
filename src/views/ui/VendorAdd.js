import { useState } from "react";
import {
  Button,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";
export const Vendor = () => {
  const [rSelected, setRSelected] = useState(null);
  const onRadioBtnClick = (rSelected) => {
    setRSelected(rSelected);
  };
  return (
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
                type="text"
              />
            </Col>
            <Col
              sm="12"
              md={{
                offset: 0,
                size: 8,
              }}
              //  xs="6"
            >
              <Label for="examplePassword">Postback URL</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="https://hi5mobi.o18.click/p?m=4921&tid={clickid}"
                type="text"
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row className="mt-3">
            <Col xs="6" sm="4">
              <Label for="exampleSelect">Payout</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="0"
                type="number"
              />
            </Col>
            <Col xs="6" sm="4">
              <Label for="exampleSelect">Daily Capping</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="0"
                type="number"
              />
            </Col>
            <Col sm="4">
              <Label for="exampleSelect">Callback Limit</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="0"
                type="number"
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row className="mt-3">
            <Col xs="6" sm="4">
              <Label for="exampleSelect">Status</Label>
              <Input id="exampleSelect" name="select" type="select">
                <option>Active</option>
                <option>Inactive</option>
              </Input>
            </Col>
            <Col xs="6" sm="4">
              <Label for="exampleSelect">Sharing Logic</Label>
              <Input id="exampleSelect" name="select" type="select">
                <option>0% Share</option>
                <option>10% Share</option>
                <option>20% Share</option>
                <option>25% Share</option>
                <option>33% Share</option>
                <option>50% Share</option>
                <option>66% Share</option>
                <option>75% Share</option>
                <option>80% Share</option>
                <option>90% Share</option>
                <option>100% Share</option>
              </Input>
            </Col>
          </Row>
          <Row className="mt-3">
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
          </Row>
        </FormGroup>
        <Button className="mt-2" color="success">
          Submit
        </Button>
      </Form>
    </CardBody>
  );
};