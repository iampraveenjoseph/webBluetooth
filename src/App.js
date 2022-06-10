import "./App.css";
import Bluetooth from "./Bluetooth";
import { useEffect, useState } from "react";

function App() {
  const [device, setDevice] = useState();
  const [characteristic, setCharacteristic] = useState();
  const [server, setServer] = useState();
  const [service, setService] = useState();
  useEffect(() => {
    console.log(device, characteristic, server, service);
  }, [device, characteristic, server, service]);
  return (
    <div className="App">
      <Bluetooth
        setDevice={setDevice}
        setCharacteristic={setCharacteristic}
        setServer={setServer}
        setService={setService}
      />
    </div>
  );
}

export default App;
