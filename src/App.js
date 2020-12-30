import "./bootstrap.min.css";
import "./App.css";

import { Table, Button } from "react-bootstrap";
import Timer from "./components/Timer";

function App() {
  const alphabetsArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

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
            <th>
              <Timer />
            </th>
          </tr>
        </thead>
        <tbody>
          {alphabetsArr.map((alphabet) => {
            return (
              <tr key={alphabet}>
                <td>
                  <Button variant="warning">{alphabet}</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
