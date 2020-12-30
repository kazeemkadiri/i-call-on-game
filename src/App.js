import "./bootstrap.min.css";
import "./App.css";

import { Table } from "react-bootstrap";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App container">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Letters</th>
            <th>Name</th>
            <th>Animal</th>
            <th>Place</th>
            <th>Thing</th>
            <Timer />
          </tr>
        </thead>
      </Table>
    </div>
  );
}

export default App;
