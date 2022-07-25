import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";
import { machineList as list } from "./../../store/machineSlice";
import MachineUnit from "./MachineUnit";
import { addNewMachine } from "./../../store/machineSlice";

const MachinesByType = (props) => {
  const machineList = useSelector(list);
  const data = props.data;
  const dispatch = useDispatch();

  const AddNewMachineHandler = () => {
    const machineType = data.name;
    const fields = data.fields.map((element) => {
      return { ...element, value: "" };
    });
    const machineObj = {
      machineType: data.name,
      titleField: "",
      fields: fields,
    };
    dispatch(addNewMachine(machineObj));
  };

  return (
    <>
      <Row>
        <h1>{data.name}</h1>
        <hr />

        {machineList
          .filter((element) => element.machineType == data.name)
          .map((element, index) => (
            <Col md={4}>
              <MachineUnit key={index} index={index} data={element} />
            </Col>
          ))}
        <Col md={4} className="py-5 text-center">
          <button
            className="btn btn-sm btn-primary"
            onClick={() => {
              AddNewMachineHandler();
            }}
          >
            Add Item
          </button>
        </Col>
      </Row>{" "}
      <Row>
        <Col>
          <br /> <br />
        </Col>
      </Row>
    </>
  );
};

export default MachinesByType;
