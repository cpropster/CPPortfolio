import React, { useState } from "react";
import Axios from "axios";

const CreateUsername = ({ history, logout }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const email = window.localStorage.getItem("email");

    const testUser = await Axios.post("/api/users/getuser", {
      username: username,
    });
    if (testUser.data) {
      alert("You need a unique user name, please try again");
      return;
    }
    try {
      await Axios.put("/api/users", {
        username,
        email,
      });
      history.push("/chat");
    } catch (ex) {
      setError(ex.response.data.message);
      console.log(error);
    }
  };

  window.onunload = function () {
    logout();
  };

  return (
    <div className="row h-100">
      <div className="margTop col-sm-12">
        <div className="text-center">
          <h1>CREATE USERNAME</h1>
          <div>{error}</div>
        </div>
        <br />
        <form
          className="form-inline justify-content-center"
          onSubmit={onSubmit}
        >
          <input
            className="input-lg"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
          />
          <button
            className="btn-sm btn-outline-dark"
            disabled={username.length < 1}
          >
            &nbsp;&nbsp;Create Username&nbsp;&nbsp;
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUsername;
