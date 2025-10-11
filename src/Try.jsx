import { useState } from "react";
function Try() {
  const [value, setValue] = useState(0);
  setValue(value + 1);
  return <h1>{value}</h1>;
}

export default Try;
