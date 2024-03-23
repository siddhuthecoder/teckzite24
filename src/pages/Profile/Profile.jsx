import React from "react";
import Header from "../../components/Header/Header";
import EWCard from "../../components/Shared/EWCard";
import "../../css/referrals.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Profile.module.css";
import s1 from "../../assets/img/profile/Rectangle 29.svg";
import s2 from "../../assets/img/profile/Rectangle 28.svg";
import s3 from "../../assets/img/profile/Rectangle 30.svg";

const Profile = () => {
  const userData = useSelector((state) => state.user.data);
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  if (!userData) {
    return (
      <>
        <Header />
        <div className="w-full min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-semibold">Login to access profile</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div
        className=" flex items-center min-h-[100vh] justify-center w-full bg-fixed bg-center"
        style={{
          backgroundImage: "url('../../../register.png')",
        }}
      >
        <div className="w-[97%] bg-transparent max-w-[1000px] mx-auto flex-col my-[10%] pt-4 max-md:mt-24 pb-10  border-[white] border-[1px] rounded-md  relative">
          <img
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
          />
          <div className="w-[170px] h-[170px] rounded-full my-[15px] mx-auto overflow-hidden flex justify-center items-center border bg-gradient">
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
                  Student ID <span className="hidden md:inline-block">:-</span>{" "}
                </div>
                <div className="font-normal text-xl max-md:text-lg  md:text-[20px] text-[white] max-md:text-center">
                  {userData.collegeId.toUpperCase()}
                </div>
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 mx-auto ">
                <div className="text-[20px] text-[white] font-semibold max-md:hidden">
                  Teckzite ID <span className="hidden md:inline-block">:-</span>{" "}
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
                  {userData.year.toUpperCase()} {userData.branch.toUpperCase()}
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
              <h1 className="col-span-12 text-2xl font-joti mt-10 mb-5 text-center text-white  font-semibold">
                Registered Events
              </h1>
              <div className="w-full flex items-center justify-center flex-wrap gap-5 ">
                {userData.regEvents.map((e) => {
                  return (
                    <EWCard key={e._id} id={e._id} img={e.img} name={e.name} />
                  );
                })}
              </div>
            </>
          )}
          {userData.regWorkshop && userData.regWorkshop.length !== 0 && (
            <>
              <h1 className="col-span-12 text-2xl font-joti mt-5 text-center text-white  font-semibold">
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
    </>
  );
};

export default Profile;
