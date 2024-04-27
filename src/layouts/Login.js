import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  const login = async () => {
    axios
      .post("http://localhost:8080/api/auth/signin", formData)
      .then((response) => {
        localStorage.setItem("token","Bearer "+response.data.token);
        navigate("/Dashboard");
      })
      .catch((err) => {
        console.log("Error ", err);
      });
  };

  return (
    <Container>
      <Col
        sm={{
          offset: 3,
          order: 5,
          size: 4,
        }}
      >
        <Card className="p-4 wrapper container-fluid">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Login Page
          </CardTitle>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="EmailId"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </FormGroup>
              <Button type="submit" className="mt-2">
                Login
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Container>
  );
};
export default Login;
