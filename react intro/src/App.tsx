// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/button";

function App() {
  //   let items = [
  //     'New York',
  //     'San Francisco',
  //     'Tokyo',
  //     'London',
  //     'Paris'
  //   ];

  //   const handleSelectItem = (item: string) => {
  //     console.log(item);
  //   }
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* <ListGroup  items={items} heading='cities' onSelectItem={handleSelectItem}/> */}
      {/* <Alert text="Hello Y'all" /> */}
      <Alert onClose={() => setAlertVisibility(false)}>
        Hello <span>Y'all</span>
      </Alert>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
