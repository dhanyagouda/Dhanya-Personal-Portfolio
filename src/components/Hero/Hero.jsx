import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dhanya</h1>
        <p className={styles.description}>
        As a Bachelor of Engineering student with a keen interest in web development, I’m passionate about building dynamic and user-friendly web applications while continually enhancing my skills in both front-end and back-end technologies.
        </p>
        <a href="mailto:dhanyagouda49@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/imagee.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};