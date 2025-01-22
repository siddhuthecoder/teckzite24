// import React from 'react'
// import Header from '../../components/Header/Header';
// import Teamcard from "../../assets/img/Teamcard.webp";
// import Robo from "../../assets/img/Robo.webp";
// const Teamcore = () => {
//   const pre = [
//     {  name: "Sribabu Mandraju", position: "President" },
//   ];
//   const vicepre=[
//     {name: "Sribababu", position:"Vicepresident"},
//     {name: "Sribababu", position:"Vicepresident"},
//     {name: "Sribababu", position:"Vicepresident"}
//   ]
//   const coremem=[
//     {name:"Sribabu Mandraju",position:"Coremember"},
//     {name:"Sribabu Mandraju",position:"Coremember"},
//     {name:"Sribabu Mandraju",position:"Coremember"},
//     {name:"Sribabu Mandraju",position:"Coremember"},
//     {name:"Sribabu Mandraju",position:"Coremember"},
//     {name:"Sribabu Mandraju",position:"Coremember"}
//   ]
//   return (
//    <div   style={{
//     backgroundImage:
//       "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('/assets/cbg.webp')",
//     backgroundAttachment: "fixed",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     minHeight: "100vh",
//   }}>
//    <Header />
//    <div className="flex flex-wrap justify-center items-center gap-4 py-[100px] flex-col">
//         {pre.map((member, index) => (
//           <div key={index} className="relative">
//             <img src={Teamcard} className="w-80 h-96" alt="Team Card" />
//             <img src={Robo} className="absolute w-52 h-52 top-16 left-16" alt="Robo" />
//             <p className="absolute  ml-[70px] bottom-6">{member.name}</p>
//             <p className="absolute bottom-1  ml-[70px] font-bold text-[black]">{member.position}</p>
//           </div>
//         ))}
//         <div className="flex justify-center items-center flex-wrap">
//         {vicepre.map((member,index) =>(
//           <div key={index} className="relative">
//             <img src={Teamcard} className="w-80 h-96" alt="Team Card" />
//             <img src={Robo} className="absolute w-52 h-52 top-16 left-16" alt="Robo" />
//             <p className="absolute  ml-[70px] bottom-6">{member.name}</p>
//             <p className="absolute bottom-1  ml-[70px] font-bold text-[black]">{member.position}</p>
//           </div>

//         ))}
//         </div>
//          <div className="flex justify-center items-center flex-wrap">
//          {coremem.map((member,index) =>(
//           <div key={index} className="relative">
//             <img src={Teamcard} className="w-80 h-96" alt="Team Card" />
//             <img src={Robo} className="absolute w-52 h-52 top-16 left-16" alt="Robo" />
//             <p className="absolute  ml-[70px] bottom-6">{member.name}</p>
//             <p className="absolute bottom-1  ml-[70px] font-bold text-[black]">{member.position}</p>
//           </div>
//          ))}
//          </div>


//       </div>
//    </div>
//   )
// }

// export default Teamcore;
import React from 'react';

