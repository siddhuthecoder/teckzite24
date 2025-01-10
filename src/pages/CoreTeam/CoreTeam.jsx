
import Header from "../../components/Header/Header";
import Banner from "../../components/banner/Banner";
import Table from "./TableCard";

const Referrals = () => {

  

  return (
    <section className="absolute top-0 w-[99vw] m-auto overflow-x-hidden">
      <Header />
      <Banner text="COre team" bg="referral-heading" />
      <Table />
    </section>
  );
};

export default Referrals;
