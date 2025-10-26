import { AlertContainer } from "./alert.styles";
import { IAlert } from "./alert.interface";

export const Alert = ({ message, type }: IAlert) => {
  return <AlertContainer role="alert" $type={type}>{message}</AlertContainer>;
};

