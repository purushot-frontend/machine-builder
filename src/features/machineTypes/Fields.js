import { useState, useRef, useEffect } from "react";
import { Plus, TrashFill, PencilSquare } from "react-bootstrap-icons";
import { onlyText } from "./../../helpers/common";
import Button from "react-bootstrap/Button";

const Fields = (props) => {
  const [isAddIconClicked, setIsAddIconClicked] = useState(false);
  const [fieldArray, setFieldArray] = useState(props.fieldArray || []);
  const [isEditIconClicked, setIsEditIconClicked] = useState(false);
  const [editNameValue, setEditNameValue] = useState("");
  const fieldNameRef = useRef();
  const fieldTypeRef = useRef();

  useEffect(() => {
    props.UpdateFieldArray(fieldArray);
  }, [fieldArray]);

  useEffect(() => {
    if (isEditIconClicked) {
      fieldNameRef.current.value = editNameValue;
    }

    setIsEditIconClicked(false);
  }, [isEditIconClicked]);
  const AddField = () => {
    const fieldName = onlyText(fieldNameRef.current.value);
    const fieldType = onlyText(fieldTypeRef.current.value);
    if (fieldName.length === 0 || fieldType.length === 0) {
      alert("Invalid Request! Make Sure All Fields Are In Proper Format");
      return;
    } else {
      const fieldObj = { name: fieldName, type: fieldType };
      const duplicateField = fieldArray.find(
        (element) => element?.name === fieldObj.name
      );
      if (!duplicateField) {
        setFieldArray((prev) => [...prev, fieldObj]);
      } else {
        alert("Invalid Request! Duplicate Field Name");
        return;
      }
      setIsAddIconClicked(false);
    }
  };

  const deleteField = (name) => {
    setFieldArray((prevArray) => {
      return prevArray.filter((element) => element.name !== name);
    });
  };

  const editField = (name) => {
    setFieldArray((prevArray) => {
      return prevArray.filter((element) => element.name !== name);
    });
    setIsAddIconClicked(true);
    setIsEditIconClicked(true);
    setEditNameValue(name);
  };

  return (
    <div className="alert alert-dark" role="alert">
      <h4 className="alert-heading text-center">Fields</h4>
      <hr />

      {fieldArray.length > 0 ? (
        fieldArray.map((element, index) => {
          return (
            <p>
              <button
                type="button"
                className="btn btn-warning btn-sm"
                onClick={() => {
                  editField(element.name);
                }}
              >
                <PencilSquare />
              </button>{" "}
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => {
                  deleteField(element.name);
                }}
              >
                <TrashFill />
              </button>{" "}
              {`${element.name} (${element.type})`}
            </p>
          );
        })
      ) : (
        <p className="text-center">No fields yet.</p>
      )}

      {isAddIconClicked ? (
        <>
          <div className="form-group">
            <label>Field Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Field Name"
              ref={fieldNameRef}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Field Type</label>
            <select className="form-control" ref={fieldTypeRef}>
              <option value="" selected>
                --- Please Select ---
              </option>
              <option>DATE</option>
              <option>TEXT</option>
              <option>CHECKBOX</option>
              <option>NUMBER</option>
            </select>
          </div>
          <br />
          <button type="button" onClick={AddField} className="btn btn-primary">
            Add
          </button>
        </>
      ) : (
        <p className="text-center">
          <Button
            onClick={() => {
              setIsAddIconClicked(true);
            }}
            variant="outline-primary"
            className="my-2 btn-lg"
          >
            <Plus />
          </Button>
        </p>
      )}
    </div>
  );
};

export default Fields;
