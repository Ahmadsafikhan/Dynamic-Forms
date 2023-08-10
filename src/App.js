import React, { useState } from "react";
import MainForm from "./components/MainForm";
import EducationalForm from "./components/EducationalForm";
import Header from "./components/Header";

function App() {
  const [educationalForms, setEducationalForms] = useState([]);

  const [refsEducationalForm, setRefsEducationalForm] = useState([]);

  // const updateEducationDataArray = (educationData) => {
  //   console.log("I am updating Education Array", educationData);
  //   // Update your education data array logic
  // };
  const handleAddEducationalForm = () => {
    const newForm = { key: Date.now() };
    setEducationalForms([...educationalForms, newForm]);
  };

  const onSubmitHandlesUpdater = (onSubmitHandle) => {
    setRefsEducationalForm([...refsEducationalForm, onSubmitHandle]);
  };

  const handleRemoveEducationalForm = (key) => {
    console.log(key);
    const updatedForms = educationalForms.filter(
      (formData) => formData.key !== key
    );
    console.log(updatedForms);
    setEducationalForms(updatedForms);
  };

  const handleRemoveRefForm = (key) => {
    console.log(key);
    const updatedRefs = refsEducationalForm.filter(
      (formData) => formData.id !== key
    );
    console.log(updatedRefs);
    setRefsEducationalForm(updatedRefs);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center flex-col">
      <Header />
      <div>
        <MainForm refsEducationalForm={refsEducationalForm} />
      </div>
      {educationalForms.map((formData) => (
        <div key={formData.key} className="mt-4">
          <EducationalForm
            formId={formData.key}
            onRemove={handleRemoveEducationalForm}
            handleRemoveRefForm={handleRemoveRefForm}
            // updateEducationDataArray={updateEducationDataArray}
            onSubmitHandlesUpdater={onSubmitHandlesUpdater} // Use the addRef function from the custom hook
          />
        </div>
      ))}
      <button
        onClick={handleAddEducationalForm}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block"
      >
        Add Educational Form
      </button>
    </div>
  );
}

export default App;
