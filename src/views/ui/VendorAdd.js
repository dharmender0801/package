import axios from "axios";
import { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
export const Vendor = (vendorData) => {
  const [rSelected, setRSelected] = useState(null);
  const [advId, setAdvId] = useState("");
  const [formData, setFormData] = useState({
    vendorName: "",
    postbackUrl: "",
    payout: "",
    callbackLimit: "",
    status: 1,
    cut: "",
    counter: "",
    advId: advId,
  });
  const onRadioBtnClick = (rSelected) => {
    setRSelected(rSelected);
  };
  const navigate = useNavigate();
  useEffect(() => {
    getVendorDetail();
  }, []);

  const getVendorDetail = async () => {
    axios
      .post(
        "http://localhost:8080/api/content/getCpidDesc",
        {
          serverKey: vendorData.vendorData.serverKey,
          query: vendorData.vendorData.getAdvIdQuery,
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
        let newValue = parseInt(response.data) + 1;
        setAdvId(newValue);
      })
      .catch((error) => {
        navigate("/login");
        console.error("There was a problem with the request:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      button: "Aww yiss!",
    });
    const updatedFormData = {
      ...formData,
      status: parseInt(formData.status),
    };
    setFormData(updatedFormData);
    let lpUrl = vendorData.vendorData.lpUrl;
    lpUrl = lpUrl.replace("{cpid}", advId);
    let insertQuery = vendorData.vendorData.insertQuery;
    insertQuery = insertQuery.replace("{cpid}", advId);
    insertQuery = insertQuery.replace("{callbackurl}", formData.postbackUrl);
    insertQuery = insertQuery.replace("{cut}", formData.cut);
    insertQuery = insertQuery.replace("{counter}", formData.counter);
    insertQuery = insertQuery.replace("{limit}", formData.callbackLimit);
    insertQuery = insertQuery.replace("{vendorname}", formData.vendorName);
    insertQuery = insertQuery.replace("{lpUrl}", lpUrl);
    sendRequest(insertQuery,lpUrl);
  };

  const sendRequest = async (query,lpUrl) => {
    axios
      .post(
        "http://localhost:8080/api/content/updateQuery",
        {
          serverKey: vendorData.vendorData.serverKey,
          query: query,
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
        console.log(response.data);
        if (response.data.statuCode == 200) {
          swal({
            title: "Vendor Added Successfully",
            text: lpUrl,
            icon: "success",
            button: "close",
          });
        } else {
        }
      })
      .catch((error) => {
        navigate("/login");
        console.error("There was a problem with the request:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <CardBody>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Row className="mt-3">
            <Col xs="6" sm="4">
              <Label for="exampleEmail">Vendor Name</Label>
              <Input
                id="exampleEmail"
                name="vendorName"
                placeholder="Enter vendor name"
                type="text"
                onChange={handleChange}
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
                name="postbackUrl"
                placeholder="https://hi5mobi.o18.click/p?m=4921&tid={clickid}"
                type="text"
                onChange={handleChange}
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
                name="payout"
                placeholder="0"
                type="number"
                onChange={handleChange}
              />
            </Col>
            <Col sm="4">
              <Label for="exampleSelect">Callback Limit</Label>
              <Input
                id="examplePassword"
                name="callbackLimit"
                placeholder="0"
                onChange={handleChange}
                type="number"
              />
            </Col>
            <Col xs="6" sm="4">
              <Label for="exampleSelect">Status</Label>
              <Input
                id="exampleSelect"
                onChange={handleChange}
                name="status"
                type="select"
              >
                <option value={1}>Active</option>
                <option value={0}>Inactive</option>
              </Input>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row className="mt-3">
            <Col xs="6" sm="4">
              <Label for="exampleSelect">Supress</Label>
              <Input
                id="exampleSelect"
                onChange={handleChange}
                name="cut"
                type="number"
              />
            </Col>
            <Col xs="6" sm="4">
              <Label for="exampleSelect">Share</Label>
              <Input
                id="exampleSelect"
                onChange={handleChange}
                name="counter"
                type="number"
              />
            </Col>
            <Col xs="6" sm="4">
              <Label for="exampleSelect">AdvId</Label>
              <Input
                onChange={handleChange}
                id="exampleSelect"
                name="advId"
                type="number"
                value={advId}
                disabled
              />
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
        <Button type="submit" className="mt-2" color="success">
          Submit
        </Button>
      </Form>
    </CardBody>
  );
};
