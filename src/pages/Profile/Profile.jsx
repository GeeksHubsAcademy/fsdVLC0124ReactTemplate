import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./Profile.css";
import { GetProfile } from "../../services/apiCalls";
import { CInput } from "../../common/CInput/CInput";

const datosUser = JSON.parse(localStorage.getItem("passport"));

export const Profile = () => {
  const navigate = useNavigate();
  const [tokenStorage, setTokenStorage] = useState(datosUser?.token);
  const [loadedData, setLoadedData] = useState(false);
  const [user, setUser] = useState({
    name: "",
    surname: "",
    birth: "",
    email: "",
  });

  const [userError, setUserError] = useState({
    nameError: "",
    surnameError: "",
    birthError: "",
    emailError: "",
  });

  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const checkError = (e) => {
    //a gusto del consumidor....
  };

  useEffect(() => {
    if (!tokenStorage) {
      navigate("/");
    }
  }, [tokenStorage]);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const fetched = await GetProfile(tokenStorage);

        setLoadedData(true);

        setUser({
          name: fetched.data.name,
          surname: fetched.data.surname,
          birth: fetched.data.birth,
          email: fetched.data.email,
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (!loadedData) {
      getUserProfile();
    }
  }, [user]);

  return (
    <div className="profileDesign">
      {!loadedData ? (
        <div>CARGANDO</div>
      ) : (
        <div>
          <CInput
            className={`inputDesign ${
              userError.nameError !== "" ? "inputDesignError" : ""
            }`}
            type={"text"}
            placeholder={""}
            name={"name"}
            value={user.name || ""}
            onChangeFunction={(e) => inputHandler(e)}
            onBlurFunction={(e) => checkError(e)}
          />
          <CInput
            className={`inputDesign ${
                userError.surnameError !== "" ? "inputDesignError" : ""
            }`}
            type={"text"}
            placeholder={""}
            name={"surname"}
            value={user.surname || ""}
            onChangeFunction={(e) => inputHandler(e)}
            onBlurFunction={(e) => checkError(e)}
          />
          <CInput
            className={`inputDesign ${
                userError.birthError !== "" ? "inputDesignError" : ""
            }`}
            type={"text"}
            placeholder={""}
            name={"birth"}
            value={user.birth || ""}
            onChangeFunction={(e) => inputHandler(e)}
            onBlurFunction={(e) => checkError(e)}
          />
          <CInput
            className={`inputDesign ${
                userError.emailError !== "" ? "inputDesignError" : ""
            }`}
            type={"email"}
            placeholder={""}
            name={"email"}
            value={user.email || ""}
            onChangeFunction={(e) => inputHandler(e)}
            onBlurFunction={(e) => checkError(e)}
          />
        </div>
      )}
    </div>
  );
};
