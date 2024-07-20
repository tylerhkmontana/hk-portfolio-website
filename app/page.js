"use client";

import styles from "./page.module.scss";

import { useEffect, useState } from "react";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import WeatherUI from "@/components/WeatherUI";
import Resume from "@/components/Resume";
import Cert from "@/components/Cert";
import Projects from "@/components/Projects";
import Clock from "@/components/Clock";
import Footer from "@/components/Footer";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const gridTemplate = {
    aboutMe: isMobile ? [1, 3, 1, 5] : [1, 3, 1, 6],
    skills: isMobile ? [1, 3, 5, 6] : [3, 5, 1, 2],
    weatherUI: [5, 6, 1, 3],
    resume: isMobile ? [1, 2, 6, 7] : [2, 3, 7, 8],
    cert: isMobile ? [2, 3, 6, 7] : [2, 3, 6, 7],
    projects: isMobile ? [1, 3, 7, 11] : [3, 6, 3, 8],
    clock: [1, 2, 6, 8],
    footer: isMobile ? [1, 3, 11, 12] : [3, 5, 2, 3],
  };

  useEffect(() => {
    if (window.innerWidth < 1200) {
      setIsMobile(true);
    }

    function resizeHandler(e) {
      if (e.target.innerWidth < 1200) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", (e) => resizeHandler(e));

    return window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <main className={styles.main}>
      <AboutMe
        col_start={gridTemplate.aboutMe[0]}
        col_end={gridTemplate.aboutMe[1]}
        row_start={gridTemplate.aboutMe[2]}
        row_end={gridTemplate.aboutMe[3]}
      />

      <Cert
        col_start={gridTemplate.cert[0]}
        col_end={gridTemplate.cert[1]}
        row_start={gridTemplate[2]}
        row_end={gridTemplate[3]}
      />

      <Resume
        col_start={gridTemplate.resume[0]}
        col_end={gridTemplate.resume[1]}
        row_start={gridTemplate.resume[2]}
        row_end={gridTemplate.resume[3]}
      />
      {!isMobile && (
        <Clock
          col_start={gridTemplate.clock[0]}
          col_end={gridTemplate.clock[1]}
          row_start={gridTemplate.clock[2]}
          row_end={gridTemplate.clock[3]}
        />
      )}

      <Skills
        col_start={gridTemplate.skills[0]}
        col_end={gridTemplate.skills[1]}
        row_start={gridTemplate.skills[2]}
        row_end={gridTemplate.skills[3]}
      />

      {!isMobile && (
        <WeatherUI
          col_start={gridTemplate.weatherUI[0]}
          col_end={gridTemplate.weatherUI[1]}
          row_start={gridTemplate.weatherUI[2]}
          row_end={gridTemplate.weatherUI[3]}
        />
      )}

      <Projects
        col_start={gridTemplate.projects[0]}
        col_end={gridTemplate.projects[1]}
        row_start={gridTemplate.projects[2]}
        row_end={gridTemplate.projects[3]}
      />

      <Footer
        col_start={gridTemplate.footer[0]}
        col_end={gridTemplate.footer[1]}
        row_start={gridTemplate.footer[2]}
        row_end={gridTemplate.footer[3]}
      />
    </main>
  );
}
