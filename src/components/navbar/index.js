import { Navbar, Form, Nav, Button, FormControl } from "react-bootstrap";

export function ModiNavbar(props) {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#home">Logo</Navbar.Brand>
      <Nav>{props.dropdown}</Nav>
      <Form inline className="mx-auto w-75">
        <div className="mx-auto w-75">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 w-75"
          />
          <Button variant="outline-info">Search</Button>
        </div>
      </Form>
      <Form inline>
        <div className="mr-auto">
          <Button variant="success">Login</Button>
        </div>
      </Form>
    </Navbar>
  );
}
export default ModiNavbar;
