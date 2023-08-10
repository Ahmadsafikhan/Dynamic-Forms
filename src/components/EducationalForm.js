// import React, { useEffect, useRef, useState } from "react";

// function EducationalForm({
//   onRemove,
//   updateEducationDataArray,
//   onSubmitHandlesUpdater,
//   handleRemoveRefForm,
//  formId,
// }) {
//   const [educationData, setEducationData] = useState({
//     id: Date.now(),
//     schoolName: "",
//     degree: "",
//     graduationYear: "",
//   });
  

//   const ref = useRef();

//   const handleEducationChange = (e) => {
//     const { name, value } = e.target;
//     setEducationData({ ...educationData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Educational Form is submitted");
//     updateEducationDataArray(educationData);
//   };

//   const handleRemoveForm = () => {
//     onRemove(formId);
//     handleRemoveRefForm(educationData.id);
//   };

//   useEffect(() => {
//     onSubmitHandlesUpdater({ ref, id: educationData.id });

//   }, []);

//   return (
//     <div className="w-[500px]">
//       <form
//         ref={ref}
//         onSubmit={handleSubmit}
//         className=" p-6 bg-white rounded shadow-md"
//       >
//         <div>
//           <label
//             htmlFor="schoolName"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             School Name:
//           </label>
//           <input
//             type="text"
//             name="schoolName"
//             value={educationData.schoolName}
//             onChange={handleEducationChange}
//             className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="degree"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Degree:
//           </label>
//           <input
//             type="text"
//             name="degree"
//             value={educationData.degree}
//             onChange={handleEducationChange}
//             className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="graduationYear"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Graduation Year:
//           </label>
//           <input
//             type="text"
//             name="graduationYear"
//             value={educationData.graduationYear}
//             onChange={handleEducationChange}
//             className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
//           />
//         </div>
//         <button
//           type="button"
//           onClick={handleRemoveForm}
//           className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Remove
//         </button>
//       </form>
//     </div>
//   );
// }

// export default EducationalForm;



import React, { useEffect, useRef, useState } from "react";

function EducationalForm({
  onRemove,
  updateEducationDataArray,
  onSubmitHandlesUpdater,
  handleRemoveRefForm,
  formId,
}) {
  const [educationData, setEducationData] = useState({
    id: Date.now(),
    schoolName: "",
    degree: "",
    graduationYear: "",
  });

  const [validation, setValidation] = useState({
    schoolName: false,
    degree: false,
    graduationYear: false,
  });

  const ref = useRef();

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setEducationData({ ...educationData, [name]: value });
    setValidation({ ...validation, [name]: value !== "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate EducationalForm fields
    const isEducationalFormValid = Object.values(validation).every(Boolean);

    if (isEducationalFormValid) {
      // Proceed with updating education data
      updateEducationDataArray(educationData);
    } else {
      // Display validation errors or alert
      // ... Display errors or alert ...
      console.log("EducationalForm validation failed");
    }
  };

  const handleRemoveForm = () => {
    onRemove(formId);
    handleRemoveRefForm(educationData.id);
  };

  useEffect(() => {
    onSubmitHandlesUpdater({ ref, id: educationData.id });
  }, []);

  return (
    <div className="w-[500px]">
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className=" p-6 bg-white rounded shadow-md"
      >
        <div>
          <label
            htmlFor="schoolName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            School Name:
          </label>
          <input
            type="text"
            name="schoolName"
            value={educationData.schoolName}
            onChange={handleEducationChange}
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
          {validation.schoolName === false && (
            <span className="text-red-500">School name is required</span>
          )}
        </div>
        <div>
          <label
            htmlFor="degree"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Degree:
          </label>
          <input
            type="text"
            name="degree"
            value={educationData.degree}
            onChange={handleEducationChange}
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
          {validation.degree === false && (
            <span className="text-red-500">Degree is required</span>
          )}
        </div>
        <div>
          <label
            htmlFor="graduationYear"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Graduation Year:
          </label>
          <input
            type="text"
            name="graduationYear"
            value={educationData.graduationYear}
            onChange={handleEducationChange}
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
          {validation.graduationYear === false && (
            <span className="text-red-500">Graduation year is required</span>
          )}
        </div>
        <button
          type="button"
          onClick={handleRemoveForm}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Remove
        </button>
      </form>
    </div>
  );
}

export default EducationalForm;
