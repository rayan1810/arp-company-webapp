import { Jumbotron, Button} from "react-bootstrap";

export function ModiProductDetails(props) {
    return (
        <Jumbotron className="w-100 h-100 m-0 py-3" style={{overflow:"scroll",height:"50vh"}}>
            <h1>Product Name</h1>
            <img className="w-50 h-75" src="https://www.kaspersky.com/content/en-global/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png"/>
            <div>
            <h5 className="d-inline mr-3">Product Cost</h5>
            <h5 className="d-inline">Product Id</h5>
            </div>
            
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            
            <Button className="btn btn-info text-light font-weight-bold">Download</Button>
            

        </Jumbotron>
    )
}
export default ModiProductDetails;