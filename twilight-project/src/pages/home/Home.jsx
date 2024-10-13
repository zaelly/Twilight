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
        <Row className='Row'>
          <h2 className='titlePrin'>Populares</h2>
            <h3 className='titlePop'>Animes</h3>
            <div className='caards'>
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
              </Card>              <Card style={{ width: '7rem', height: '9rem', background:"white" }}>
                <Card.Body style={{ background:"none" }}>
                </Card.Body>
              </Card>
            </div>
        </Row>  
        <Row className='Row'>
            <h3 className='titlePop'>Filmes</h3>
            <div className='caards'>
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
              </Card>              <Card style={{ width: '7rem', height: '9rem', background:"white" }}>
                <Card.Body style={{ background:"none" }}>
                </Card.Body>
              </Card>
            </div>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
