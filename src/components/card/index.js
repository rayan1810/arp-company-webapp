import { Card, ListGroup } from "react-bootstrap";

export function ModiCard(props) {
    return (
        <Card style={{ width: '18rem' , minHeight:'0.7vh'}} className="w-100 text-light">
            <ListGroup variant="flush" className="bg-dark">
                <ListGroup.Item className="bg-dark">Cras justo odio</ListGroup.Item>
                <ListGroup.Item className="bg-dark">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item className="bg-dark">Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}
export default ModiCard;