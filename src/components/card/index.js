import { Card, ListGroup } from "react-bootstrap";

export function ModiCard(props) {
    return (
        <Card style={{ width: '18rem' }} className="w-100 text-dark">
            <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}
export default ModiCard;