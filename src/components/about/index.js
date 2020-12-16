import { Media } from "react-bootstrap";

export function ModiAbout(props) {
    return (
        <Media>
            <Media.Body className="border border-danger text-danger rounded bg-light">
                <h5 className="pt-2">Google Inc.</h5>
                <p>
                    Registered Products: 24 || Company-id: Google
                </p>
            </Media.Body>
        </Media>
    )
}

export default ModiAbout;