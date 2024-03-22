import Header from "../../components/Header/Header";
import EventUpdatesCards from "./EventUpdatesCards";

const EventUpdates = () => {
  return (
    <>
      <Header />
      <div className="w-full pt-24">
        <h1 className="w-full text-center text-3xl">Event Updates</h1>
        <EventUpdatesCards />
      </div>
    </>
  );
};

export default EventUpdates;
