import FeatureDeal from "../../components/FeatureDeal/FeatureDeal";
import Search from "../../components/Search/Search";
import styles from "./App.module.scss";

const Slogan = () => {
  return (
    <>
      <p className={`text-3xl mt-12 md:text-5xl ${styles.slogan}`}>
        Real Estate Vancouver
      </p>
      <p className={`text-lg mt-3 ${styles.subtitle}`}>
        Real Estate for Sale & Rent in Canada
      </p>
    </>
  );
};

export default function App() {
  return (
    <section
      className={`relative flex flex-col justify-center ${styles.backgroundImg}`}
      style={{
        backgroundImage: `url("/background.svg")`,
      }}
    >
      <Slogan />
      <Search />
      <div className={`${styles.transitionBlur}`} />
      <FeatureDeal />
    </section>
  );
}
