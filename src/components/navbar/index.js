import { Navbar, Form, Nav, Button, FormControl } from "react-bootstrap";

export function ModiNavbar(props) {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
      <Nav>
        {props.dropdown}
      </Nav>
      <Nav class = "mx-auto">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-12" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Nav>

    </Navbar>
  );
}
export default ModiNavbar;
