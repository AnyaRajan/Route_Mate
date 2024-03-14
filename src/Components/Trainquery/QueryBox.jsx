import React from "react";
import "./QueryBox.css";
import Select from "react-select";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrainSubway } from "react-icons/fa6";
import { FaBus } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";

import data2 from "./stations2.json";

export const QueryBox = () => {
  const [type, setType] = React.useState(0);

  if (type === 1) {
    document.querySelector("#train").classList.add("visible");
    document.querySelector("#plane").classList.remove("visible");
    document.querySelector("#bus").classList.remove("visible");
  } else if (type === 2) {
    document.querySelector("#train").classList.remove("visible");
    document.querySelector("#plane").classList.add("visible");
    document.querySelector("#bus").classList.remove("visible");
  } else if (type === 3) {
    document.querySelector("#train").classList.remove("visible");
    document.querySelector("#plane").classList.remove("visible");
    document.querySelector("#bus").classList.add("visible");
  }

  const [train_options, setTrainOptions] = React.useState([]);

  React.useEffect(() => {
    setTrainOptions(
      data2.data.map((item) => ({
        label: `${item.name} ${item.code}`,
        value: item.code,
      }))
    );
  }, []);

  return (
    <div className="query-box">
      <div className="transport-type">
        <motion.div
          className="transport-background"
          id="train"
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            setType(1);
          }}
        >
          <FaTrainSubway className="icons" name="train" />
        </motion.div>
        <motion.div
          className="transport-background"
          id="plane"
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            setType(2);
          }}
        >
          <ImAirplane className="icons" name="plane" />
        </motion.div>
        <motion.div
          className="transport-background"
          id="bus"
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            setType(3);
          }}
        >
          <FaBus className="icons" name="bus" />
        </motion.div>
      </div>

      <div className="details">
        <div className=" box from-box">
          <label htmlFor="from">From</label>
          <Select
            // className="pankaj-input"
            options={train_options}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                height: "60px",
                width: "clamp(100px, 30vw, 200px)",
                borderRadius: "10px",
                border: "1px solid #385de1",
                padding: " 10px",
                marginTop: "5px",
                fontSize: "15px",
              }),
            }}
          />
        </div>
        <div className="box to-box">
          <label htmlFor="to">To</label>
          <Select
            // className="pankaj-input"
            options={train_options}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                height: "60px",
                width: "clamp(100px, 30vw, 200px)",
                borderRadius: "10px",
                border: "1px solid #385de1",
                padding: " 10px",
                marginTop: "5px",
                fontSize: "15px",
              }),
            }}
          />
        </div>
        <div className=" box date-box">
          <label htmlFor="date">Departure</label>
          <input className="pankaj-input" type="date" name="date" />
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="submit-button"
      >
        search
      </motion.button>
    </div>
  );
};

export default QueryBox;
