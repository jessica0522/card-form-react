import React from "react";
import { State as StateUser} from './Register'

const Welcome: React.FC<StateUser> = ({ user }) => {
  return (
    <h3 className="welcome" data-testid="welcomeText">Welcome {`${user.FirstName} ${user.LastName}`}</h3>
  )
}

export default Welcome