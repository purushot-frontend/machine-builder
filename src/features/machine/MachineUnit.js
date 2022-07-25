import { useId, useRef } from "react";
import Card from "react-bootstrap/Card";
import { updateMachine, deleteMachine } from "./../../store/machineSlice";
import { useDispatch } from "react-redux";

const MachineUnit = (props) => {
  const data = props.data;
  const index = props.index;
  const formId = useId();
  const dispatch = useDispatch();
  const mainField = data.fields.find(
    (element) => element.name == data.mainField
  );

  const deleteMachineHandler = (index) => {
    dispatch(deleteMachine({ key: index }));
  };

  const saveData = () => {
    const form = document.getElementById(formId);
    const currentData = Object.fromEntries(new FormData(form).entries());

    let newData = { ...data };

    let fields = data.fields.map((element, index) => {
      let newElement = {};
      newElement.name = element.name;
      newElement.type = element.type;
      if (currentData[element?.name]) {
        newElement.value = currentData[element.name];
      } else {
        newElement.value = "off";
      }
      return newElement;
    });
    newData.fields = fields;
    dispatch(updateMachine({ key: index, data: newData }));
  };

  const renderInput = (name, type, value) => {
    if (type == "TEXT") {
      return (
        <div className="form-group">
          <label>{name}</label>
          <input
            name={name}
            type="text"
            onChange={() => {
              saveData();
            }}
            className="form-control"
            defaultValue={value}
          />
          <br />
        </div>
      );
    } else if (type == "CHECKBOX") {
      return (
        <div className="form-group">
          <input
            name={name}
            className="form-check-input"
            type="checkbox"
            defaultChecked={value == "on" ? true : false}
            onChange={() => {
              saveData();
            }}
          />
          <label class="form-check-label" for="flexCheckDefault">
            {name}
          </label>
          <br /> <br />
        </div>
      );
    } else if (type == "NUMBER") {
      return (
        <div className="form-group">
          <label>{name}</label>
          <input
            name={name}
            type="number"
            onChange={() => {
              saveData();
            }}
            className="form-control"
            defaultValue={value}
          />
          <br />
        </div>
      );
    } else if (type == "DATE") {
      return (
        <div className="form-group">
          <label>{name}</label>
          <input
            name={name}
            type="date"
            onChange={() => {
              saveData();
            }}
            className="form-control"
            defaultValue={value}
          />
          <br />
        </div>
      );
    } else {
      return <li key={index}>{`${name} - ${type}`}</li>;
    }
  };

  //
  return (
    <Card className={`mx-2 my-2`}>
      <Card.Body>
        <Card.Title className="text-center">{mainField.value}</Card.Title>
        <form id={formId}>
          {data.fields.map((element, index) => {
            return renderInput(element.name, element.type, element.value);
          })}
        </form>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            deleteMachineHandler(index);
          }}
        >
          Delete
        </button>
      </Card.Body>
    </Card>
  );
};

export default MachineUnit;
