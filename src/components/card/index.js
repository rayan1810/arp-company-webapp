import { Card, ListGroup } from "react-bootstrap";
import './index.css';

export function ModiCard(props) {
    let products = [];
    products = [<ListGroup.Item className="bg-light item"><span className="float-left font-weight-bold">product name</span> <span className="float-right font-italic inneritem">product id:123</span></ListGroup.Item>,
    <ListGroup.Item className="bg-light item"><span className="float-left font-weight-bold">product name</span> <span className="float-right font-italic inneritem">product id:123</span></ListGroup.Item>,
    <ListGroup.Item className="bg-light item"><span className="float-left font-weight-bold">product name</span> <span className="float-right font-italic inneritem">product id:123</span></ListGroup.Item>,
    <ListGroup.Item className="bg-light item"><span className="float-left font-weight-bold">product name</span> <span className="float-right font-italic inneritem">product id:123</span></ListGroup.Item>,
    <ListGroup.Item className="bg-light item"><span className="float-left font-weight-bold">product name</span> <span className="float-right font-italic inneritem">product id:123</span></ListGroup.Item>,
    <ListGroup.Item className="bg-light item"><span className="float-left font-weight-bold">product name</span> <span className="float-right font-italic inneritem">product id:123</span></ListGroup.Item>,
    <ListGroup.Item className="bg-light item"><span className="float-left font-weight-bold">product name</span> <span className="float-right font-italic inneritem">product id:123</span></ListGroup.Item>,
    <ListGroup.Item className="bg-light item"><span className="float-left font-weight-bold">product name</span> <span className="float-right font-italic inneritem">product id:123</span></ListGroup.Item>,
    <ListGroup.Item className="bg-light item"><span className="float-left font-weight-bold">product name</span> <span className="float-right font-italic inneritem">product id:123</span></ListGroup.Item>,
    <ListGroup.Item className="bg-light item"><span className="float-left font-weight-bold">product name</span> <span className="float-right font-italic inneritem">product id:123</span></ListGroup.Item>,
    <ListGroup.Item className="bg-light item"><span className="float-left font-weight-bold">product name</span> <span className="float-right font-italic inneritem">product id:123</span></ListGroup.Item>,
    <ListGroup.Item className="bg-light item"><span className="float-left font-weight-bold">product name</span> <span className="float-right font-italic inneritem">product id:123</span></ListGroup.Item>]
    return (
        <Card style={{ width: '18rem', minHeight: '0.7vh' }} className="w-100 text-dark mx-2">
            <ListGroup variant="flush" className="bg-light" style={{overflow:"scroll" ,height:"70vh"}}>
                {products}
            </ListGroup>
        </Card>
    )
}
export default ModiCard;