import Header from "../../components/Header/Header";
import { motion } from "framer-motion";
import { useState } from "react";
import "../../css/glitch.scss";
import "../../css/glitch2.scss";
import { IoMdClose } from "react-icons/io";
import google from "../../assets/img/google-play-badge.png";
import apple from "../../assets/img/apple.png";
import meebuddy from "../../assets/meenews.png";
import Background from "../../components/home_banneer/Background";
import SplineScreen from "../../components/home_banneer/SplineScreen";
import ParticlesComponent from "./../../components/home_banneer/Particle";

const Home = () => {
  const [app, setApp] = useState(true);
  return (
    <main>
      <ParticlesComponent id="particles" />
      <Header />
      <SplineScreen />
      <Background />
    </main>
  );
};

export default Home;
