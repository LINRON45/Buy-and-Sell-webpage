import React from "react";
import HomeDisplay from "./Home-Display";
import HomeItems from "./Rest-of-Home";

function Home(props) {
  return (
    <div>
      <HomeDisplay Direct={props.Direct} />
      <HomeItems />
    </div>
  );
}

export default Home;
