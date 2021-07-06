import React from "react";
import { MenuState as Menu } from "./Menu";

const MenuItem:React.FC<Menu> = ({menu}) => {
  return (
    <li>
      {menu.title}
    </li>
  )
}

export default MenuItem;