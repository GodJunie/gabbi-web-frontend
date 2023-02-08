import React, { ReactElement } from "react";
import Spinner from "img/general/spinner.svg";

function Loading(): ReactElement {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={Spinner} height="50px" alt="Loading" />
    </div>
  );
}

export default Loading;
