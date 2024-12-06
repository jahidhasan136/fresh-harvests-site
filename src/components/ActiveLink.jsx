import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => isActive && "border-b-[3px] border-green"}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
