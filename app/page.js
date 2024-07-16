import styles from './page.module.scss';

import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import ReachMe from '@/components/ReachMe';
import Resume from '@/components/Resume';
import Cert from '@/components/Cert';
import Projects from '@/components/Projects';
import Widgets from '@/components/Widgets'
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <AboutMe col_start={1} col_end={3} row_start={1} row_end={5} />

      <Skills col_start={3} col_end={5} row_start={1} row_end={2} />

      <ReachMe col_start={5} col_end={6} row_start={1} row_end={3} />

      <Resume col_start={1} col_end={2} row_start={5} row_end={6} />

      <Cert col_start={2} col_end={3} row_start={5} row_end={6} />

      <Footer col_start={3} col_end={5} row_start={2} row_end={3} />

      <Projects col_start={3} col_end={6} row_start={3} row_end={8} />

      <Widgets col_start={1} col_end={3} row_start={6} row_end={8}/>
    </main>
  );
}
