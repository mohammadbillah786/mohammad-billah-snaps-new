import { useNavigate } from "react-router-dom";

export function Photo() {
  let navigate = useNavigate(); 

  function handleClick() {
    navigate("/"); 
  }

  return (
    <button onClick={handleClick}> Click Me! </button>
  );
}
