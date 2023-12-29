import styles from "./App.module.css";
import FeatureDeal from "./components/FeatureDeal/FeatureDeal";
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";

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
    <div className="relative min-h-screen pb-9">
      <Nav />
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
    </div>
  );
}
