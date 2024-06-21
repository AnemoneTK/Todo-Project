import { useState } from "react";
import "../css/InputBox.css";

export default function InputBox() {
  const [text, setText] = useState("");
  const [hint, setHint] = useState(false);
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
      />
      <div
        className={`hint text-center text-danger mb-1 ${
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
          } else {
            setHint(true);
          }
        }}
      >
        เพิ่ม
      </button>
    </div>
  );
}
