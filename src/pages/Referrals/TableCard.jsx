import React from "react";
import t1 from "../../assets/img/table/t1.svg";
import t2 from "../../assets/img/table/t2.svg";
import t3 from "../../assets/img/table/t3.svg";
import t4 from "../../assets/img/table/t4.svg";
import t5 from "../../assets/img/table/t5.svg";
import t6 from "../../assets/img/table/t6.svg";
import t7 from "../../assets/img/table/t7.svg";
import t9 from "../../assets/img/table/t9.svg";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineWifiOff } from "react-icons/md";
import { fetchRefs } from "../../store/refSlice";

const Table = () => {
  const refError = useSelector((state) => state.ref.error);
  const refStatus = useSelector((state) => state.ref.status);
  const refData = useSelector((state) => state.ref.data);
  const dispatch = useDispatch();

  if (refStatus !== "loaded") {
    return (
      <div className="w-full h-screen flex items-center justify-center gap-3 flex-col">
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
        <h1 className="text-lg font-semibold">Loading.....</h1>
      </div>
    );
  }

  if (refError) {
    return (
      <div className="w-full h-screen flex items-center justify-center gap-3 flex-col">
        <MdOutlineWifiOff size={32} />
        <h1 className="text-xl font-semibold">
          Error Occurred while fetching referrals
        </h1>
        <button
          onClick={() => {
            dispatch(fetchRefs());
          }}
          className="px-5 py-2 border border-gray-500 bg-black hover:bg-white hover:text-black rounded text-white"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Create a copy of refData to avoid modifying the original array
  const sortedRefData = [...refData]
    .filter((user) => user.referralsCount > 0)
    .sort((a, b) => b.referralsCount - a.referralsCount);

  // Render table rows
  const tableRows = sortedRefData.map((user, index) => (
    <div
      key={user.email}
      className={`w-full mt-[40px] relative flex item-center justify-center`}
    >
      <div className="w-[97%] py-[20px] h-[20px] flex items-center justify-around">
        <div className="w-[30px] mx-auto text-center">{index + 1}</div>
        <div className="w-[240px] mx-auto text-center">{user.firstName}</div>
        <div className="w-[300px] mx-auto text-center">{user.email}</div>
        <div className="w-[300px] mx-auto text-center">
          {user.referralsCount}
        </div>
      </div>
      <img
        src={t1}
        alt=""
        className="absolute scale-y-[1.2] pointer-events-none"
      />
      <img
        src={t2}
        alt=""
        className="absolute top-[-120%] left-[17%] scale-y-[1.1] scale-x-[0.84]"
      />
      <img
        src={t3}
        alt=""
        className="absolute top-[-7px] left-[3px] scale-y-[1.1] scale-x-[0.84]"
      />
      <img
        src={t4}
        alt=""
        className="absolute bottom-[-26px] left-[56.5%] scale-y-[1.1] scale-x-[0.84]"
      />
    </div>
  ));

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[97%] max-w-[920px] min-w-[300px] pb-10 overflow-x-auto flex flex-col">
        <div className="w-[100%] min-w-[900px] flex flex-col" style={{}}>
          <div className="w-full my-[20px] h-[60px] flex items-center relative">
            <div className="w-[97%] py-[20px] h-[20px] flex items-center justify-around mx-auto">
              <div className="w-[30px] mx-auto text-center">Sno</div>
              <div className="w-[240px] mx-auto text-center">Name</div>
              <div className="w-[300px] mx-auto text-center">Email</div>
              <div className="w-[300px] mx-auto text-center">Referrals</div>
            </div>
            <img
              src={t5}
              alt=""
              className="absolute top-[-15px] scale-y-[0.7]"
            />
            <img
              src={t6}
              alt=""
              className="absolute bottom-[5px] left-[10%] scale-x-[0.7]"
            />
            <img
              src={t7}
              alt=""
              className="absolute bottom-[-3px] left-[9.365%] scale-x-[0.705]"
            />
            <img
              src={t9}
              alt=""
              className="absolute scale-[0.8] right-[30%] top-[10px]"
            />
            <img
              src={t7}
              alt=""
              className="absolute top-[-6px] right-[30%] scale-x-[0.799]"
            />
          </div>
          {tableRows}
        </div>
      </div>
    </div>
  );
};

export default Table;
