// import { useState } from "react";

// function MainForm({ refsEducationalForm }) {

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const educationDataArray = refsEducationalForm.map((form) => {
//       const obj = {};
//       let formData = new FormData(form.ref.current);
//       formData.forEach((value, key) => {
//         obj[key] = value;
//       });
//       return obj;
//     });

//     console.log("Main Form is submitted");
//     console.log("Data:", data);
//     console.log("Education Data:", educationDataArray);
//   };

//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({ ...data, [name]: value });
//   };

//   return (
//     <div className="w-[500px]">
//       <form
//         id="main-form"
//         onSubmit={handleSubmit}
//         className="p-6 bg-white rounded shadow-md"
//       >
//         <div className="mb-4">
//           <label
//             htmlFor="fname"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             First Name:
//           </label>
//           <input
//             type="text"
//             name="firstName"
//             value={data.firstName}
//             onChange={handleChange}
//             className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
//           />

//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="lname"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Last Name:
//           </label>
//           <input
//             type="text"
//             name="lastName"
//             value={data.lastName}
//             onChange={handleChange}
//             className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Email:
//           </label>
//           <input
//             type="text"
//             name="email"
//             value={data.email}
//             onChange={handleChange}
//             className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
//           />
//         </div>
//         <div>
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default MainForm;

import React, { useState } from "react";

function MainForm({ refsEducationalForm }) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [validation, setValidation] = useState({
    firstName: false,
    lastName: false,
    email: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setValidation({ ...validation, [name]: value !== "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate MainForm fields
    const isMainFormValid = Object.values(validation).every(Boolean);

    const isEducationalFormsValid = refsEducationalForm.every((form) => {
      let formData = new FormData(form.ref.current);

      const [...values] = formData.values();

      return values.every((value) => value.trim().length);

      // console.log(formData.entries());
      // const fields = Object.entries(form.ref.current);
      // console.log(fields);

      // // Exclude the hidden submit button from validation
      // const validFields = fields.filter((field) => field !== "submit");

      // return validFields.every(
      //   (field) => form.ref.current.elements[field].value !== ""
      // );
    });

    console.log(isMainFormValid, isEducationalFormsValid);

    if (isMainFormValid && isEducationalFormsValid) {
      const educationDataArray = refsEducationalForm.map((form) => {
        const obj = {};

        let formData = new FormData(form.ref.current);
        console.log(formData.entries);

        formData.forEach((value, key) => {
          obj[key] = value;
        });
        return obj;
      });
      console.log("Education Data:", educationDataArray);

      // ... Your existing form submission logic ..

      setData({
        firstName: "",
        lastName: "",
        email: "",
      });
      setValidation({
        firstName: false,
        lastName: false,
        email: false,
      });

      refsEducationalForm.forEach((form) => {
        console.log(form.ref.current);
        form.ref.current.reset(); // Reset each EducationalForm
      });
    } else {
      // Display validation errors or alert
      // ... You can display errors, show alert messages, etc.
      console.log("Form validation failed");
    }
  };

  return (
    <div className="w-[500px]">
      <form
        id="main-form"
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="fname"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name:
          </label>
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
          />
          {validation.firstName === false && (
            <span className="text-red-500">First name is required</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="lname"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last Name:
          </label>
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
          />
          {validation.lastName === false && (
            <span className="text-red-500">Last name is required</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
          />
          {validation.email === false && (
            <span className="text-red-500">Email is required</span>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default MainForm;
