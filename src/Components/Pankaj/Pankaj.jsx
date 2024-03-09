import React, { useState, useEffect } from "react";
import "./Pankaj.css";
import { motion } from "framer-motion";
import { RiDeleteBin6Line } from "react-icons/ri";

export const Pankaj = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  useEffect(() => {
    console.log("items", items);
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log("inputValue", inputValue);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
    console.log("items", items);
  };

  const handleDeletePlace = (deletingplace) => {
    const newItems = items.filter((item) => item !== deletingplace);
    setItems(newItems);
  };

  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
    description: "",
  });

  console.log("formData", formData);

  const handleFormData = (event) => {
    event.persist();
    setFormData((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <>
      <form className="Form-form" onSubmit={handleFormSubmit}>
        <motion.div className="Form-header">
          <h1 className='text-4xl text-black font-bold text-center mt-[20px] mb-[10px]'>Plan Your Trip</h1>
          <p>Let us know your preferences</p>
        </motion.div>

        <div className="Form-body">
          <div className="Form-left">
            <label htmlFor="destination">Where to?</label>
            <input
              type="text"
              name="destination"
              onChange={handleFormData}
              value={formData.destination}
            />

            <div className="Form-date">
              <div className="start-date">
                <label htmlFor="date">start-date:</label>
                <input
                  type="date"
                  name="startDate"
                  onChange={handleFormData}
                  value={formData.startDate}
                />
              </div>
              <div className="end-date">
                <label htmlFor="date">end-date:</label>
                <input
                  type="date"
                  name="endDate"
                  onChange={handleFormData}
                  value={formData.endDate}
                />
              </div>
            </div>

            <label htmlFor="budget">Approximate Budget</label>
            <input
              type="number"
              name="budget"
              onChange={handleFormData}
              value={formData.budget}
            />

            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              rows="7"
              cols="50"
              resize="none"
              onChange={handleFormData}
              value={formData.description}
            />
          </div>
          <div className="Form-right">
            <div className="search-places">
              <h3>Add Places</h3>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter item"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="addItem-button"
                onClick={handleAddItem}
              >
                Add Item
              </motion.button>
              <ul>
                {items.map((item, index) => (
                  <motion.li
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    whileHover={{
                      boxShadow: "0px 0px 8px rgb(0,0,0)",
                      transition: { duration: 0.1 },
                    }}
                    key={index}
                  >
                    {item}
                    <RiDeleteBin6Line
                      className="place-del"
                      onClick={() => handleDeletePlace(item)}
                    />
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="submit-button"
        >
          Submit
        </motion.button>
      </form>
    </>
  );
};
export default Pankaj
