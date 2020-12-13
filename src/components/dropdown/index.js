import { Dropdown } from "react-bootstrap";

export function ModiDropdown(props) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" style={{ backgroundColor: "transparent", border: "none" }} id="dropdown-basic">
                Products
        </Dropdown.Toggle>
            <Dropdown.Menu className="py-0 my-0 border-0">
                {props.dropdownItems.map((value,ind) => {
                    return (
                        <Dropdown.Item className="bg-secondary text-light" key={ind} href="#/action-1">{value}</Dropdown.Item>
                    );
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
}
export default ModiDropdown;