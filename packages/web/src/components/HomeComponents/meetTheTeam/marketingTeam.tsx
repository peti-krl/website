import React from 'react';
import { Card, Button, Navbar, Container } from 'react-bootstrap';
import './marketingTeam.css';

const MarketingTeam = () => {
  return (
    <div className="allallall">
      <Navbar className="navTeams" variant="dark">
        <Container>
          <Navbar.Brand href="/" className="textWhite">
            Go Back
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="textWhite">
              Signed in as: <a>Marketing</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="initialHolder">
        <div className="holder">
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Ilian.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Ilian - Head</Card.Title>

              <Button
                className="socialButton"
                href="https://www.linkedin.com/in/ilian-spasse-4370821b9/"
              >
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Sasho.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Aleksandar</Card.Title>
              <Button disabled>Find on LinkedIn</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Iren.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Iren</Card.Title>
              <Button className="socialButton" href="https://www.linkedin.com/in/iren-dimitrova/">
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Daria.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Daria</Card.Title>
              <Button
                className="socialButton"
                href="https://www.linkedin.com/in/daria-naidenova-5360521ab/"
              >
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/tsveti.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Tsvetana</Card.Title>
              <Button
                className="socialButton"
                href="https://www.linkedin.com/in/tsvetana-ilieva-7367a5233"
              >
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Dani.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Daniela</Card.Title>
              <Button
                className="socialButton"
                href="https://www.linkedin.com/in/daniela-georgieva-40aa5b226/"
              >
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Hristo.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Hristo</Card.Title>
              <Button
                className="socialButton"
                href="https://www.linkedin.com/in/hristo-hubenov-aa7402191/"
              >
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/elissa.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Elisa</Card.Title>
              <Button
                className="socialButton"
                href="https://www.linkedin.com/in/elisa-nika-571248224/"
              >
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Boyan.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Boyan</Card.Title>
              <Button disabled>Find on LinkedIn</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/siel (1).png" className="imageTag" />
            <Card.Body>
              <Card.Title>Siel - President</Card.Title>
              <Button className="socialButton" href="https://www.linkedin.com/in/siel-rien/">
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MarketingTeam;
