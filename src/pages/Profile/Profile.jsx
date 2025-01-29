import React from "react";
import Header from "../../components/Header/Header";
import EWCard from "../../components/Shared/EWCard";
import "../../css/referrals.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Profile.module.css";

import profiledesk from "../../assets/events/profiledesk.webp";
import profilemobile from "../../assets/events/profilemobile.webp";
const Profile = () => {
  const userData = useSelector((state) => state.user.data);
  const userStatus = useSelector((state) => state.user.status);

  if (userStatus !== "loaded") {
    return (
      <>
        <Header />

        <div className="w-full min-h-screen flex items-center justify-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </>
    );
  }

  if (!userData) {
    return (
      <>
        <Header />

        <div
          className="w-full min-h-screen flex items-center justify-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('/assets/cbg.webp')",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        >
          <h1 className="text-2xl font-semibold">Login to access profile</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('/workshopbg.webp')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <Header />

        <div className=" flex items-center min-h-[100vh] justify-center w-full bg-fixed bg-center">
          <div className="w-[97%] bg-transparent max-w-[1000px] mx-auto flex-col my-[10%] max-md:mt-24    relative pb-[30px]">
            <img
              src={profiledesk}
              alt=""
              className="absolute w-[100%] h-[100%] md:block hidden  "
            />

            <img
              src={profilemobile}
              alt=""
              className="absolute w-auto h-[100%] block md:hidden "
            />

            {/*<img
            src={s1}
            alt=""
            className="absolute top-[-55px] left-[30%] scale-x-[0.6]"
          />
          <img
            src={s2}
            alt=""
            className="absolute top-[-62px] left-[30.8%] scale-x-[0.6]"
          />
          <img
            src={s3}
            alt=""
            className="absolute top-[-62px]  hidden md:block md:left-[-14%] scale-x-[0.6]"
          />
          <img
            src={s3}
            alt=""
            className="absolute bottom-[-37px]  hidden md:block md:right-[-7%]  scale-y-[-1] scale-x-[-1] w-[200px]"
          />
          <img
            src={s1}
            alt=""
            className="absolute bottom-[-65px] right-[30.8%] scale-x-[0.6]"
          />
          <img
            src={s2}
            alt=""
            className="absolute bottom-[-55px] right-[30.8%] scale-x-[0.6]"
          />*/}
            <div className="text-center text-2xl md:pt-[40px]  mt-[24px] pb-2 font-bruno">
              Profile
            </div>
            <div className="w-[170px] h-[170px] rounded-full my-[15px] mx-auto overflow-hidden flex justify-center items-center border bg-[#22EAEA]">
              {userData.img && userData.img !== "" ? (
                <img
                  src={userData.img}
                  alt={userData.firstName}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-[60px]">
                  {userData.firstName.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            {userData.qrimage && (
              <div className="flex justify-center my-5">
                <img
                  src={userData.qrimage}
                  alt="QR Code"
                  className="w-[200px] h-[200px] object-contain border rounded-md"
                />
              </div>
            )}

            <div className="w-full grid grid-cols-1 md:grid-cols-2">
              <div className="ps-[0px] md:ps-[40px] flex flex-col">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 mx-auto ">
                  <div className="text-[20px] text-[white] font-semibold max-md:hidden">
                    Name of Student{" "}
                    <span className="hidden md:inline-block">:-</span>{" "}
                  </div>
                  <div className="font-normal text-xl max-md:text-xl  md:text-[20px] text-[white] max-md:text-center">
                    {userData.firstName} {userData.lastName}
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 mx-auto ">
                  <div className="text-[20px] text-[white] font-semibold max-md:hidden">
                    Student ID{" "}
                    <span className="hidden md:inline-block">:-</span>{" "}
                  </div>
                  <div className="font-normal text-xl max-md:text-lg  md:text-[20px] text-[white] max-md:text-center">
                    {userData.collegeId.toUpperCase()}
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 mx-auto ">
                  <div className="text-[20px] text-[white] font-semibold max-md:hidden">
                    Teckzite ID{" "}
                    <span className="hidden md:inline-block">:-</span>{" "}
                  </div>
                  <div className="font-normal text-xl max-md:text-lg  md:text-[20px] text-[white] max-md:text-center">
                    {userData.tzkid.toUpperCase()}
                  </div>
                </div>
              </div>
              <div className="ps-[0] md:ps-[40px] flex flex-col">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 mx-auto ">
                  <div className="text-[20px] text-[white] font-semibold max-md:hidden">
                    University Name{" "}
                    <span className="hidden md:inline-block">:-</span>{" "}
                  </div>
                  <div className="font-normal text-xl max-md:text-lg  md:text-[20px] text-[white] max-md:text-center">
                    {userData.college.toUpperCase()}
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 mx-auto ">
                  <div className="text-[20px] text-[white] font-semibold max-md:hidden">
                    Year & Branch{" "}
                    <span className="hidden md:inline-block">:-</span>{" "}
                  </div>
                  <div className="font-normal text-xl max-md:text-lg  md:text-[20px] text-[white] max-md:text-center">
                    {userData.year.toUpperCase()}{" "}
                    {userData.branch.toUpperCase()}
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 mx-auto ">
                  <div className="text-[20px] text-[white] font-semibold max-md:hidden">
                    Email <span className="hidden md:inline-block">:-</span>{" "}
                  </div>
                  <div className="font-normal text-lg pt-2 md:text-[14px] text-[white] max-md:text-center">
                    {userData.email}
                  </div>
                </div>
              </div>
            </div>
            {userData.regEvents && userData.regEvents.length !== 0 && (
              <>
                <h1 className="col-span-12 text-2xl font-bruno mt-10 mb-5 text-center text-white  font-semibold">
                  Registered Events
                </h1>
                <div className="w-full flex items-center justify-center flex-wrap gap-5 ">
                  {userData.regEvents.map((e) => {
                    return (
                      <EWCard
                        key={e._id}
                        id={e._id}
                        img={e.img}
                        name={e.name}
                      />
                    );
                  })}
                </div>
              </>
            )}
            {userData.regWorkshop && userData.regWorkshop.length !== 0 && (
              <>
                <h1 className="col-span-12 text-2xl font-bruno mt-5 text-center text-white  font-semibold">
                  Registered Workshops
                </h1>
                <div className="w-full flex items-center justify-center flex-wrap gap-5 ">
                  {userData.regWorkshop.map((w) => {
                    return (
                      <EWCard
                        key={w._id}
                        id={w._id}
                        img={w.workshopImg}
                        name={w.name}
                        workshop={true}
                      />
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
