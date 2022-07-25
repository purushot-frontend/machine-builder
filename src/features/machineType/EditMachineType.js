import Card from "react-bootstrap/Card";
import { useState, useRef } from "react";
import Fields from "./Fields";
import { onlyText } from "./../../helpers/common";
import {
  updateMachineType,
  machineTypeList as typeList,
} from "./../../store/machineTypeSlice";
import { useSelector, useDispatch } from "react-redux";

const EditMachineType = (props) => {
  const data = props.data;
  console.log(data, "tessr");
  const [fieldArray, setFieldArray] = useState(data.fields);
  const nameRef = useRef();
  const mainFieldRef = useRef();
  const UpdateFieldArray = (data) => {
    setFieldArray(data);
  };
  const machineTypeList = useSelector(typeList);

  const dispatch = useDispatch();

  const EditNewMachineTypeHandler = (e) => {
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
      console.log("test", props.index);
      const data2 = { index: props.index, machineTypeObj };
      dispatch(updateMachineType(data2));
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
          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Name"
              required
              ref={nameRef}
              defaultValue={data.name}
            />
          </div>
          <br />
          <Fields fieldArray={fieldArray} UpdateFieldArray={UpdateFieldArray} />
          <div class="form-group">
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
          <button type="submit" class="btn btn-primary mx-1 float-end">
            Submit
          </button>
          <button
            type="button"
            class="btn btn-danger mx-1 float-end"
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
