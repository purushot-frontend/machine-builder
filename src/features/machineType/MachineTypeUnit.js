import Card from "react-bootstrap/Card";
import { deleteMachineType } from "./../../store/machineTypeSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import EditMachineType from "./EditMachineType";

const MachineTypeUnit = (props) => {
  const data = props.data;
  const index = props.index;
  const [isEditing, setIsEditing] = useState(false);
  console.log(props.data, "yes");
  const dispatch = useDispatch();

  const deleteMachineTypeHandler = (index) => {
    dispatch(deleteMachineType({ key: index }));
  };

  const cancelEditMachineTypeHandler = () => {
    setIsEditing(false);
  };

  console.log(isEditing);

  const defaultView = () => {
    return (
      <Card className={`mx-2 my-2`}>
        <Card.Body>
          <Card.Title className="text-center">{data.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-center">
            {data.mainField}
          </Card.Subtitle>
          <Card.Text>Fields</Card.Text>
          <ul>
            {data.fields.map((element, index) => {
              return <li key={index}>{`${element.name} - ${element.type}`}</li>;
            })}
          </ul>

          <button
            type="button"
            class="btn btn-primary mx-1 float-end"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit
          </button>
          <button
            type="button"
            class="btn btn-danger mx-1 float-end"
            onClick={() => {
              deleteMachineTypeHandler(index);
            }}
          >
            Delete
          </button>
        </Card.Body>
      </Card>
    );
  };

  return !isEditing ? (
    defaultView()
  ) : (
    <EditMachineType
      data={data}
      index={index}
      cancelEditMachineTypeHandler={cancelEditMachineTypeHandler}
    />
  );
};

export default MachineTypeUnit;
