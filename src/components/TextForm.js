import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  };

  const clearText = () => {
    console.log("Clear Text was clicked ");
    setText("");
    props.showAlert("Text Cleared","success");
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked");
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!","success");
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log("I am a copy");
    var text = document.getElementById("myBox");
    text.select();

    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/); // use `\s+` to split on one or more whitespace characters
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces","success");
  };

  const [text, setText] = useState("");
  //   text = 'new text'; //incorrect way to change the state
  // setText("new text"); //correct way to change the state

  const [fWord, findWord] = useState("");
  const [rWord, replaceWord] = useState("");

  const handleFindChange = (event) => {
    findWord(event.target.value);
    console.log("fWord=" + fWord);
  };
  const handleReplaceChange = (event) => {
    replaceWord(event.target.value);
    console.log("rWord=" + rWord);
  };
  const handleReplaceClick = () => {
    setText(text.replaceAll(fWord, rWord));
    // replaceAll is a builtin javascript function
  };

  // const speak = ()=>{
  //   let msg=new SpeechSynthesisUtterance();
  //   msg.text=text;
  //   window.speechSynthesis.speak(msg);
  // }

  return (
    <>
      <div
        className={`text-${props.mode === "light" ? "dark" : "light"}`}
        mode={props.mode}
      >
        <div className="container my-2 ">
          <h1>{props.heading} </h1>

          <textarea
            
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",color:props.mode==="dark"?"white":"#000000a3"
            }}

            className="form-control"
            id="myBox"
            onChange={handleOnChange}
            placeholder="Enter text here"
            value={text}
            rows="8"
          />

          <button
            className="btn btn-primary my-4 mx-2 "
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>

          <button className=" btn  btn-dark mx-2" onClick={handleLoClick}>
            Convert to LowerCase
          </button>

          <button className="btn btn-primary mx-2" onClick={clearText}>
            Clear Text
          </button>

          <button className="btn btn-primary mx-2 my-3" onClick={handleCopy}>
            Copy Text
          </button>

          <button
            className="btn btn-primary mx-3 my-3"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          {/* <button className="btn btn-primary my-4 mx-3" onClick={speak}> Speak</button> */}
        </div>

        <div className="container my-3">


        <h3>Preview</h3>
          <p>{text.length>0?text:"Enter something to preview it here"}</p>

          <h2>Your text summary</h2>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p>{text.split(" ").length * 0.008} Mintues read</p>

        </div>       

        <h1 className="my-2">Find Words</h1>

        <textarea
          className="form-control my-2"
          value={fWord}
          onChange={handleFindChange}
          rows="2"
        ></textarea>

        <h1 className="my-2">Replace Words</h1>

        <textarea
          rows="2"
          value={rWord}
          onChange={handleReplaceChange}
          className="form-control my-2"
        ></textarea>

        <button className="btn btn-primary my-4" onClick={handleReplaceClick}>
          Replace
        </button>

        
      </div>
    </>
  );
}
