import React, { useState } from "react";
import ed1 from "../../assets/img/ed/ed1.svg";
import ed2 from "../../assets/img/ed/ed2.svg";
import ed3 from "../../assets/img/ed/ed3.svg";
import ed4 from "../../assets/img/ed/ed4.svg";

const EDcard = () => {
  const [tab, setTab] = useState("Description");
  return (
    <>
      <div className="w-full flex h-screen  items-center">
        <div className="w-[95%] max-w-[800px] mx-auto min-h-[450px]  relative">
          <div className="w-[90%] mx-auto   flex-col z-[1] absolute top-[10%] left-[4%]">
            <div className="w-full  items-center hidden sm:flex mt-[20px] z-[2] justify-between gap-5  flex-wrap ">
              <div
                className="flex items-center tab   cursor-pointer  "
                onClick={() => setTab("Description")}
              >
                <div className="z-[2] text-center text-nowrap">Desciption</div>
                <img
                  src={ed4}
                  alt=""
                  className={`ms-[-80px] ${
                    tab == "Description" ? "block" : "hidden"
                  }`}
                  style={{ width: "100%" }}
                />
              </div>
              <div
                className="flex items-center tab   cursor-pointer  "
                onClick={() => setTab("Structure")}
                style={{ maxWidth: "150px" }}
              >
                <div className="z-[2] text-center text-nowrap">Structure</div>
                <img
                  src={ed4}
                  alt=""
                  className={`ms-[-70px] ${
                    tab == "Structure" ? "block" : "hidden"
                  }`}
                  style={{ width: "100%" }}
                />
              </div>
              <div
                className="flex items-center tab  mx-[10px] cursor-pointer"
                onClick={() => setTab("Rules")}
              >
                <div className="z-[2] text-center text-nowrap">Rules</div>
                <img
                  src={ed4}
                  alt=""
                  className={`ms-[-60px] ${
                    tab == "Rules" ? "block" : "hidden"
                  }`}
                  style={{ width: "100%" }}
                />
              </div>
              <div
                className="flex items-center tab  mx-[10px] cursor-pointer"
                onClick={() => setTab("Contact")}
              >
                <div className="z-[2] text-center text-nowrap">Contact</div>
                <img
                  src={ed4}
                  alt=""
                  className={`ms-[-70px] ${
                    tab == "Contact" ? "block" : "hidden"
                  }`}
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="m-[10px] py-[0.4px] hidden sm:block bg-[purple]"></div>
            <div className="w-full grid grid-cols-1 md:grid-cols-6 ">
              <div
                className="col-span-1 md:col-span-2 mx-auto"
                style={{ maxHeight: "250px" }}
              >
                <img
                  src={img}
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
              <div className="w-full  items-center flex sm:hidden my-[20px]  z-[2] justify-between gap-5  flex-wrap ">
                <div
                  className="flex items-center tab   cursor-pointer  "
                  onClick={() => setTab("Description")}
                >
                  <div className="z-[2] text-center text-nowrap">
                    Desciption
                  </div>
                  <img
                    src={ed4}
                    alt=""
                    className={`ms-[-80px] ${
                      tab == "Description" ? "block" : "hidden"
                    }`}
                    style={{ width: "100%" }}
                  />
                </div>
                <div
                  className="flex items-center tab   cursor-pointer  "
                  onClick={() => setTab("Structure")}
                  style={{ maxWidth: "150px" }}
                >
                  <div className="z-[2] text-center text-nowrap">Structure</div>
                  <img
                    src={ed4}
                    alt=""
                    className={`ms-[-70px] ${
                      tab == "Structure" ? "block" : "hidden"
                    }`}
                    style={{ width: "100%" }}
                  />
                </div>
                <div
                  className="flex items-center tab  mx-[10px] cursor-pointer"
                  onClick={() => setTab("Rules")}
                >
                  <div className="z-[2] text-center text-nowrap">Rules</div>
                  <img
                    src={ed4}
                    alt=""
                    className={`ms-[-60px] ${
                      tab == "Rules" ? "block" : "hidden"
                    }`}
                    style={{ width: "100%" }}
                  />
                </div>
                <div
                  className="flex items-center tab  mx-[10px] cursor-pointer"
                  onClick={() => setTab("Contact")}
                >
                  <div className="z-[2] text-center text-nowrap">Contact</div>
                  <img
                    src={ed4}
                    alt=""
                    className={`ms-[-70px] ${
                      tab == "Contact" ? "block" : "hidden"
                    }`}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div
                className="col-span-1 md:col-span-4 w-full overflow-y-scroll backdrop-blur-lg"
                style={{ maxHeight: "250px" }}
              >
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Optio, enim impedit inventore cumque corrupti, maxime
                  voluptatibus a alias facilis molestiae fuga illo, ipsam cum
                  consequatur quia nihil modi soluta accusamus?
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Optio, enim impedit inventore cumque corrupti, maxime
                  voluptatibus a alias facilis molestiae fuga illo, ipsam cum
                  consequatur quia nihil modi soluta accusamus?
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Optio, enim impedit inventore cumque corrupti, maxime
                  voluptatibus a alias facilis molestiae fuga illo, ipsam cum
                  consequatur quia nihil modi soluta accusamus?
                </p>
              </div>
            </div>
          </div>
          <img
            src={ed1}
            alt=""
            className="absolute pointer-events-none hidden sm:block sm:rotate-[0deg]  z-[0]   "
            style={{
              width: "800px",
              minHeight: "400px",
            }}
          />
          <img
            src={ed2}
            alt=""
            className="absolute pointer-events-none  scale-[0.7] left-[-0px] sm:left-[-20px] z-[0]  top-[5%] sm:top-[20%]"
          />
          <img
            src={ed3}
            alt=""
            className="absolute pointer-events-none  scale-[0.7] right-[-0px] sm:right-[-20px] z-[0] top-[5%]  sm:top-[20%]"
          />
        </div>
      </div>
    </>
  );
};

export default EDcard;
