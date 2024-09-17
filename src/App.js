import "./index.css";

import Pivot from "./Pivot";
import { getData } from "./data";

function App() {
  const { fields, dataset } = getData();
  return <Pivot fields={fields} dataset={dataset} />;
}

export default App;
