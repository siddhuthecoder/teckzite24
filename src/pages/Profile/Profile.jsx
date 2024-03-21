import { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import EWCard from "../../components/Shared/EWCard";

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
      <div className="w-full min-h-screen pt-28 container mx-auto grid grid-cols-12 gap-4">
        <div className="col-span-3 max-lg:col-span-12 h-[fit-content] flex justify-center">
          {userData.img && userData.img !== "" ? (
            <img
              src={userData.img}
              alt={userData.firstName}
              className="object-contain w-[200px] h-[200px] rounded-full"
            />
          ) : (
            <div className="w-[200px] h-[200px] rounded-full bg-gradient flex items-center justify-center text-[90px]">
              {userData.firstName.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="col-span-3 max-lg:col-span-12 max-lg-text-center max-lg:text-center">
          <h1 className="mb-[-5px] max-lg:mb-0 text-[2.5rem] max-lg:text-3xl">
            {userData.tzkid.toUpperCase()}
          </h1>
          <h1 className="max-lg:text-center text-xl capitalize mb-1">
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
          </h1>
        </div>
        {userData.regEvents && userData.regEvents.length !== 0 && (
          <>
            <h1 className="col-span-12 text-2xl text-center font-semibold mt-10">
              Registered Events
            </h1>
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
    </>
  );
};

export default Profile;
