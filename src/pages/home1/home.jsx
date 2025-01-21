import Header from "../../components/Header/Header";
import { motion } from "framer-motion";
import { useState } from "react";
import "../../css/glitch.scss";
import "../../css/glitch2.scss";
import { IoMdClose } from "react-icons/io";
import google from "../../assets/img/google-play-badge.webp";
import apple from "../../assets/img/apple.webp";
import meebuddy from "../../assets/meenews.png";
import Background from "../../components/home_banneer/Background";
import ParticlesComponent from "./../../components/home_banneer/Particle";
import './App.css';

const Home = () => {
  const [app, setApp] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); // Show the modal
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <main>
      <ParticlesComponent id="particles" />
      <Header />
      <Background />

      {/* Form Section */}
      <section className="form-container">
        <div className="glass-form">
          <p className="form-description">Please Enter Your ID Number and  Password</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="Id-Number"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Id Number"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Login
            </button>
          </form>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <IoMdClose className="close-icon" onClick={closeModal} />
            <h2>⚠️ Warning</h2>
            <p >Incorrect Password</p>
            <button onClick={closeModal} className="modal-button">
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
