import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("The Text Was Succesfully Upercased ! ");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Has Been Capitalized", "success");
  };
  const handleLowClick = () => {
    // console.log("The Text Was Succesfully Lowercased ! ");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Has Been Lower Cased", "success");
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Text Has Been Cleared", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value); // without this I cant change the vallue in the TextArea!
  };

  // To Copy The Given Msg Directly !
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Has Been Copied To Clipboard", "success");
  };

  // To Delete Extra Spaces !
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/); // The Space between [ ] is so much required
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Were Removed", "success");
  };

  const [text, setText] = useState(""); // this stores the deafult value

  // correct way to change the value of text !
  //   setText("New Text");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 style={{ marginTop: "5px", marginBottom: "10px" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="Form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#13346e",
              color: props.mode === "dark" ? "white" : "#042743",
              width: "95%",
              padding: "15px",
              borderRadius: "12px",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert To Upper Case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowClick}
        >
          Convert To Lower Case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClear}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Space
        </button>
      </div>

      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters{" "}
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Needed To Read This !{" "}
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing To Preview !"}</p>
      </div>
    </>
  );
}
