// import React from "react";
// import s1 from "../../assets/img/s1.svg";
// import s2 from "../../assets/img/s2.svg";
// import s3 from "../../assets/img/s3.svg";
// import s4 from "../../assets/img/s4.svg";
// import s5 from "../../assets/img/s5.svg";
// import s6 from "../../assets/img/s6.svg";
// import s7 from "../../assets/img/s7.svg";
// import s8 from "../../assets/img/s8.svg";
// import { useNavigate } from "react-router-dom";

// //new card
// const EWCard = ({ img, id }) => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <div className="w-full mt-24 flex items-center justify-center">
//         <div
//           className="w-[250px] h-[360px] flex justify-center  relative"
//           onClick={() => navigate(`/eventdetails/${id}`)}
//         >
//           <img src={s1} alt="" className="absolute left-[-20%] top-[-20%]" />
//           <img src={s2} alt="" className="absolute right-[-20%] top-[-20%]" />
//           <img src={s3} alt="" className="absolute top-[27.55%] left-[-20%] " />
//           <img
//             src={s4}
//             alt=""
//             className="absolute top-[27.55%] right-[-23%] "
//           />
//           <img
//             src={s5}
//             alt=""
//             className="absolute bottom-[0%] left-[23%] scale-[1.3] "
//           />
//           <img
//             src={s6}
//             alt=""
//             className="absolute bottom-[0%] left-[28.4%]  "
//           />
//           <img
//             src={s7}
//             alt=""
//             className="absolute bottom-[-14%] left-[17%] scale-[1.3] "
//           />
//           <img
//             src={s8}
//             alt=""
//             className="absolute bottom-[-14%] right-[0%] scale-[1.3] "
//           />
//           <img
//             src={s8}
//             alt=""
//             className="absolute bottom-[-14%] left-[0%] scale-[1.3] "
//             style={{ transform: "rotateY(180)" }}
//           />
//           <div
//             className="w-[8px] h-[118px] bg-[#A301B1] border-[1px] border-[#F8A6FF] absolute left-[3%] top-[40%]"
//             style={{ boxShadow: " 0px 0px 50px 3px rgba(163, 1, 177, 0.38)  " }}
//           ></div>
//           <div
//             className="w-[8px] h-[118px] bg-[#A301B1] border-[1px] border-[#F8A6FF] absolute right-[3%] top-[40%]"
//             style={{ boxShadow: " 0px 0px 50px 3px rgba(163, 1, 177, 0.38)  " }}
//           ></div>
//           <div
//             className="w-[67px] h-[4px] bg-[#C8016D]   absolute bottom-[-5%] left-[21%] "
//             style={{ boxShadow: " 0px 0px 50px 3px rgba(163, 1, 177, 0.38)  " }}
//           ></div>
//           <div
//             className="w-[67px] h-[4px] bg-[#C8016D]  absolute bottom-[-5%] right-[21%] "
//             style={{ boxShadow: " 0px 0px 50px 3px rgba(163, 1, 177, 0.38)  " }}
//           ></div>
//           <div
//             className="w-[40px] h-[4px] bg-[#C8016D]  absolute bottom-[0%] left-[5%] "
//             style={{
//               boxShadow: " 0px 0px 50px 3px rgba(163, 1, 177, 0.38)  ",
//               transform: "rotate(45deg)",
//             }}
//           ></div>
//           <div
//             className="w-[40px] h-[4px] bg-[#C8016D]  absolute bottom-[0%] right-[5%] "
//             style={{
//               boxShadow: " 0px 0px 50px 3px rgba(163, 1, 177, 0.38)  ",
//               transform: "rotate(-45deg)",
//             }}
//           ></div>
//           <div
//             className="w-[40px] h-[4px] bg-[#C8016D]  absolute bottom-[10%] left-[-5%] "
//             style={{
//               boxShadow: " 0px 0px 50px 3px rgba(163, 1, 177, 0.38)  ",
//               transform: "rotate(70deg)",
//             }}
//           ></div>
//           <div
//             className="w-[40px] h-[4px] bg-[#C8016D]  absolute bottom-[10%] right-[-5%] "
//             style={{
//               boxShadow: " 0px 0px 50px 3px rgba(163, 1, 177, 0.38)  ",
//               transform: "rotate(-70deg)",
//             }}
//           ></div>
//           <div className="w-[200px] h-[270px] ">
//             <img src={img} alt="" className="w-[200px] h-[270px]" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

/* Rectangle 23 */
import React from "react";
import s1 from "../../assets/img/s1.svg";
import s2 from "../../assets/img/s2.svg";
import s3 from "../../assets/img/s3.svg";
import s4 from "../../assets/img/s4.svg";
import s5 from "../../assets/img/s5.svg";
import { useNavigate } from "react-router-dom";

//new card
const EWCard = ({ img, id, name }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[230px] h-[336px] flex justify-center mt-10  relative">
        <img src={s1} alt="" className="absolute left-[-20%] top-[-20%]" />
        <img src={s2} alt="" className="absolute right-[-20%] top-[-20%]" />
        <img src={s3} alt="" className="absolute top-[26.75%] left-[-18%] " />
        <img src={s4} alt="" className="absolute top-[26.75%] right-[-22%] " />
        <img
          src={s5}
          alt=""
          className="absolute bottom-0 left-[-6px] scale-x-[1.3] scale-y-[1.3]"
        />
        <div
          className="w-[8px] h-[118px] bg-[#A301B1] border-[1px] border-[#F8A6FF] absolute left-[6%] top-[40%]"
          style={{ boxShadow: " 0px 0px 50px 3px rgba(163, 1, 177, 0.38)  " }}
        ></div>
        <div
          className="w-[8px] h-[118px] bg-[#A301B1] border-[1px] border-[#F8A6FF] absolute right-[6%] top-[40%]"
          style={{ boxShadow: " 0px 0px 50px 3px rgba(163, 1, 177, 0.38)  " }}
        ></div>
        <div className="w-[167px] h-[230px] ">
          <img src={img} alt="" className="w-[200px] h-[230px]" />
        </div>
        <div className="absolute bottom-[100px] z-20 h-[100px] w-[80%] bg-[rgba(224,224,224,0.1)] backdrop-blur-md flex justify-center items-center flex-col">
          <h1 className="text-xl font-semibold text-black mb-1">{name}</h1>
          <button
            className="px-4 py-1 text-sm rounded bg-gradient text-white"
            onClick={() => navigate(`/eventdetails/${id}`)}
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default EWCard;
/* Rectangle 23 */
