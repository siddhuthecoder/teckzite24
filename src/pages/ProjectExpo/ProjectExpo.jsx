import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { saveAs } from 'file-saver';
import { motion } from 'framer-motion';
const ProjectExpo = () => {
    const [page, setPage] = useState('home');
    const [teamLeadID, setTeamLeadID] = useState('');
    const [teamLeadMail, setTeamLeadMail] = useState('');

    const [teamLeadCollege, setTeamLeadCollege] = useState('');
    const [teamLeadPhone, setTeamLeadPhone] = useState('');
    const [teamLeadBranch, setTeamLeadBranch] = useState('');
    const [teamLeadName, setTeamLeadName] = useState('');
    const [teamMembers, setTeamMembers] = useState([{ id: '', name: '', branch: 'CSE', college: 'RGUKT Nuzvid', phone: '' }]);
    const [teamName, setTeamName] = useState('');
    const [problemStatement, setProblemStatement] = useState('1');
    const [file, setFile] = useState(null);
    const [showModal, setShowModal] = useState({ register: false, submit: false });
    const [submissionSuccess, setSubmissionSuccess] = useState(false);
    const modalVariants = {
        hidden: { opacity: 0},
        visible: { opacity: 1},
        exit: { opacity: 0, y: "-50%" },
    };
    const addMember = () => {
        if (teamMembers.length < 5) {
            setTeamMembers([...teamMembers, { id: '', name: '', branch: 'CSE', college: 'RGUKT Nuzvid', phone: '' }]);
        }
    };

    const handleMemberChange = (index, field, value) => {
        const updatedMembers = [...teamMembers];
        updatedMembers[index][field] = value;
        setTeamMembers(updatedMembers);
    };

    const validateTeckziteID = (id) => {
        return /^[A-Za-z0-9]{5,10}$/.test(id);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmitRegistration = (e) => {
        e.preventDefault();
    
        if (!validateTeckziteID(teamLeadID)) {
            alert('Invalid Team Lead Teckzite ID.');
            return;
        }
    
        for (const member of teamMembers) {
            if (!validateTeckziteID(member.id)) {
                alert(`Invalid Teckzite ID for team member: ${member.name || 'Unnamed Member'}`);
                return;
            }
        }
    
        // Construct registration data
        const registrationData = {
            teamLeadID,
            teamLeadName,
            teamLeadBranch,
            teamLeadCollege,
            teamLeadPhone,
            teamMembers,
        };
    
      
    
        setShowModal({ ...showModal, register: false });
        setPage('submission');
    };
    

    const handleSubmitProject = (e) => {
        e.preventDefault();

        if (!file || (file.type !== 'application/pdf' && !file.name.endsWith('.ppt'))) {
            alert('Please upload a valid PDF or PPT file.');
            return;
        }
    
        console.log('Project Submitted:', { teamName, problemStatement, file });
    
        // const csvData = `Team Name,Problem Statement,File Name\n${teamName},${problemStatement},${file.name}`;
        // const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        // saveAs(blob, 'project_submission.csv');
    
        setSubmissionSuccess(true);
        setShowModal({ ...showModal, submit: false });
    };

    const convertToCSV = (data) => {
        const headers = Object.keys(data).join(',');
        const values = Object.values(data)
            .map((item) => (Array.isArray(item) ? JSON.stringify(item) : item))
            .join(',');
        return `${headers}\n${values}`;
    };

    return (
        <>
            <Header />

            <div
                className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-6"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('/assets/cbg.webp')",
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {page === 'home' && (
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Teckzite Project Expo</h1>
                        <button
                            className="px-6 py-3 bg-[#12669A] text-white rounded-lg hover:bg-blue-600"
                            onClick={() => setPage('login')}
                        >
                            Login as Team Lead
                        </button>
                    </div>
                )}

                {page === 'login' && (
                    <div className="bg-white p-8 shadow-md rounded-md md:w-[400px]">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Team Lead Login</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                if (!validateEmail(teamLeadMail)) {
                                    alert('Invalid email format.');
                                    return;
                                }
                                setPage('projectExpo');
                            }}
                        >
                            <div className="mb-4">
                                <label className="block text-gray-600">Teckzite ID:</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black"
                                    required
                                    value={teamLeadID}
                                    onChange={(e) => setTeamLeadID(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-600">Email:</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black"
                                    required
                                    value={teamLeadMail}
                                    onChange={(e) => setTeamLeadMail(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#12669A] text-white py-2 rounded-lg hover:bg-blue-600"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                )}

                {page === 'projectExpo' && (
                    <div className="w-full my-[60px]">
                        <h1 className="text-3xl font-bold text-white my-2 text-center">Project Expo</h1>
                        <div className="flex gap-[30px] flex-col items-center">
                            <div className="eventdeta flex flex-col lg:flex-row gap-[20px] justify-center p-[20px] lg:p-0">
                                <div className="bg-[white] p-[15px] lg:w-[500px] rounded-lg">
                                    <h2 className="text-xl font-semibold text-black">Event Details</h2>
                                    <p className="text-black">
                                        Welcome to the Teckzite Project Expo! This event provides students a platform to showcase their innovative projects, collaborate with peers, and learn from industry experts. Top projects will be rewarded with exciting prizes.
                                    </p>
                                    <ul className="list-disc list-inside text-black mt-4">
                                        <li>Date: March 15, 2025</li>
                                        <li>Time: 9:00 AM to 5:00 PM</li>
                                        <li>Venue: RGUKT Nuzvid Campus, Main Auditorium</li>
                                        <li>Categories: Software, Hardware, Mechanical Innovations, Civil Structures, Chemical Processes</li>
                                    </ul>
                                </div>
                                <div className="bg-[white] p-[15px] lg:w-[500px] rounded-lg">
                                    <h2 className="text-xl font-semibold text-black">Rules and Regulations</h2>
                                    <ul className="list-disc list-inside text-black">
                                        <li>Each team must consist of 2-5 members.</li>
                                        <li>All participants must have valid Teckzite IDs for registration.</li>
                                        <li>Projects must align with the selected problem statement.</li>
                                        <li>The final project file (PDF or PPT) must be submitted before the deadline.</li>
                                        <li>Teams must present their projects during the allocated time slots.</li>
                                        <li>Judging criteria: Innovation, Feasibility, Presentation, and Impact.</li>
                                        <li>Any form of plagiarism will lead to disqualification.</li>
                                    </ul>
                                </div>
                            </div>
                            <button
                                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 w-[200px]"
                                onClick={() => setShowModal({ ...showModal, register: true })}
                            >
                                Register
                            </button>
                        </div>
                    </div>
                )}

{showModal.register && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-y-auto mt-4 p-[10px] md:p-0">
                    <div className="bg-white p-6 rounded-lg w-[600px] max-h-[70vh] overflow-y-auto">
                        <h2 className="text-2xl font-semibold mb-4">Team Registration</h2>
                        <form onSubmit={handleSubmitRegistration}>
                            <div className="mb-4">
                                <label className="block text-gray-600">Team Lead Teckzite ID:</label>
                                <input
                                    type="text"
                                    value={teamLeadID}
                                    onChange={(e) => setTeamLeadID(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-600">Team Lead Name:</label>
                                <input
                                    type="text"
                                    value={teamLeadName}
                                    onChange={(e) => setTeamLeadName(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                            <label className="block text-gray-600 mt-2">Team Lead Branch:</label>
                                    <select
                                        value={teamLeadBranch}
                                        onChange={(e) => setTeamLeadBranch(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black "
                                    >
                                        <option value="CSE" className='bg-white'>CSE</option>
                                        <option value="ECE" className='bg-white'>ECE</option>
                                        <option value="EEE" className='bg-white'>EEE</option>
                                        <option value="Mech" className='bg-white'>Mechanical</option>
                                        <option value="Civil" className='bg-white'>Civil</option>
                                        <option value="Chem" className='bg-white'>Chemical</option>
                                        <option value="MME" className='bg-white'>MME</option>
                                        <option value="PUC" className='bg-white'>PUC</option>
                                    </select>
                                    </div>
                                    <div className="mb-4">
                                    <label className="block text-gray-600 mt-2">Team Lead College:</label>
                                    <select
                                        value={teamLeadCollege}
                                        onChange={(e) => setTeamLeadCollege(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black "
                                    >
                                        <option value="RGUKT NUZVID" className='bg-white'>RGUKT NUZVID</option>
                                        <option value="RGUKT RKVALLEY" className='bg-white'>RGUKT RKVALLEY</option>
                                        <option value="RGUKT ONGOLE" className='bg-white'>RGUKT ONGOLE</option>
                                        <option value="RGUKT SRIKAKULAM" className='bg-white'>RGUKT SRIKAKULAM</option>
                                        <option value="OTHERS" className='bg-white'>OTHERS</option>
                                    
                                    </select>
                                    </div>
                                    <div className="mb-4">
                                <label className="block text-gray-600">Team Phone Number:</label>
                                <input
                                    type="text"
                                    value={teamLeadPhone}
                                    onChange={(e) => setTeamLeadPhone(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black"
                                    required
                                />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Team Members (2-5 Members):</h3>
                            {teamMembers.map((member, index) => (
                                <div key={index} className="mb-4">
                                    <label className="block text-gray-600">Teckzite ID:</label>
                                    <input
                                        type="text"
                                        value={member.id}
                                        onChange={(e) => handleMemberChange(index, 'id', e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black"
                                        required
                                    />
                                    <label className="block text-gray-600 mt-2">Name:</label>
                                    <input
                                        type="text"
                                        value={member.name}
                                        onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black"
                                        required
                                    />
                                    <label className="block text-gray-600 mt-2">Branch:</label>
                                    <select
                                        value={member.branch}
                                        onChange={(e) => handleMemberChange(index, 'branch', e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black "
                                    >
                                        <option value="CSE" className='bg-white'>CSE</option>
                                        <option value="ECE" className='bg-white'>ECE</option>
                                        <option value="EEE" className='bg-white'>EEE</option>
                                        <option value="Mech" className='bg-white'>Mechanical</option>
                                        <option value="Civil" className='bg-white'>Civil</option>
                                        <option value="Chem" className='bg-white'>Chemical</option>
                                        <option value="MME" className='bg-white'>MME</option>
                                        <option value="PUC" className='bg-white'>PUC</option>
                                    </select>
                                    <label className="block text-gray-600 mt-2">College:</label>
                                    <select
                                        value={member.college}
                                        onChange={(e) => handleMemberChange(index, 'collge', e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black "
                                    >
                                        <option value="RGUKT NUZVID" className='bg-white'>RGUKT NUZVID</option>
                                        <option value="RGUKT RKVALLEY" className='bg-white'>RGUKT RKVALLEY</option>
                                        <option value="RGUKT ONGOLE" className='bg-white'>RGUKT ONGOLE</option>
                                        <option value="RGUKT SRIKAKULAM" className='bg-white'>RGUKT SRIKAKULAM</option>
                                        <option value="OTHERS" className='bg-white'>OTHERS</option>
                                    
                                    </select>
                                    <label className="block text-gray-600 mt-2">Phone Number:</label>
                                    <input
                                        type="text"
                                        value={member.phone}
                                        onChange={(e) => handleMemberChange(index, 'phone', e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black"
                                        required
                                    />
                                </div>
                            ))}
                            {teamMembers.length < 5 && (
                                <button
                                    type="button"
                                    onClick={addMember}
                                    className="px-4 py-2 bg-[#12669A] text-white rounded-lg hover:bg-blue-600"
                                >
                                    Add Member
                                </button>
                            )}
                            <div className="flex justify-between mt-4">
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                                >
                                    Submit
                                </button>
                                <button
                                    onClick={() => setShowModal({ ...showModal, register: false })}
                                    className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
{showModal.submit && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-[20px] md:p-0 mt-[25px] md:mt-0">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h2 className="text-2xl font-semibold mb-4">Project Submission</h2>
                        <form onSubmit={handleSubmitProject}>
                            <div className="mb-4">
                                <label className="block text-gray-600">Team Name:</label>
                                <input
                                    type="text"
                                    value={teamName}
                                    onChange={(e) => setTeamName(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-600">Problem Statement No:</label>
                                <select
                                    value={problemStatement}
                                    onChange={(e) => setProblemStatement(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black"
                                    required
                                >
                                    <option value="1" className='bg-white'>Problem Statement 1</option>
                                    <option value="2" className='bg-white'>Problem Statement 2</option>
                                    <option value="3" className='bg-white'>Problem Statement 3</option>
                                    <option value="4" className='bg-white'>Problem Statement 4</option>
                                    <option value="5" className='bg-white'>Problem Statement 5</option>
                                    <option value="6" className='bg-white'>Problem Statement 6</option>
                                    <option value="7" className='bg-white'>Problem Statement 7</option>
                                    <option value="8" className='bg-white'>Problem Statement 8</option>
                                    <option value="9" className='bg-white'>Problem Statement 9</option>
                                    <option value="10" className='bg-white'>Problem Statement 10</option>
                                    <option value="10" className='bg-white'>Problem Statement 10</option>

   
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-600">Upload File:</label>
                                <input
                                    type="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    accept=".pdf,.ppt"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black"
                                    required
                                />
                            </div>
                            <div className="flex justify-between mt-4">
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                                >
                                    Submit
                                </button>
                                <button
                                    onClick={() => setShowModal({ ...showModal, submit: false })}
                                    className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
             {page === 'submission' && (
    <div className="text-center">
        {!submissionSuccess ? (
            <>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Project Submission</h2>
                <button
                    className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                    onClick={() => setShowModal({ ...showModal, submit: true })}
                >
                    Submit Your Project
                </button>
            </>
        ) : (
            <div className='p-[20px] md:p-0'>
            <motion.div
            className="bg-[white] p-5 rounded-lg"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <h2 id="modal-title" className="text-2xl font-semibold text-green-700 mb-4">
                Project Submitted Successfully!
            </h2>
            <p id="modal-description" className="text-black mb-4">
                Thank you for your submission.
            </p>
            <button
                className="px-6 py-3 bg-[#12669A] text-white rounded-lg hover:bg-blue-600"
                onClick={() => {
                    const csvContent = 'Team Name,Problem Statement,File Name\nSample Team,1,sample.pdf';
                    saveAs(new Blob([csvContent], { type: 'text/csv' }), 'project_submission.csv');
                }}
            >
                Download Submission Details
            </button>
        </motion.div>
        </div>
        
        )}
    </div>
)}

        
        </div>
       
  
           
        </>
    );
};

export default ProjectExpo;
