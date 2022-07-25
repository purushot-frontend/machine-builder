import MainNavigationBar from "./components/UI/MainNavigationBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import MachineCard from "./components/UI/Card";
import Text from "./components/Text";
import store from "./store/store";
import { Provider } from "react-redux";
import MachineType from "./features/machineType/MachineType";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainNavigationBar />
        <Container>
          <Row className={`my-5`}>
            <Routes>
              <Route
                path="/"
                exact
                element={
                  <>
                    <Col md={4}>
                      <MachineCard />
                    </Col>
                    <Col md={4}>
                      <MachineCard />
                    </Col>
                    <Col md={4}>
                      <MachineCard />
                    </Col>
                    <Col md={4}>
                      <MachineCard />
                    </Col>
                    <Col md={4}>
                      <MachineCard />
                    </Col>
                  </>
                }
              />

              <Route path="/types" element={<Text />}></Route>
              <Route path="/machine-type" element={<MachineType />}></Route>
            </Routes>
          </Row>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
