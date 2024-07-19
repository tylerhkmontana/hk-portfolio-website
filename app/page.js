import styles from "./page.module.scss";

import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import WeatherUI from "@/components/WeatherUI";
import Resume from "@/components/Resume";
import Cert from "@/components/Cert";
import Projects from "@/components/Projects";
import Clock from "@/components/Clock";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <AboutMe col_start={1} col_end={3} row_start={1} row_end={6} />

      <Cert col_start={2} col_end={3} row_start={6} row_end={7} />

      <Resume col_start={2} col_end={3} row_start={7} row_end={8} />

      <Clock col_start={1} col_end={2} row_start={6} row_end={8} />

      <Skills col_start={3} col_end={5} row_start={1} row_end={2} />

      <WeatherUI col_start={5} col_end={6} row_start={1} row_end={3} />

      <Projects col_start={3} col_end={6} row_start={3} row_end={8} />

      <Footer col_start={3} col_end={5} row_start={2} row_end={3} />
    </main>
  );
}
