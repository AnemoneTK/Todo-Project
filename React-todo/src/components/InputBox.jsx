import "../css/InputBox.css";

export default function InputBox() {
  return (
    <div className="row col-10 inputWarp">
      <input
        className="inputBox rounded-pill mb-3"
        type="text"
        placeholder="สร้างรายการใหม่"
      />
      <button className="addBtn rounded-circle rounded-pill col-4">
        เพิ่ม
      </button>
    </div>
  );
}
