import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddMachineType from "./AddMachineType";
import MachineTypeUnit from "./MachineTypeUnit";
import { useSelector } from "react-redux";
import { machineTypeList as typeList } from "./../../store/machineTypeSlice";

const MachineType = () => {
  const machineTypeList = useSelector(typeList);
  return (
    <Row>
      {machineTypeList.map((element, index) => (
        <Col md={4}>
          <MachineTypeUnit key={index} index={index} data={element} />
        </Col>
      ))}
      <Col md={4}>
        <AddMachineType />
      </Col>
    </Row>
  );
};

export default MachineType;
