import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  let isValid;

  useMemo(() => {
    isValid = isTextNumber(text)
  }, [text])

  return (
    <div className="App">
      <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <span className="icon is-small is-right">
          <i className={isValid ? "fas fa-check" : "fas fa-times"} />
        </span>
      </div>
    </div>
  );


  function isTextNumber(text) {
    const reg = new RegExp("^\\d+$")
    return reg.test(text)
  }
}

export default App;
