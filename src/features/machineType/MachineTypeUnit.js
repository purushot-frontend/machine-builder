import { Card } from "react-bootstrap";
import MachineTypeName from "./MachineTypeName";
import AddField from "./AddField";

const MachineTypeUnit = (props) => {
  const { objectID, data } = props;
  const { name } = data;
  return (
    <Card className={`mx-2 my-2`}>
      <Card.Body>
        <MachineTypeName objectID={objectID} name={name} />
      </Card.Body>
      <Card.Body className="text-center">
        <label>Fields</label>
        <hr />
        <p>No fields yet.</p> <hr />
        <AddField objectID={objectID} />
      </Card.Body>
    </Card>
  );
};

export default MachineTypeUnit;
