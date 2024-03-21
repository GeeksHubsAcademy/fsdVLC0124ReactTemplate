import { Navigator } from "../Navigator/Navigator";
import "./Header.css";

export const Header = () => {
  const token = false;
  
  const logOut = () => {
    //esta funcion me deslogeará en un breve futuro...

  }

  return (
    <div className="headerDesign">
      <Navigator title={"home"} destination={"/"} />

      {token ? (
        <div>
          <Navigator title={"nickdelusuario"} destination={"/"} />
          <Navigator title={"log out"} onClick={() => logOut()} />
        </div>
      ) : (
        <div className="authMenu">
          <Navigator title={"register"} destination={"/register"} />
          <Navigator title={"login"} destination={"/login"} />
        </div>
      )}
    </div>
  );
};
