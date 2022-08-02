import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { Plus } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import {
  addNewMachineType,
  database as thisDatabase,
} from "./../../store/databaseSlice";

const AddMachineType = () => {
  const database = useSelector(thisDatabase);

  const dispatch = useDispatch();

  const AddNewMachineTypeHandler = () => {
    const machineTypeObj = {
      name: "",
      mainField: null,
      fieldsCounter: 1,
      machinesCounter: 1,
      fields: {},
      machines: {},
    };
    dispatch(addNewMachineType(machineTypeObj));
  };

  return (
    <Card className={`mx-2 my-2`}>
      <Card.Body className="text-center">
        <Button
          onClick={() => {
            AddNewMachineTypeHandler();
          }}
          variant="outline-primary"
          size="lg"
          className="my-2"
        >
          <Plus size="lg" />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AddMachineType;
