import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MachinesByType = (props) => {
  const data = props.data;

  return (
    <>
      <Row>
        <hr />
        <Col>
          <h1>{data.name}</h1>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <p>Coming Soon!</p>
        </Col>
        <hr />
      </Row>
    </>
  );
};

export default MachinesByType;
