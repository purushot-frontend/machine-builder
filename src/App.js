import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import { machineTypeList as typeList } from "./store/machineTypeSlice";
import MachinesByType from "./features/machine/MachinesByType";
import MainNavigationBar from "./components/UI/MainNavigationBar";
import MachineCard from "./components/UI/Card";
import MachineType from "./features/machineType/MachineType";
import AllMachines from "./features/machine/AllMachines";

function App() {
  const machineTypeList = useSelector(typeList);

  return (
    <Router>
      <MainNavigationBar />
      <Container>
        <Row className={`my-5`}>
          <Routes>
            <Route path="/" exact element={<AllMachines />}></Route>
            <Route path="/machine-type" element={<MachineType />}></Route>
            {machineTypeList.map((element, index) => (
              <Route
                path={`/${element.name.replace(/\s/g, "-")}`}
                element={<MachinesByType data={element} />}
              ></Route>
            ))}
          </Routes>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
