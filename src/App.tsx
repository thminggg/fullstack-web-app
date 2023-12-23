import styles from "./App.module.css";
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";
import ListingCard from "./components/ListingCard/ListingCard";

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

function App() {
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
        <div className="mt-6 p-6 md:w-8/12 mx-auto">
          <div className="w-full mb-3 text-lg font-bold">Top Deals</div>
          <div className="flex flex-wrap md:flex-nowrap gap-3">
            <ListingCard />
            <ListingCard />
            <ListingCard />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
