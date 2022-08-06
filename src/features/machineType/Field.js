import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  updateField as updateFieldRedux,
  deleteFieldType,
} from "../../store/databaseSlice";
import { Trash } from "react-bootstrap-icons";

const Field = (props) => {
  const { data, objectID, machineTypeID } = props;
  const selectTypeRef = useRef();
  const nameRef = useRef();
  const dispatch = useDispatch();

  const updateField = () => {
    const name = nameRef.current.value;
    const fieldType = selectTypeRef.current.value;
    dispatch(
      updateFieldRedux({ name, fieldType, fieldId: objectID, machineTypeID })
    );
  };

  const deleteFieldHandler = () => {
    dispatch(deleteFieldType({ fieldId: objectID, machineTypeID }));
  };

  return (
    <p>
      {
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            aria-label="Text input with dropdown button"
            ref={nameRef}
            defaultValue={`${data.name}`}
            onChange={() => {
              updateField();
            }}
          />
          <select
            ref={selectTypeRef}
            defaultValue={`${data.type}`}
            onChange={() => {
              updateField();
            }}
          >
            <option value="TEXT">TEXT</option>
            <option value="NUMBER">NUMBER</option>
            <option value="CHECKBOX">CHECKBOX</option>
            <option value="DATE">DATE</option>
          </select>
          <span
            className="text-danger float-end mx-2 my-2"
            onClick={() => {
              deleteFieldHandler();
            }}
            style={{ cursor: "pointer" }}
          >
            <Trash />
          </span>
        </div>
      }
    </p>
  );
};

export default Field;
