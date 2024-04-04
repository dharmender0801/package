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
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="EmailId"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                />
              </FormGroup>
              <Button className="mt-2">Login</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Container>
  );
};
export default Login;
