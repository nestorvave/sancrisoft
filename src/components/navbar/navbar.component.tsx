import { NavBar, Name } from "./navbar.styles";
import { MiniAlert } from "./mini-alert.component";

export const Navbar = () => {
  return (
    <NavBar>
      <Name>New Company</Name>
      <MiniAlert />
    </NavBar>
  );
};
