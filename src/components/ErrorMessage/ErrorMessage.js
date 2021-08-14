import React from "react";
import Classes from "./ErrorMessage.module.css";

export default function ErrorMessage({ errorText }) {
  const [mgsClasses, setMsgClasses] = React.useState([Classes.ErrorMessage]);
  const [hide, setHide] = React.useState(false);
  React.useEffect(() => {
    setTimeout(function () {
      setMsgClasses(mgsClasses.concat(Classes.Disappear));
    }, 3000);
    setTimeout(function () {
      setHide(true);
    }, 4500);
  }, []);

  return (
    <div className={mgsClasses.join(" ")} style={{ display: `${hide ? "none" : "flex"}` }}>
      <p>{errorText}</p>
    </div>
  );
}
