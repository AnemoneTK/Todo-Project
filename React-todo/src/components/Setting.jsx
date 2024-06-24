import "../css/setting.css";
export default function Setting() {
  return (
    <>
      <div className="setting rounded-circle">
        <i className="settingIcon bi bi-gear"></i>
      </div>
      <div>
        <div className="filter"></div>
        <div className="desc"></div>
      </div>
    </>
  );
}
