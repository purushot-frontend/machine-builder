import Card from "react-bootstrap/Card";
import { deleteMachineType } from "./../../store/databaseSlice";
import { deleteMachineByType } from "./../../store/machineSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import EditMachineType from "./EditMachineType";

const MachineTypeUnit = (props) => {
  const data = props.data;
  const index = props.index;
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();

  const deleteMachineTypeHandler = async (index, name) => {
    await dispatch(deleteMachineType({ key: index }));
    dispatch(deleteMachineByType({ name }));
  };

  const cancelEditMachineTypeHandler = () => {
    setIsEditing(false);
  };

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
            className="btn btn-primary mx-1 float-end"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger mx-1 float-end"
            onClick={() => {
              deleteMachineTypeHandler(index, data.name);
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
