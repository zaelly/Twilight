// import Carosel from '../../components/carrosel/Carosel';
import './index.css';
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const Home = () => {
  return (
    <div className="container text-center">
      <div className="slideShow">
        <div className="slideShowInner">

        </div>
      {/* <Carosel/> */}
      </div>
      <Container>
        <h2 className='titlePrin'>Populares</h2>
        <Row className='Row'  style={{ display: "block"}}>
          <h3 className='titlePop'>Animes</h3>
          <div className='caards' style={{ marginTop: ".7rem"}}>
            <Card style={{ width: '7rem', height: '9rem', background:"white"}}>
              <Card.Body style={{ background:"none" }}>
              </Card.Body>
            </Card>
            <Card style={{ width: '7rem', height: '9rem', background:"white" }}>
              <Card.Body style={{ background:"none" }}>
              </Card.Body>
            </Card>
            <Card style={{ width: '7rem', height: '9rem', background:"white" }}>
              <Card.Body style={{ background:"none" }}>
              </Card.Body>
            </Card>
            <Card style={{ width: '7rem', height: '9rem', background:"white" }}>
              <Card.Body style={{ background:"none" }}>
              </Card.Body>
            </Card>
            <Card style={{ width: '7rem', height: '9rem', background:"white" }}>
              <Card.Body style={{ background:"none" }}>
              </Card.Body>
            </Card>              
            <Card style={{ width: '7rem', height: '9rem', background:"white" }}>
              <Card.Body style={{ background:"none" }}>
              </Card.Body>
            </Card>
            <Card style={{ width: '7rem', height: '9rem', background:"white" }}>
              <Card.Body style={{ background:"none" }}>
              </Card.Body>
            </Card>
            <Card style={{ width: '7rem', height: '9rem', background:"white" }}>
                <Card.Body style={{ background:"none" }}>
                </Card.Body>
              </Card>   
          </div>
        </Row>  
        <Row className='Row'>
            <h3 className='titlePop'>Filmes</h3>
            <div className='caards' style={{ marginTop: ".7rem"}}>
              <Card style={{ width: '7rem', height: '9rem', background:"white" }}>
                <Card.Body style={{ background:"none" }}>
                </Card.Body>
              </Card>
              <Card style={{ width: '7rem', height: '9rem', background:"white"}}>
                <Card.Body style={{ background:"none" }}>
                </Card.Body>
              </Card>
              <Card style={{ width: '7rem', height: '9rem', background:"white" }}>
                <Card.Body style={{ background:"none" }}>
                </Card.Body>
              </Card>
              <Card style={{ width: '7rem', height: '9rem', background:"white" }}>
                <Card.Body style={{ background:"none" }}>
                </Card.Body>
              </Card>
              <Card style={{ width: '7rem', height: '9rem', background:"white" }}>
                <Card.Body style={{ background:"none" }}>
                </Card.Body>
              </Card>
              <Card style={{ width: '7rem', height: '9rem', background:"white" }}>
                <Card.Body style={{ background:"none" }}>
                </Card.Body>
              </Card>              
              <Card style={{ width: '7rem', height: '9rem', background:"white" }}>
                <Card.Body style={{ background:"none" }}>
                </Card.Body>
              </Card>
              <Card style={{ width: '7rem', height: '9rem', background:"white" }}>
                <Card.Body style={{ background:"none" }}>
                </Card.Body>
              </Card>   
            </div>
        </Row>
      </Container>

      {/* fazer um loop com os cards e fazer com que qnd o mouse arrastar pros lados os cards vao rodando como slide */}
    </div>
  );
};

export default Home;
