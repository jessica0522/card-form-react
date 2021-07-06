import React from "react";
import { MenuState as Menu } from "./Menu";

const MenuItem:React.FC<Menu> = ({...item}) => {
  return (
    <li>
      {item.title}
    </li>
  )
}

export default MenuItem;