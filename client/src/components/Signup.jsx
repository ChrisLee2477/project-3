import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Signup() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name:</Form.Label>
        <Form.Control type="User" placeholder="First Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control type="User" placeholder="Last Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
