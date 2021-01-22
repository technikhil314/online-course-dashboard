import styles from "./dropdown.module.scss";
import { useState } from "react";

const Dropdown = ({ options, onChange, defaultValue }) => {
  const [selectedValue, setSelected] = useState(defaultValue);
  const [active, setActive] = useState(false);
  const onOptionChange = ({ name, value }) => {
    setSelected(name);
    setActive(false);
    onChange({ name, value });
  };
  return (
    <div className={`${styles.dropdown} ${active ? styles.active : ""}`}>
      <button
        className={styles.dropdownControl}
        onClick={() => setActive(!active)}
      >
        {selectedValue}
      </button>
      <ul>
        {options.map((option) => (
          <li key={option.value} onClick={() => onOptionChange(option)}>
            <button>{option.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
