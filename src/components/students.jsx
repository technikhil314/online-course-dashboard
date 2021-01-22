import { useEffect, useState } from "react";
import useCallApi from "../hooks/useCallApi";
import Box from "./box";
import Dropdown from "./dropdown";
import styles from "./students.module.scss";
import person from "../assets/images/person.png";

const dropDownOptions = [
  {
    name: "Descending",
    value: "desc",
  },
  {
    name: "Ascending",
    value: "asc",
  },
];

const Students = (params) => {
  const { data } = useCallApi({
    url: process.env.REACT_APP_STUDENTS_API_URL,
  });
  const [json, setJson] = useState(null);
  useEffect(() => {
    if (data) {
      const json = data.sort((a, b) => b.marks - a.marks);
      setJson([...json]);
    }
  }, [data]);
  const onChange = (option) => {
    let json;
    if (option.value === "desc") {
      json = data.sort((a, b) => b.marks - a.marks);
    } else {
      json = data.sort((a, b) => a.marks - b.marks);
    }
    setJson([...json]);
  };
  return (
    <section className={styles.section}>
      <Box>
        <header className={styles.header}>
          <h4>Students by average mark</h4>
          <Dropdown
            options={dropDownOptions}
            onChange={onChange}
            defaultValue="Descending"
          ></Dropdown>
        </header>
        <div className={styles.marksContainer}>
          {json &&
            json.map(({ id, name, marks }) => (
              <div className={styles.row} key={id}>
                <div className={styles.student}>
                  <img src={person} alt=""></img>
                  <span className="muted">{name}</span>
                </div>
                <p>
                  <strong>{marks}</strong>
                </p>
              </div>
            ))}
        </div>
      </Box>
    </section>
  );
};

export default Students;
