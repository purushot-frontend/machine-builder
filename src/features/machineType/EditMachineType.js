import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Fields from "./Fields";
import { onlyText } from "./../../helpers/common";
import { updateMachineType } from "./../../store/machineTypeSlice";
import { updateMachineByType } from "../../store/machineSlice";

const EditMachineType = (props) => {
  const data = props.data;

  const [fieldArray, setFieldArray] = useState(data.fields);
  const nameRef = useRef();
  const mainFieldRef = useRef();
  const UpdateFieldArray = (data) => {
    setFieldArray(data);
  };

  const dispatch = useDispatch();

  const EditNewMachineTypeHandler = async (e) => {
    e.preventDefault();
    const name = onlyText(nameRef.current.value);
    const mainField = onlyText(mainFieldRef.current.value);
    if (name.length === 0 || mainField.length === 0) {
      alert("Invalid Request! Make Sure All Fields Are In Proper Format");
      return;
    } else {
      const machineTypeObj = {
        name: name,
        mainField: mainField,
        fields: fieldArray,
      };

      const data2 = { index: props.index, machineTypeObj };
      await dispatch(updateMachineType(data2));
      dispatch(updateMachineByType(data2));
      cancelEditMachineTypeHandler();
    }
  };

  const cancelEditMachineTypeHandler = () => {
    props.cancelEditMachineTypeHandler();
  };

  return (
    <Card className={`mx-2 my-2`}>
      <Card.Body>
        <form onSubmit={EditNewMachineTypeHandler}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              required
              ref={nameRef}
              defaultValue={data.name}
            />
          </div>
          <br />
          <Fields fieldArray={fieldArray} UpdateFieldArray={UpdateFieldArray} />
          <div className="form-group">
            <label>Main Field</label>
            <select
              defaultValue={data.mainField}
              className="form-control"
              required
              ref={mainFieldRef}
            >
              <option value="" selected>
                --- Please Select ---
              </option>
              {fieldArray.map((element, index) => {
                return (
                  <option key={index} value={element.name}>
                    {element.name}
                  </option>
                );
              })}
            </select>
          </div>
          <br />
          <button type="submit" className="btn btn-primary mx-1 float-end">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-danger mx-1 float-end"
            onClick={() => {
              cancelEditMachineTypeHandler();
            }}
          >
            Cancel
          </button>
        </form>
      </Card.Body>
    </Card>
  );
};

export default EditMachineType;
