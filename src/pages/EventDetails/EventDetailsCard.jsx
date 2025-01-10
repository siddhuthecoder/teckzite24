import React, { useEffect, useLayoutEffect, useState } from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import sid from "../../assets/webteam/sid.png";

const EventDetailsCard = () => {
  const [navBar, setNavBar] = useState("description");
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <>
      {size[0] >= 1026 ? (
        <>
          <div className="border-x-2 w-[80%] m-auto">
            <div className="flex mt-[20px]">
              <h1 className="font-bold cursor-pointer text-2xl w-[25%]">
                Titile
              </h1>
              <nav className="flex justify-between w-[65%]">
                <h3
                  className={`cursor-pointer ${
                    navBar == "description" ? "border-b-2" : ""
                  }`}
                  onClick={() => setNavBar("description")}
                >
                  Description
                </h3>
                <h3
                  className={`cursor-pointer ${
                    navBar == "judging" ? "border-b-2" : ""
                  }`}
                  onClick={() => setNavBar("judging")}
                >
                  Judging Criteria
                </h3>
                <h3
                  className={`cursor-pointer ${
                    navBar == "rules" ? "border-b-2" : ""
                  }`}
                  onClick={() => setNavBar("rules")}
                >
                  Rules
                </h3>
                <h3
                  className={`cursor-pointer ${
                    navBar == "contact" ? "border-b-2" : ""
                  }`}
                  onClick={() => setNavBar("contact")}
                >
                  Contact
                </h3>
              </nav>
            </div>
            <div className="flex mt-[20px] w-[95%] m-auto">
              <img src={sid} alt="sid" className="w-[20%] m-auto" />
              <div className="w-[80%]">
                {navBar == "description" ? (
                  <div>Description</div>
                ) : navBar == "judging" ? (
                  <div>Judging Criteria</div>
                ) : navBar == "rules" ? (
                  <div>Rules</div>
                ) : (
                  <div>Contact</div>
                )}
              </div>
            </div>
            <div className="flex justify-between w-[90%] m-auto mt-[30px]">
              <div className="flex items-center ml-[20px]">
                <FmdGoodIcon fontSize="medium" />
                <p className="text-xl font-semibold">Offline</p>
              </div>
              <div className="w-[150px] rotate-180 h-[50px] [clip-path:polygon(0_0,_100%_0,_84%_41%,_16%_41%)] mb-[20px] bg-slate-600">
                <p className="rotate-180 ">Register</p>
              </div>
              <div className="items-center text-center">
                <p className="font-semibold text-xl mt-[20px]">Prize Money</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-[80%] max-sm:w-[90%] h-[90vh] m-auto">
            <h3 className="font-bold text-2xl uppercase">Title</h3>
            <img src={sid} alt="sid" className="w-[60%] h-[60%] m-auto" />
            <div className="flex justify-between mt-[10px] items-center">
              <div>
                <p className="text-lg">Offline</p>
              </div>
              <div>
                <h4 className="font-bold text-xl">INR</h4>
                <p className="text-xl">Prize Money</p>{" "}
              </div>
            </div>
            <div className="border-x-2 m-auto">
              <div className="flex mt-[20px] w-[95%] m-auto">
                <nav className="flex justify-between max-sm:w-full w-[85%] m-auto">
                  <p
                    className={`cursor-pointer mx-1 max-sm:text-xs text-base ${
                      navBar == "description" ? "border-b-2" : ""
                    }`}
                    onClick={() => setNavBar("description")}
                  >
                    Description
                  </p>
                  <p
                    className={`cursor-pointer mx-1 max-sm:text-xs text-base ${
                      navBar == "judging" ? "border-b-2" : ""
                    }`}
                    onClick={() => setNavBar("judging")}
                  >
                    Judging Criteria
                  </p>
                  <p
                    className={`cursor-pointer mx-1 max-sm:text-xs text-base ${
                      navBar == "rules" ? "border-b-2" : ""
                    }`}
                    onClick={() => setNavBar("rules")}
                  >
                    Rules
                  </p>
                  <p
                    className={`cursor-pointer mx-1 max-sm:text-xs text-base ${
                      navBar == "contact" ? "border-b-2" : ""
                    }`}
                    onClick={() => setNavBar("contact")}
                  >
                    Contact
                  </p>
                </nav>
              </div>
              <div className="w-[85%] m-auto">
                {navBar == "description" ? (
                  <div>Description</div>
                ) : navBar == "judging" ? (
                  <div>Judging Criteria</div>
                ) : navBar == "rules" ? (
                  <div>Rules</div>
                ) : (
                  <div>Contact</div>
                )}
              </div>
              <div className="max-sm:w-[50%] w-[25%] m-auto rotate-180 h-[50px] [clip-path:polygon(0_0,_100%_0,_84%_41%,_16%_41%)] mb-[20px] bg-slate-600">
                <p className="rotate-180 ">Register</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EventDetailsCard;