const teamData = {
  facultyCore: [
    { id: 1, responsibility: 'Convenor', name: 'Dr. Jyothilal Nayak Bharothu' },
    { id: 2, responsibility: 'Co-Convenor', name: 'Mr. P.Shyam' },
    { id: 3, responsibility: 'Faculty Treasurer', name: 'Mr. V.Ramu' },
    { id: 4, responsibility: 'Marketing Lead', name: 'Dr. Deepthi Saaho, Dr. D.V. Venu Gopal' },
    { id: 5, responsibility: 'Events Lead', name: 'Mr. B. Madhusudhana Rao' },
    { id: 6, responsibility: 'Robotics Lead', name: 'Mr. Kallepalli Suresh' },
    { id: 7, responsibility: 'Stage & Infra Lead', name: 'Mr. Botsa Srinivasa Rao, Mr. K. Venkatappala Naidu' },
    { id: 8, responsibility: 'Hospitality Lead', name: 'Dr. O. Srihari, Mr. B. Laxmana Rao' },
    { id: 9, responsibility: 'Disciplinary Lead', name: 'Ms. Ch. Subba Lakshmi, Dr. Ch. S.R. Naveen Kumar' },
    { id: 10, responsibility: 'Game Stalls Management', name: 'Mr. Tummeda Siva Kumar Prudhviraj' },
    { id: 11, responsibility: 'Media & Publicity', name: 'Mr. B. Suresh Babu' },
    { id: 12, responsibility: 'Web Team Lead', name: 'Mr. Gummadidala Jayakrishna' },
    { id: 13, responsibility: 'IT Infra', name: 'Mr. R. Upendra' },
    { id: 14, responsibility: 'Guest Lectures, Workshops & Seminars', name: 'Mr. Krishna Kumar Singh, Mr. E. Seshu Kumar' },
    { id: 15, responsibility: 'Electrical Incharge', name: 'Mr. P. Krishna' },
    { id: 16, responsibility: 'Cultural Lead', name: 'Mr. K. Lakshmi Kanth, Ms. D. Srilakshmi' },
  ],
  studentCore: [
    { id: 1, responsibility: 'Overall Coordinator', name: 'T. Pranay Kumar', idCode: 'N190854' },
    { id: 2, responsibility: 'Student Treasurer', name: 'K. Mohana Rao', idCode: 'N191147' },
    { id: 3, responsibility: 'Events Manager', name: 'P. Sai Bhavani', idCode: 'N190660' },
    { id: 4, responsibility: 'Workshops Manager', name: 'S. Jashwanth', idCode: 'N190290' },
    { id: 5, responsibility: 'Design Manager', name: 'K. Chandu', idCode: 'N190463' },
    { id: 6, responsibility: 'Stalls Manager', name: 'K. Satish', idCode: 'N190254' },
    { id: 7, responsibility: 'Promotions Manager', name: 'M. Sravani', idCode: 'N191117' },
    { id: 8, responsibility: 'Hospitality Manager', name: 'A. Vasanthi', idCode: 'N190453' },
    { id: 9, responsibility: 'Marketing Manager', name: 'Y. Pujitha', idCode: 'N190299' },
    { id: 10, responsibility: 'Marketing Coordinator', name: 'K. V. Abhinash Kumar', idCode: 'N200202' },
    { id: 11, responsibility: 'Promotions Manager (Out-Campus)', name: 'K. Krishna Kireeti', idCode: 'N200026' },
    { id: 12, responsibility: 'Content Writing Manager', name: 'V. Mukesh', idCode: 'N200600' },
    { id: 13, responsibility: 'Infra Manager', name: 'M. Rajeswari', idCode: 'N190040' },
    { id: 14, responsibility: 'Project Expo Managers', name: 'G. Mohith Kumar, A. Dushwanth Reddy', idCode: 'N191089, N190707' },
    { id: 15, responsibility: 'Hospitality Coordinators', name: 'B. Hareesh, V. Suresh', idCode: 'N190066, N180555' },
    { id: 16, responsibility: 'Guest Talks Manager', name: 'M. Sravanthi', idCode: 'N190413' },
    { id: 17, responsibility: 'Web Team Manager', name: 'V. Yashwanth', idCode: 'N190966' },
    { id: 18, responsibility: 'Web Team Coordinator', name: 'Y. Siddardha', idCode: 'N200081' },
    { id: 19, responsibility: 'Social Media Manager', name: 'M. Shakunthala', idCode: 'N190684' },
    { id: 20, responsibility: 'Disciplinary Manager', name: 'B. Komali Sravya', idCode: 'N190163' },
    { id: 21, responsibility: 'Stage Manager', name: 'V. L. S. Prabhas', idCode: 'N191018' },
    { id: 22, responsibility: 'Stage Coordinator', name: 'D. Anand', idCode: 'N190237' },
    { id: 23, responsibility: 'Printing', name: 'N. Satish', idCode: 'N190354' },
    { id: 24, responsibility: 'Technical Assistance', name: 'Ch. Abhi Ram', idCode: 'N191080' },
    { id: 25, responsibility: 'Source Person', name: 'S. Bhaskar', idCode: 'N190923' },
    { id: 26, responsibility: 'Photography Manager', name: 'P. Ramu', idCode: 'N190823' },
    { id: 27, responsibility: 'Cultural Coordinators', name: 'G. Suryaveni, G. Pujitha, U. Vijaya Krishna', idCode: 'N190446, N190133, N200305' },
    { id: 28, responsibility: 'Open to all Events Manager', name: 'C. Lakshmi Naresh', idCode: 'N1906667' },
    { id: 29, responsibility: 'Open to all Events Coordinator', name: 'P. Balaji', idCode: 'N190868' },
  ],
};

const TeamTable = () => {
  return (
    <div>
      <h1>Teckzite'24 Core Team</h1>
      <h2>Faculty Core</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Responsibility</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {teamData.facultyCore.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.responsibility}</td>
              <td>{member.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Student Core</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Responsibility</th>
            <th>Name</th>
            <th>ID Code</th>
          </tr>
        </thead>
        <tbody>
          {teamData.studentCore.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.responsibility}</td>
              <td>{member.name}</td>
              <td>{member.idCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamTable;

