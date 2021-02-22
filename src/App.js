import "./App.css";
import { checkIsUser, getAllPromies, racePrmoises } from "./promise";
import { useEffect, useState } from "react";
import { getData } from "./fetchPromises";

function App() {
  const [isUser, setUser] = useState(false);
  const [userInfo, setUserInfo] = useState("...loading");

  const url = "https://api.pokemontcg.io/v1/cards";

  useEffect(() => {
    getAllPromies.then((messages) => console.log(messages));
    racePrmoises.then((message) => console.log(message));

    getData(url)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    checkIsUser(isUser)
      .then((message) => setUserInfo(message))
      .catch((err) => setUserInfo(err));
  }, [isUser]);

  return (
    <div className="App">
      <button onClick={() => setUser(!isUser)}>
        {isUser ? "log out" : "log in"}
      </button>
      <p>{userInfo}</p>
    </div>
  );
}

export default App;
