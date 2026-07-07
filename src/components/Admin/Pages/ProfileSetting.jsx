import { Container, FormGroup, Stack, Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

function ProfileSetting() {
  return (
    <Stack direction="vertical" gap={0} className="m-2 m-md-3  m-lg-5">
      <Row className="align-items-start mt-2 ">
        <Col xs={12} md={6} className="mb-3 mb-lg-0 text-center text-lg-start">
          <div className="p-3">
            <img src="../../src/assets/profile.svg" alt="Profile" />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div>
            <h1
              className="text-uppercase"
              style={{
                fontFamily: "'Almarai', sans-serif",
                fontWeight: 800,
                fontSize: "40px",
                lineHeight: "100%",
              }}
            >
              MY ACCOUNT
            </h1>
          </div>
          <div className="mt-3">
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="mobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="tel" placeholder="Enter mobile" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>

      <div>
        <hr style={{ border: "1px solid #D5D5D5" }}></hr>
      </div>
      <div className="pb-5 m-md-3">
        <h1
          style={{
            fontFamily: "'Almarai', sans-serif",
            fontWeight: 400,
            fontSize: "32px",
            lineHeight: "100%",
          }}
        >
          Select Configuration
        </h1>
      </div>
      <Stack direction="horizontal" gap={1}>
        <Container fluid>
          <Row>
            <Col xs="auto">
              <img src="../../src/assets/tick.png" alt="Configuration" />
            </Col>
            <Col>
              <Card className="border-1" style={{ backgroundColor: "#FAFAFA" }}>
                <Card.Body className="pl-6">
                  <h3 className="text-left">Manual Configuration</h3>
                  <hr />
                  <div>
                    <h4 className="text-left">Services Access</h4>
                    <p className="text-left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin sed massa leo. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Praesent eu varius felis.
                      Integer posuere urna ut mi porta, vel fringilla dolor
                      convallis. Sed laoreet sodales sapien vel vestibulum.
                      Nulla dictum eros ut efficitur porttitor. Mauris
                      dignissim, lectus sit amet euismod pretium, ex purus
                      condimentum erat, eu feugiat nisi ipsum ac eros.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Stack>
      <Stack direction="horizontal" gap={3}>
        <Container fluid>
          <Row>
            <Col xs="auto">
              <img src="../../src/assets/tick.png" alt="Configuration" />
            </Col>
            <Col>
              <Card className="border-1">
                <Card.Body className="pl-6">
                  <h3 className="text-left">Semi auto configuration</h3>
                  <p className="text-left d-none d-md-block text-start">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Stack>
      <Stack direction="horizontal" >
        <Container fluid>
          <Row>
            <Col xs="auto">
              <img src="../../src/assets/tick.png" alt="Configuration" />
            </Col>
            <Col >
              <Card className="border-1">
                <Card.Body className="pl-6">
                  <h3 className="text-left">Automatic Configuration</h3>
                  <p className="text-left d-none d-md-block text-start">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={1} lg={2}></Col>
            <Col
              xs={12}
              md={6}
              lg={3}
              className="mb-3 mb-lg-0 text-center text-lg-start"
            >
              <div className="mt-3">
                <Button
                  className="w-100 d-flex align-items-center justify-content-center gap-2"
                  style={{ backgroundColor: "#FC732F", borderColor: "#FC732F" }}
                >
                  <img src="../../src/assets/arrow.png" alt="Configuration" />
                  Update configuration
                </Button>
              </div>
            </Col>
            <Col
              xs={12}
              md={4}
              lg={2}
              className="mb-3 mb-lg-0 text-center text-lg-start"
            >
              <div className="mt-3">
                <Button
                  className="w-100 d-flex align-items-center justify-content-center gap-2"
                  style={{
                    backgroundColor: "white",
                    borderColor: "#FC732F",
                    color: "#FC732F",
                  }}
                >
                  <img src="../../src/assets/no.png" alt="Configuration" />
                  Cancel
                </Button>
              </div>
            </Col>
            <Col md={4} lg={5}></Col>
          </Row>
        </Container>
      </Stack>

      <Stack direction="horizontal" gap={3}>
        <Container fluid></Container>
      </Stack>
    </Stack>
  );
}
export default ProfileSetting;
