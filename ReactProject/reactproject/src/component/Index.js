import React from 'react';
import {Nav,Card ,Button,Container,Row,Col, Navbar} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import pic1 from '../component/image/111.jpg';
import pic2 from '../component/image/222.jpg';
import pic3 from '../component/image/333.jpg';
import pic4 from '../component/image/444.jpg';
import pic5 from '../component/image/555.jpg';
import pic6 from '../component/image/888.jpg';
import { Link } from 'react-router-dom';
import Login from './Login';


export default class Index extends React.Component {
    render() {
        return(
            <div>
 <Navbar bg="light" variant="light">
{/* 
    <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}

      <Link to="/login" style={{paddingLeft:"10px"}}>
    Login
    </Link>
    <Link to="/Register" style={{marginLeft:"10px"}}>Register</Link>

    </Navbar>


  

<Container>
            <Row>
              <Col>
              <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pic1}  />
  <Card.Body>
    <Card.Title>Burger</Card.Title>
    <Card.Text>
 
Good Recepies
    </Card.Text>
    <Link
                    style={{display: "block",margin: "1rem 0"}}
                    to={`/recipes/Burger`}
                    >
    <Button variant="primary">Go </Button>
                    </Link>
  </Card.Body>
</Card>
              </Col>
              <Col>
              <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pic2} />
  <Card.Body>
    <Card.Title>Waffle</Card.Title>
    <Card.Text>
      Good Recepies
    </Card.Text>
    <Link
                    style={{display: "block",margin: "1rem 0"}}
                    to={`/recipes/Waffle`}
                    >
    <Button variant="primary">Go</Button>
                    </Link>
  </Card.Body>
</Card>
              </Col>
              <Col>
              <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pic3} />
  <Card.Body>
    <Card.Title>Biryani</Card.Title>
    <Card.Text>
    Good Recepies
    </Card.Text>
    <Link
                    style={{display: "block",margin: "1rem 0"}}
                    to={`/recipes/Biryani`}
                    >
    <Button variant="primary">Go </Button>
                    </Link>
  </Card.Body>
</Card>
              </Col>
            </Row>


            {/* ///////////////////////////////////////////////// secound row*/}

            <Row style={{paddingTop:"10px"}}>
              <Col>
              <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pic4} />
  <Card.Body>
    <Card.Title>Spring Rolls</Card.Title>
    <Card.Text>
    Good Recepies
    </Card.Text>
    <Link
                    style={{display: "block",margin: "1rem 0"}}
                    to={`/recipes/Spring`}
                    >
    <Button variant="primary">Go </Button>
                    </Link>
  </Card.Body>
</Card>
              </Col>
              <Col>
              <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pic5} />
  <Card.Body>
    <Card.Title>Sambosa</Card.Title>
    <Card.Text>
    Good Recepies
    </Card.Text>
    <Link
                    style={{display: "block",margin: "1rem 0"}}
                    to={`/recipes/Sambosa`}
                    >
    <Button variant="primary">Go </Button>
                    </Link>
  </Card.Body>
</Card>
              </Col>
              <Col>
              <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pic6} />
  <Card.Body>
    <Card.Title>Mento</Card.Title>
    <Card.Text>
    Good Recepies
    </Card.Text>
    <Link
                    style={{display: "block",margin: "1rem 0"}}
                    to={`/recipes/Mento`}
                    >
    <Button variant="primary">Go </Button>
                    </Link>
  </Card.Body>
</Card>
              </Col>
            </Row>
            
          </Container>
</div>
    //     return (
    //         // <div>
    //         //     <h1 style={{textAlign:'center'}} >Food Recepies</h1>                
    //         // </div>
)   //     )
    // }
}

}