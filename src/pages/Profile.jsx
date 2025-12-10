import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Profile() {
  const { token } = useContext(UserContext);

  return (
    <div>
      <h1>Valor del Token: {String(token)}</h1>
    </div>
  );
}
