import React, { useState } from "react";
import { toast } from "react-hot-toast";

const RegistrationModal = ({ onClose, userData }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [fileUploading, setFileUploading] = useState(false);
  const [projectData, setProjectData] = useState({
    projectName: "",
    abstract: "",
    file: "",
    problemStatementNumber: "",
  });
  const [teamMembers, setTeamMembers] = useState([
  ]);
  const [newMember, setNewMember] = useState({
    tzkid: "",
    name: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (e) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      setFileUploading(true);
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/uploads/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload file. Please try again.");
      }

      const data = await response.json();
      // toast.success(data.message || "File uploaded successfully!");
      setProjectData((prev) => ({ ...prev, file: data.webViewLink }));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setFileUploading(false);
    }
  };

  const handleAddMember = () => {
    if (teamMembers.length >= 5) {
      toast.error("Maximum 5 team members allowed");
      return;
    }
    if (!newMember.tzkid || !newMember.name || !newMember.phoneNumber) {
      toast.error("Please fill in all member details");
      return;
    }
    if (teamMembers.some((member) => member.tzkid === newMember.tzkid)) {
      toast.error("Member already added");
      return;
    }
    setTeamMembers((prev) => [...prev, newMember]);
    setNewMember({ tzkid: "", name: "", phoneNumber: "" });
  };

  const handleRemoveMember = (tzkid) => {
    if (teamMembers.length <= 2) {
      toast.error("Minimum 2 team members required");
      return;
    }
    setTeamMembers((prev) => prev.filter((member) => member.tzkid !== tzkid));
  };

  const handleSubmit = async () => {
    if (teamMembers.length < 2) {
      toast.error("Minimum 2 team members required");
      return;
    }
    if (
      !projectData.projectName ||
      !projectData.abstract ||
      !projectData.file ||
      !projectData.problemStatementNumber
    ) {
      toast.error("Please fill in all project details");
      setStep(1);
      return;
    }

    const payload = {
      projectName: projectData.projectName,
      abstract: projectData.abstract,
      file: projectData.file,
      problemStatementNumber: Number(projectData.problemStatementNumber),
      teamMembers: teamMembers.filter(
        (member) => member.tzkid && member.name && member.phoneNumber
      ),
    };

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/projectExpo`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || "Failed to register project. Please try again."
        );
      }

      const data = await response.json();
      toast.success(data.message || "Project registered successfully!");
      onClose();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const canProceedToStep2 =
    projectData.projectName &&
    projectData.abstract &&
    projectData.file &&
    projectData.problemStatementNumber;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-8 max-w-md w-full z-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Hackathon Registration</h2>
        {step === 1 ? (
          <>
            <input
              type="text"
              name="projectName"
              value={projectData.projectName}
              onChange={handleInputChange}
              placeholder="Project Name"
              className="w-full p-2 mb-4 bg-white bg-opacity-20 rounded text-white"
            />
            <textarea
              name="abstract"
              value={projectData.abstract}
              onChange={handleInputChange}
              placeholder="Abstract"
              className="w-full p-2 mb-4 bg-white bg-opacity-20 rounded text-white"
              rows={4}
            />
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 mb-4 bg-white bg-opacity-20 rounded text-white"
              disabled={fileUploading}
            />
            {fileUploading && <p className="text-orange-600 mb-2">Uploading file...</p>}
            <input
              type="number"
              name="problemStatementNumber"
              value={projectData.problemStatementNumber}
              onChange={handleInputChange}
              placeholder="Problem Statement Number (1-6)"
              className="w-full p-2 mb-4 bg-white bg-opacity-20 rounded text-white"
              min="1"
              max="6"
            />
            <button
              onClick={() =>
                canProceedToStep2
                  ? setStep(2)
                  : toast.error("Please fill in all project details")
              }
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Next
            </button>
          </>
        ) : (
          <>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-white">
                Team Members ({teamMembers.length}/5)
              </h3>
              {teamMembers.map((member) => (
                <div
                  key={member.tzkid}
                  className="flex justify-between items-center mb-2"
                >
                  <span className="text-white">
                    {member.name} ({member.tzkid})
                  </span>
                  {member.tzkid !== userData.tzkid && (
                    <button
                      onClick={() => handleRemoveMember(member.tzkid)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col mb-4">
              <input
                type="text"
                value={newMember.tzkid}
                onChange={(e) =>
                  setNewMember({ ...newMember, tzkid: e.target.value })
                }
                placeholder="Teckzite ID"
                className="p-2 mb-2 bg-white bg-opacity-20 rounded text-white"
              />
              <input
                type="text"
                value={newMember.name}
                onChange={(e) =>
                  setNewMember({ ...newMember, name: e.target.value })
                }
                placeholder="Name"
                className="p-2 mb-2 bg-white bg-opacity-20 rounded text-white"
              />
              <input
                type="text"
                value={newMember.phoneNumber}
                onChange={(e) =>
                  setNewMember({ ...newMember, phoneNumber: e.target.value })
                }
                placeholder="Phone Number"
                className="p-2 mb-2 bg-white bg-opacity-20 rounded text-white"
              />
              <button
                onClick={handleAddMember}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add Member
              </button>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                disabled={loading}
              >
                {loading ? "Registering..." : "Submit"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;
