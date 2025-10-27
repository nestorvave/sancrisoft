import { NavBar, Name } from "./navbar.styles";
import { MiniAlert } from "./mini-alert.component";

export const Navbar = ({ name }: { name: string }) => {
  return (
    <NavBar>
      <Name>{name}</Name>
      <MiniAlert />
    </NavBar>
  );
};
