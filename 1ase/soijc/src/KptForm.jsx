import React, { useState } from "react";

const KptForm = () => {
  const [username, setUsername] = useState("");

  function kpt(event) {
    setUsername(event.target.value);
  }
  function a(){
    alert('wswq');
  }

  return (
    <div>
      <h1>dorem example = {username}</h1>
      USER: <input type="text" onChange={kpt} />
      genb : <input type="radio"/>
      <button></button>
    </div>
  );
};

export default KptForm;
  // <UserProvider>
    //   <UserProfile />
    // </UserProvider>
    // <KptForm/>