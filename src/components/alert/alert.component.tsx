import { AlertContainer } from "./alert.styles";
import { IAlert } from "./alert.interface";

export const Alert = ({ message, type }: IAlert) => {
  return <AlertContainer $type={type}>{message}</AlertContainer>;
};

