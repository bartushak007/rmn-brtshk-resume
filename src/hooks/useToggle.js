import { useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const turnToggle = () => setToggle(!toggle);

  return {
    toggle,
    turnToggle
  };
};

export default useToggle;
