import Card from "react-bootstrap/Card";
import MachineTypeName from "./MachineTypeName";
const MachineTypeUnit = (props) => {
  const { objectID, data } = props;
  const { name } = data;
  return (
    <Card className={`mx-2 my-2`}>
      <Card.Body>
        <MachineTypeName objectID={objectID} name={name} />
      </Card.Body>
    </Card>
  );
};

export default MachineTypeUnit;
