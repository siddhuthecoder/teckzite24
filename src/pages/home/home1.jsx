import Header from "../../components/Header/Header";
import video from "../../assets/home.mp4";

const Home = () => {
  return (
    <main>
      <Header />
      <div className="absolute top-0 left-0 w-full h-full z-2 overflow-hidden">
        <video
          src={video}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 min-w-full min-h-full object-cover"
        ></video>
      </div>
    </main>
  );
};

export default Home;
