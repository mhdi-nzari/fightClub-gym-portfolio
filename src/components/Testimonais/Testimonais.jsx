import React, { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

import testimonialsData from "../../data/testimonialsData";
import "./Testimonais.css";
import { motion } from "framer-motion";

const Testimonais = () => {
  const [selected, setSelected] = useState(0),
    tLength = testimonialsData.length;
  const transition = { type: "spring", duration: 4 };

  return (
    <div className="testimonais" id="testimonais">
      <div className="left-t">
        <span>Testomonias</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ transition }}
        >
          {testimonialsData[selected].review}
        </motion.span>

        <span>
          {" "}
          <span style={{ color: "var(--orange)" }}>
            <span>{testimonialsData[selected].name}</span>{" "}
          </span>
          <span>- {testimonialsData[selected].status}</span>
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
          src={testimonialsData[selected].image}
          alt=""
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ transition }}
        />

        <div className="arrows">
          <img
            onClick={() =>
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1)
            }
            src={leftArrow}
            alt="arrows-left"
          />
          <img
            src={rightArrow}
            alt="arrows-right"
            onClick={() =>
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonais;
