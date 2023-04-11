import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from 'number-counter'
const Hero = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const transition = { type: "spring", duration: 4 };
  return (
    <div className="hero " id="hero">
      <div className="blur hero-blur "></div>
      <div className="left-h">
        <Header />
        {/* the best add */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>

            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build youre ideal body youre
              ideal and live up youre life to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span><NumberCounter end={140} start={100} delay="4"  prefix="+"/></span>
            <span>Expert Couchs</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={0} delay="4"  prefix="+"/></span>
            <span>members joined</span>
          </div>
          <div>
            <span><NumberCounter end={2000} start={100} delay="4"  prefix="+"/></span>
            <span>fitness program</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={{ transition }}
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <span>Heart Rate </span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="" className="hero_image" />

        <img src={hero_image_back} alt="" className="hero_image_back" />

        {/* calories */}

        <motion.div
          className="calories"
          initial={{ right: "11rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
        >
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>22 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
