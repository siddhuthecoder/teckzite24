
import t1 from "../../assets/img/table/t1.svg";
import t2 from "../../assets/img/table/t2.svg";
import t3 from "../../assets/img/table/t3.svg";
import t4 from "../../assets/img/table/t4.svg";
import t5 from "../../assets/img/table/t5.svg";
import t6 from "../../assets/img/table/t6.svg";
import t7 from "../../assets/img/table/t7.svg";
import t9 from "../../assets/img/table/t9.svg";



import '../../css/coreteam.css';
import { CoreTeam } from "../../constants/index.js";

const Table = () => {
  
 

  // Render table rows
  const tableRows = CoreTeam.map((user, index) => (
    <div
      key={user.role}
      className={`w-full mt-[40px] relative flex item-center justify-center`}
    >
         <div className="w-[97%] py-[20px] h-[20px] flex items-center justify-around">
        <div className="w-[30px] mx-auto text-center">{index + 1}</div>
        <div className="w-[240px] mx-auto text-center">{user.name}</div>
        <div className="w-[300px] mx-auto text-center">{user.role}</div>
        <div className="w-[300px] mx-auto text-center">{user.id}</div>
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
              <div className="w-[300px] mx-auto text-center">Role</div>
              <div className="w-[300px] mx-auto text-center">ID</div>
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
