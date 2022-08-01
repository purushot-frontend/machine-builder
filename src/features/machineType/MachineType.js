import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddMachineType from "./AddMachineType";
import MachineTypeUnit from "./MachineTypeUnit";
import { useSelector } from "react-redux";
import { machineTypeList as typeList } from "./../../store/databaseSlice";

const MachineType = () => {
  const machineTypeList = useSelector(typeList);

  return (
    <Row>
      {Object.entries(machineTypeList).map((element) => (
        <Col md={4}>
          <MachineTypeUnit
            key={element[0]}
            objectID={element[0]}
            data={element[1]}
          />
        </Col>
      ))}
      <Col md={4}>
        <AddMachineType />
      </Col>
    </Row>
  );
};

export default MachineType;
