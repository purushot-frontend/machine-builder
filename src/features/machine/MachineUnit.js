import Card from "react-bootstrap/Card";
import { deleteMachine } from "./../../store/machineSlice";
import { useDispatch } from "react-redux";
import { useRef } from "react";

const MachineUnit = (props) => {
  const data = props.data;
  const index = props.index;
  console.log(data.titleField);
  const dispatch = useDispatch();
  const mainFieldRef = useRef();

  const deleteMachineHandler = (index) => {
    dispatch(deleteMachine({ key: index }));
  };

  return (
    <Card className={`mx-2 my-2`}>
      <Card.Body>
        <Card.Title>{data.machineType}</Card.Title>
        <br />
        <Card.Text>
          <div className="form-group">
            <label>Main Field</label>
            <select
              className="form-control"
              ref={mainFieldRef}
              defaultValue={data.titleField}
            >
              <option value="">--- Please Select ---</option>
              {data.fields.map((element) => {
                return <option value={element.name}>{element.name}</option>;
              })}
            </select>
          </div>
        </Card.Text>
        <Card.Text>Fields</Card.Text>
        <ul>
          {data.fields.map((element, index) => {
            return <li key={index}>{`${element.name} - ${element.type}`}</li>;
          })}
        </ul>
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
