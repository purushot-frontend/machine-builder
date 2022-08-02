import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Plus } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import { addField } from "./../../store/databaseSlice";
const AddField = (props) => {
  const { objectID } = props;
  const [isIconClicked, setIsIconClicked] = useState(false);
  const fieldTypeRef = useRef();
  const dispatch = useDispatch();

  const AddFieldHandler = (e) => {
    e.preventDefault();
    const fieldType = fieldTypeRef.current.value;
    dispatch(addField({ type: fieldType, objectID }));
    setIsIconClicked(true);
  };

  return !isIconClicked ? (
    <Button
      variant="outline-primary"
      size="xs"
      className="my-2"
      onClick={() => {
        setIsIconClicked(true);
      }}
    >
      <Plus height="30" width="20" />
    </Button>
  ) : (
    <form onSubmit={AddFieldHandler}>
      <div className="form-group">
        <label>Field Type</label>
        <select
          className="form-control"
          ref={fieldTypeRef}
          defaultValue=""
          required
        >
          <option value="">--- Please Select ---</option>
          <option>TEXT</option>
          <option>NUMBER</option>
          <option>CHECKBOX</option>
          <option>DATE</option>
        </select>
      </div>
      <br />
      <button type="submit" className="btn btn-primary mx-2">
        Add
      </button>

      <button
        type="button"
        onClick={() => {
          setIsIconClicked(false);
        }}
        className="btn btn-danger mx-2"
      >
        Cancel
      </button>
    </form>
  );
};

export default AddField;
