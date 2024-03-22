import { useEffect, useState } from "react";
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

  const [scroll, setScroll] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);

    const handleWidth = () => {
        setWidth(window.innerWidth);
    };

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWidth);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', handleWidth);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  const backgroundStyle = {
    opacity: `${1 - scroll / (window.innerHeight / 2)}`,
    // filter: `blur(${blurValue}px)`,
    backgroundPosition: 'center bottom',
    backgroundSize: "cover",
    position: 'fixed',
    top: '0px',
    left: '0px'
};

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
    <section className="eve-banner bg-fixed">
      <div className="z-[0] w-full min-h-screen absolute"></div>
      <Header />

      <div className="w-[90%] max-sm:w-[75%] max-sm:left-[7%] bg-[#10022A] md:left-[5%] pt-[30px] max-lg:left-0 absolute z-[1] top-[141px] left-[4%] mainBox container ">
        <img src={s1} className="absolute max-sm:top-[-1.8%] max-sm:left-[30%] max-sm:w-[150px] left-[20%] top-[-5.7%]" />
        <img src={s2} className="absolute max-sm:top-[-2.2%] max-sm:left-[30%] max-sm:w-[150px] left-[20.7%] top-[-6.7%]" />
        <img src={s3} className="absolute max-sm:top-[-2%] max-sm:left-[-18%] max-sm:w-[150px] md:left-[-15%] left-[-8%] xl:left-[-8%] top-[-6.8%]" />
        <img
          src={s1}
          className="absolute rotate-180 max-sm:bottom-[-1.8%] max-sm:right-[25%] max-sm:w-[150px] right-[20%] bottom-[-5.7%]"
        />
        <img
          src={s2}
          className="absolute rotate-180 max-sm:bottom-[-2.2%] max-sm:right-[25%] max-sm:w-[150px] right-[20.7%] bottom-[-6.7%]"
        />
        <img
          src={s3}
          className="absolute rotate-180 max-sm:bottom-[-2%] max-sm:right-[-18%] max-sm:w-[150px] md:right-[-15%] xl:right-[-8%] right-[-8%] bottom-[-6.8%]"
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
        <div className="w-full max-sm:h-auto text-left sm:flex gap-5 h-[250px] pt-[100px] ">
          <div className="w-[45%] max-sm:w-[250px] max-sm:m-auto mx-[15%] h-[50%]">
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
          <div className="w-[45%] max-sm:w-[250px] max-sm:m-auto h-[50%]">
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
            <div className="w-full m-auto mx-[20px] mt-[30px] flex justify-center">
              <img src={s4} className="w-[400px]" />
            </div>

            <div className="col-span-12 w-[95%] max-sm:gap-0 justify-center max-w-7xl mx-auto grid grid-cols-1 max-sm:w-[240px] md:grid-cols-2 lg:grid-cols-4 gap-[15%] pb-10">
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
