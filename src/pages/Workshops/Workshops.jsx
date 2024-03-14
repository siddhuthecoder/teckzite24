import Header from "../../components/Header/Header";
import ETWSCard from "../../components/Shared/ETWSCard";

const Workshops = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap max-sm:justify-center max-xl:justify-around justify-between">
        <ETWSCard />
        <ETWSCard />
        <ETWSCard />
        <ETWSCard />
        <ETWSCard />
      </div>
    </>
  );
};

export default Workshops;
