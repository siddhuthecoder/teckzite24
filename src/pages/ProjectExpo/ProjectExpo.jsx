import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
// import RegistrationModal from "./ProjectExpoModal";
// import MenuButton from "../../components/button/MenuButton";
import Header from "../../components/Header/Header";
import { useEffect } from "react";
import ProblemStatements from "./ProblemStatements";
const ProjectExpo = () => {
  const userData = useSelector((state) => state.user.data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const downloadFile = () => {
    const fileUrl = `${process.env.PUBLIC_URL}/assets/MEGAEXPO'25.pptx`;
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "sample.pptx";
    anchor.click();
  };
  const ResultsdownloadFile = () => {
    const fileUrl = " `${process.env.PUBLIC_URL}/assets/MEGAEXPO_R1_RESULTS_final`";
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "ResultsdownloadFile.pdf";
    anchor.click();
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // const handleRegisterClick = () => {
  //   if (!userData || Object.keys(userData).length === 0) {
  //     toast.error("Please login to register for the project expo");
  //   } else {
  //     setIsModalOpen(true);
  //   }
  // };

  return (
    <>
      <Header />
      <div
        className="w-full flex-col p-4 mb-3 md:mt-0 min-h-screen flex justify-center items-center gap-[20px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/expo.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        
        <img
          src="/assets/expotitle.png"
          className={`
                      ${scrollPosition < 20 ? "mt-[100px]" : "my-0"} 
                      md:my-0 md:mt-0 
                      h-[250px] md:h-full
                    `}
        />
        <div className="relative flex gap-5 text-xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg p-6 rounded-lg">
        <h2 className="text-blink">Results are out now</h2>
        <button onClick={ResultsdownloadFile} className="text-cyan-500">
          Click Here to Download Results
        </button>
      </div>
        <div
          className={`flex flex-col md:flex-row gap-[30px] md:gap-[70px] items-center     ${
            scrollPosition < 20 ? "my-[30px]" : "my-0"
          } 
`}
        >
          <img
            src="TZ LOGO .png"
            className="h-[100px] w-[100px] md:h-[200px] md:w-[200px]"
          />
          <img src="Nidi.png" className="md:h-[100px] md:w-[250px]" />
        </div>
        <p className="text-white md:text-[24px] text-center">
          Supported by NIDI Scheme, Ministry of Education , Govt. of India
        </p>

   
      

        <h2 className="text-[30px]">Problem Statements</h2>
        <ProblemStatements />
        <div className="w-11/12 max-w-4xl p-6 rounded-lg backdrop-blur-lg flex flex-col gap-[30px] bg-white/10 border border-white/20 shadow-lg text-white mb-8">
          <ul class="list-disc ml-6 text-[white]">
            <li>
              <strong class="text-cyan-500">
                Round 1: Project Submission and Screening
              </strong>
              <ul class="list-circle ml-6 mt-2">
                <li>
                  Participants should submit a brief report (maximum of 15 pages
                  in .pdf format with provisions for search options).
                </li>
                <li>
                  The report should contain:
                  <ul class="list-decimal ml-6 mt-2">
                    <li>Methodology used</li>
                    <li>Components with specifications</li>
                  </ul>
                </li>
                <li className="mt-[10px]">
                  The list of projects is provided in Annexure-I of this
                  notification. Each project is denoted with a Project Number
                  (i.e., Project-1, Project-2 respectively).
                </li>
                <li>
                  Under{" "}
                  <span class="font-semibold text-cyan-500">
                    Student Innovation
                  </span>{" "}
                  in Annexure-1, students are invited to submit their project
                  proposals. <br />
                  <span>
                    The project proposal under student innovation should be
                    submitted in a PPT format.
                  </span>
                  <br />
                  <span>That ppt should include :</span>
                  <ul class="list-decimal ml-6 mt-2 ">
                    <li className="font-semibold text-[16px]">Project title</li>
                    <li className="font-semibold text-[16px]">Objective</li>
                    <li className="font-semibold text-[16px]">Methodology</li>
                    <li className="font-semibold text-[16px]">
                      Novelty and Expected outcomes
                    </li>
                    <li className="font-semibold text-[16px]">
                      Future scope and Market Feasibility
                    </li>
                    <li className="font-semibold text-[16px]">
                      Estimated budget for prototype building
                    </li>
                    <li className="font-semibold text-[16px]">
                      Research and References
                    </li>
                  </ul>
                  <div className="flex  items-start mt-[20px]">
                    Sample PPT format for student innovation problem statement.
                    <a
                      href="https://docs.google.com/presentation/d/1I1KGqGC_PDrSszn9VVoXMHRqNndv5wJw/edit?usp=drivesdk&ouid=106574611355872954164&rtpof=true&sd=true "
                      className="text-cyan-500"
                      target="blank"
                    >
                      Please go through this link
                    </a>{" "}
                  </div>
                  Note: For other problem statements, you must submit a brief
                  report including the methodology used and the components with
                  their specifications.
                </li>
              </ul>
            </li>
            <li class="mt-4">
              <strong class=" text-cyan-500">
                Round 2: Project Expo Presentation
              </strong>
              <ul class="list-circle ml-6 mt-2">
                <li>
                  Shortlisted participants will display their projects during
                  Teckzite'25, presenting their work to a diverse audience,
                  including peers, faculty, and industry professionals.
                </li>
                <li>
                  A jury panel will evaluate the projects during the expo based
                  on:
                  <ul class="list-decimal ml-6 mt-2">
                    <li>Creativity</li>
                    <li>Implementation</li>
                    <li>Real-world impact</li>
                  </ul>
                </li>
                <li>
                  The jury will select and announce the results for each project
                  from the list of projects enlisted in Problem Statements.
                </li>
              </ul>
            </li>
            <li class="mt-4">
              <strong class=" text-cyan-500">TimeLine for MegaExpo</strong>{" "}
              <br />
              <ul class="list-circle ml-6 mt-2">
                <li>Event Announcement : Jan 24 ,2025</li>
                <li>Abstract Submission Deadline : Feb 2 ,2025</li>
                <li>Announcement of shortlisted teams : Feb 3 ,2025</li>
                <li>Project Development and Expo Presentation</li>
                <li>Project Execution : Feb 3 - Feb 23, 2025</li>
                <li>Prototype Submission Deadline : Feb 24,2025</li>
                <li>Expo and Evaluation : Feb 26 - Feb 27,2025</li>
              </ul>
            </li>
          </ul>
          <p className="text-white pl-[30px]">
            <h3>Note :</h3>
            <ul>
              <li>
                1.The Government of India will fund the most innovative projects
                to support their advancement in product development.
              </li>
              <li>
                2.Team size should be Minimum 2 and Maximum 5 students are
                allowed
              </li>
              <li>
                3.To participate in the Project Expo, it is mandatory to
                register for Teckzite.
              </li>
            </ul>
          </p>
          <p className="px-[30px]">
            For more details{" "}
            <a
              href="https://docs.google.com/document/d/16waPX_korG0tVZ4Gkzlla_qAOgAT5n3bn6nDLy88N1U/edit?usp=sharing"
              className="text-cyan-500"
              target="blank"
            >
              Please go through this link
            </a>{" "}
          </p>

          {/* <div className="w-full flex items-center justify-between mx-[40px]">
            <div onClick={handleRegisterClick}>
              <MenuButton title="Register" name="Register" />
            </div>
          </div> */}

        </div>
        {/* {isModalOpen && (
          <RegistrationModal
            onClose={() => setIsModalOpen(false)}
            userData={userData}
          />
        )} */}
      </div>
    </>
  );
};

export default ProjectExpo;
