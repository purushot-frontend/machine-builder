import Card from "react-bootstrap/Card";
import { useState, useRef } from "react";
import { Plus, ArrowDown, TrashFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Fields from "./Fields";
import { sanitizeString, onlyNumber, onlyText } from "./../../helpers/common";
import {
  addNewMachineType,
  machineTypeList as typeList,
} from "./../../store/machineTypeSlice";
import { useSelector, useDispatch } from "react-redux";

const AddMachineType = () => {
  const [isAddIconClicked, setIsAddIconClicked] = useState(false);
  const [fieldArray, setFieldArray] = useState([]);
  const nameRef = useRef();
  const mainFieldRef = useRef();
  const UpdateFieldArray = (data) => {
    setFieldArray(data);
  };
  const machineTypeList = useSelector(typeList);
  console.log("redux", machineTypeList);

  const dispatch = useDispatch();

  const AddNewMachineTypeHandler = (e) => {
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
      dispatch(addNewMachineType(machineTypeObj));
      setIsAddIconClicked(false);
    }
  };

  return (
    <Card className={`mx-2 my-2`}>
      {isAddIconClicked ? (
        <Card.Body>
          <form onSubmit={AddNewMachineTypeHandler}>
            <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Name"
                required
                ref={nameRef}
              />
            </div>
            <br />
            <Fields UpdateFieldArray={UpdateFieldArray} />
            <div class="form-group">
              <label>Main Field</label>
              <select className="form-control" required ref={mainFieldRef}>
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
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </Card.Body>
      ) : (
        <Card.Body className="text-center">
          <Button
            onClick={() => {
              setIsAddIconClicked((prev) => !prev);
            }}
            variant="outline-primary"
            size="lg"
            className="my-2"
          >
            <Plus size="lg" />
          </Button>
        </Card.Body>
      )}
    </Card>
  );
};

export default AddMachineType;
