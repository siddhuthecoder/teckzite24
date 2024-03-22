import { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import EWCard from "../../components/Shared/EWCard";
import "./Profile.module.css";
import s1 from "../../assets/img/profile/Rectangle 29.svg";
import s2 from "../../assets/img/profile/Rectangle 28.svg";
import s3 from "../../assets/img/profile/Rectangle 30.svg";
import s4 from "../../assets/img/profile/Registered events_.svg";
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
    <section className="eve-banner bg-[#000429]">
      <div className="z-[0] w-full min-h-screen absolute"></div>
      <Header />

      <div className="w-full grid bg-[#10022A] pt-[30px] min-h-screen absolute z-[1] h-[548px] top-[141px] left-[101px] mainBox container ">
        <img src={s1} className="absolute left-[20%] top-[-7%]" />
        <img src={s2} className="absolute left-[20.7%] top-[-8.2%]" />
        <img src={s3} className="absolute left-[-8%] top-[-8.8%]" />
        <img
          src={s1}
          className="absolute rotate-180 right-[20%] bottom-[-7%]"
        />
        <img
          src={s2}
          className="absolute rotate-180 right-[20.7%] bottom-[-8.2%]"
        />
        <img
          src={s3}
          className="absolute rotate-180 right-[-8%] bottom-[-8.8%]"
        />

        <div className="col-span-3 mb-0 max-lg:col-span-12 h-[fit-content] flex justify-center">
          {userData.img && userData.img !== "" ? (
            <img
              src={userData.img}
              alt={userData.firstName}
              className="object-contain w-[132px] h-[132px]"
            />
          ) : (
            <div className="w-[132px] mb-0 h-[132px] bg-gradient flex items-center justify-center text-[90px]">
              {userData.firstName.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="w-full absolute text-left flex gap-5 h-full pt-[250px] ">
          <div className="w-[45%] mx-[15%] h-[50%]">
            <div className=" mt-2 text-white">
              <h1 className="font-extrabold text-lg">
                Name of the student:{" "}
                <span className="font-thin text-base">
                  {userData.firstName} {userData.lastName}
                </span>
              </h1>
            </div>
            <div className=" mt-2 text-white">
              <h1 className="font-extrabold text-lg">
                University ID number:{" "}
                <span className="font-thin text-base">
                  {userData.collegeId.toUpperCase()}
                </span>
              </h1>
            </div>
            <div className=" mt-2 text-white">
              <h1 className="font-extrabold text-lg">
                Tz ID number:{" "}
                <span className="font-thin text-base">
                  {userData.tzkid.toUpperCase()}
                </span>
              </h1>
            </div>
          </div>
          <div className="w-[45%] h-[50%]">
            <div className=" mt-2 text-white">
              <h1 className="font-extrabold text-lg">
                University name:{" "}
                <span className="font-thin text-base">
                  {userData.college.toUpperCase()}
                </span>
              </h1>
            </div>
            <div className=" text-white">
              <h1 className="font-extrabold text-lg">
                Year & Branch:{" "}
                <span className="font-thin text-base">
                  {userData.year.toUpperCase()} {userData.branch.toUpperCase()}
                </span>
              </h1>
            </div>
            <div className=" text-white">
              <h1 className="font-extrabold text-lg">
                Email:{" "}
                <span className="font-thin text-base">{userData.email} </span>
              </h1>
            </div>
          </div>
          {/* <h1 className="mb-[-5px] max-lg:mb-0 text-[2.5rem] text-xl">
            {userData.tzkid.toUpperCase()}
          </h1>
          <h1 className="max-lg:text-center max-lg:col-span-6 text-xl capitalize mb-1">
            {userData.firstName} {userData.lastName}
          </h1>
          <h1 className="max-lg:text-center text-base text-gray-400">
            {userData.email}
          </h1>
          <h1 className="max-lg:text-center text-base text-gray-400">
            {userData.college} , {userData.collegeId}
          </h1>
          <h1 className="text-base max-lg:text-center">
            {userData.year} ,{userData.branch}
          </h1>
          <h1 className="text-base max-lg:text-center">
            {userData.city},{userData.district},{userData.state}
          </h1> */}
        </div>
        {userData.regEvents && userData.regEvents.length !== 0 && (
          <>
            <div className="w-[1250px] m-auto mx-[20px] mt-[0] flex justify-center">
              <img src={s4} className="w-[400px]" alt={`svg`} />
            </div>

            <div className="col-span-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-10">
              {userData.regEvents.map((e) => {
                return (
                  <EWCard
                    key={e._id}
                    id={e._id}
                    img={e.workshopImg}
                    name={e.name}
                  />
                );
              })}
            </div>
          </>
        )}
        {userData.regWorkshop && userData.regWorkshop.length !== 0 && (
          <>
            <h1 className="col-span-12 text-2xl mt-5 text-center font-semibold">
              Registered Workshops
            </h1>
            <div className="col-span-12 w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-10">
              {userData.regWorkshop.map((w) => {
                return (
                  <EWCard
                    key={w._id}
                    id={w._id}
                    img={w.workshopImg}
                    name={w.name}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Profile;
