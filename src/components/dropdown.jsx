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
    <div
      className={`${styles.dropdown} ${active ? styles.active : ""}`}
      data-testid="dropdown"
    >
      <button
        className={styles.dropdownControl}
        onClick={() => setActive(!active)}
        data-testid="dropdownButton"
      >
        {selectedValue}
      </button>
      <ul data-testid="dropdownFlyout">
        {options.map((option) => (
          <li
            key={option.value}
            onClick={() => onOptionChange(option)}
            data-testid={`option${option.value}`}
          >
            <button>{option.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
