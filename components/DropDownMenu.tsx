import DropDownMenuStyle from "../public/style/DropDownMenu.module.css";
export default function DropDownMenu() {
  return (
    <div className={DropDownMenuStyle.dropdown}>
      <div className={DropDownMenuStyle.dropBox}>
        <h3>Predict Model</h3>
        <input placeholder={"select your state"} />
      </div>
      <div className={DropDownMenuStyle.dropdownContent}>
        <a>Hourly</a>
        <a>Daily</a>
      </div>
    </div>
  );
}
