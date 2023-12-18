import styles from "./App.module.css";
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";

const Headline = () => {
  return (
    // <div className="absolute top-1/4 w-full text-center">
    <>
      <p className={`${styles.slogan}`}>Real Estate Vancouver</p>
      <p className={`mt-3 ${styles.subtitle}`}>
        Real Estate for Sale & Rent in Canada
      </p>
    </>
    // </div>
  );
};

function App() {
  return (
    <div
      className={`relative min-h-screen max-w-7xl ${styles.backgroundImg}`}
      style={{
        backgroundImage: `url("/background.svg")`,
      }}
    >
      <Nav />
      <div className={`flex flex-col justify-center ${styles.headline}`}>
        <Headline />
        <Search />
      </div>
    </div>
  );
}

export default App;
