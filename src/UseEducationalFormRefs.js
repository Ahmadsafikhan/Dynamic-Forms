import { useState } from "react";

export function useEducationalFormRefs() {
  const [refsEducationalForm, setRefsEducationalForm] = useState([]);

  const addRef = () => {
    const newRef = { ref: null, id: Date.now() }; // Create a reference object
    setRefsEducationalForm([...refsEducationalForm, newRef]);
    return newRef; // Return the reference object
  };

  const removeRef = (id) => {
    setRefsEducationalForm((prevRefs) =>
      prevRefs.filter((ref) => ref.id !== id)
    );
  };

  return { refsEducationalForm, addRef, removeRef };
}
export default useEducationalFormRefs