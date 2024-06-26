import { useState } from "react";
import "../css/InputBox.css";
import PropTypes from "prop-types";

export default function InputBox({ setIsLoading }) {
  const [text, setText] = useState("");
  const [hint, setHint] = useState(false);

  const addTodo = async () => {
    setIsLoading(true);

    await fetch(
      "https://6662b06962966e20ef0985b2.mockapi.io/todos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: text, status: false }),
      },
      setIsLoading(true)
    );
    setText("");
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="row col-10 inputWarp">
      <input
        className="inputBox rounded-3"
        type="text"
        placeholder="สร้างรายการใหม่"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setHint(false);
        }}
        maxLength={12}
        onKeyDown={(e) => {
          if (e.key === "Enter" && text.length > 0) {
            addTodo();
          } else if (e.key === "Enter" && text.length == 0) {
            setHint(true);
          }
        }}
      />
      <div
        className={`hint text-center text-danger m-0 p-0 ${
          hint ? "" : "invisible"
        }`}
      >
        * กรุณาพิมพ์ข้อความเพื่อเพิ่มรายการ *
      </div>
      <button
        className={`addBtn rounded-3 col-6 ${
          text.length > 0 ? "" : "disabled"
        }`}
        onClick={(e) => {
          e.preventDefault();
          if (text.length > 0) {
            setHint(false);
            addTodo();
          } else {
            setHint(true);
          }
        }}
      >
        สร้างรายการใหม่
      </button>
    </div>
  );
}
InputBox.propTypes = {
  setIsLoading: PropTypes.func.isRequired,
};
