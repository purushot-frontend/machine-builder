import { useRef } from "react";
import { Card } from "react-bootstrap";
import { Link, Trash } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import MachineTypeName from "./MachineTypeName";
import AddField from "./AddField";
import Field from "./Field";
import { deleteMachineType, updateMainField } from "../../store/databaseSlice";

const MachineTypeUnit = (props) => {
  const { objectID, data } = props;
  const { name, fields, mainField } = data;
  const dispatch = useDispatch();
  const mainFieldRef = useRef();
  const fieldsSize = Object.keys(fields).length;
  const deleteMachineTypeHandler = () => {
    dispatch(deleteMachineType({ objectID }));
  };

  const updateMainFieldHandler = () => {
    const newMainField = mainFieldRef.current.value;
    console.log(newMainField);
    dispatch(
      updateMainField({ mainField: newMainField, machineTypeID: objectID })
    );
  };

  return (
    <Card className={`mx-2 my-2`}>
      <Card.Title>
        <span
          className="text-danger float-end mx-2 my-2"
          onClick={() => {
            deleteMachineTypeHandler();
          }}
          style={{ cursor: "pointer" }}
        >
          <Trash />
        </span>
      </Card.Title>
      <Card.Body>
        <MachineTypeName objectID={objectID} name={name} />
      </Card.Body>
      <Card.Body className="text-center">
        <label>Fields</label>
        <hr />
        {fieldsSize > 0 ? (
          Object.entries(fields).map((element) => {
            return (
              <Field
                key={element[0]}
                data={element[1]}
                objectID={element[0]}
                machineTypeID={objectID}
              />
            );
          })
        ) : (
          <p>No fields yet.</p>
        )}
        <hr />
        <label>Main Field</label>
        <select
          className="form-control"
          ref={mainFieldRef}
          value={`${mainField}`}
          onChange={() => {
            updateMainFieldHandler();
          }}
        >
          <option value="">--select --</option>
          {Object.entries(fields).map((element) => {
            return <option value={element[0]}>{element[1].name}</option>;
          })}
        </select>
        <AddField objectID={objectID} />
      </Card.Body>
    </Card>
  );
};

export default MachineTypeUnit;
