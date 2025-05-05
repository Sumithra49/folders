// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [fields, setFields] = useState([]);
//   const [json, setJson] = useState("[]");

//   // This effect will run every time JSON changes
//   useEffect(() => {
//     try {
//       const parsed = JSON.parse(json);
//       if (Array.isArray(parsed)) {
//         setFields(parsed);
//       } else {
//         alert("Invalid JSON format. Must be an array.");
//       }
//     } catch {
//       alert("Invalid JSON");
//     }
//   }, [json]);

//   // Handle form field changes
//   const updateField = (id, value) => {
//     const updatedFields = fields.map((f) => (f.id === id ? { ...f, value } : f));
//     setFields(updatedFields);
//     updateJson(updatedFields); // Update JSON when fields change
//   };

//   // Add a new field (with a random ID) to the form
//   const addField = (type) => {
//     const newField = { id: Date.now(), type, value: type === "checkbox" ? false : "" };
//     const updatedFields = [...fields, newField];
//     setFields(updatedFields);
//     updateJson(updatedFields);
//   };

//   // Delete a form field
//   const deleteField = (id) => {
//     const updatedFields = fields.filter((f) => f.id !== id);
//     setFields(updatedFields);
//     updateJson(updatedFields);
//   };

//   // Update JSON state from the form fields
//   const updateJson = (newFields) => {
//     setJson(JSON.stringify(newFields, null, 2)); // JSON representation of fields
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "500px", margin: "auto", textAlign: "center" }}>
//       <h2>Form Builder</h2>

//       {/* Buttons to add different types of fields */}
//       <button onClick={() => addField("text")}>+ Text</button>
//       <button onClick={() => addField("number")}>+ Number</button>
//       <button onClick={() => addField("select")}>+ Select</button>
//       <button onClick={() => addField("checkbox")}>+ Checkbox</button>

//       <div>
//         {/* Dynamically render fields based on JSON */}
//         {fields.map((field) => (
//           <div key={field.id} style={{ marginTop: "10px" }}>
//             {field.type === "text" && (
//               <input
//                 type="text"
//                 value={field.value}
//                 onChange={(e) => updateField(field.id, e.target.value)}
//               />
//             )}
//             {field.type === "number" && (
//               <input
//                 type="number"
//                 value={field.value}
//                 onChange={(e) => updateField(field.id, e.target.value)}
//               />
//             )}
//             {field.type === "select" && (
//               <select
//                 value={field.value}
//                 onChange={(e) => updateField(field.id, e.target.value)}
//               >
//                 <option value="">Select</option>
//                 <option value="option1">Option 1</option>
//                 <option value="option2">Option 2</option>
//               </select>
//             )}
//             {field.type === "checkbox" && (
//               <input
//                 type="checkbox"
//                 checked={field.value}
//                 onChange={(e) => updateField(field.id, e.target.checked)}
//               />
//             )}
//             <button onClick={() => deleteField(field.id)}>Delete</button>
//           </div>
//         ))}
//       </div>

//       <h3>Form JSON</h3>
//       {/* Text area for editing JSON */}
//       <textarea
//         value={json}
//         onChange={(e) => setJson(e.target.value)} // Update JSON from textarea input
//         rows="6"
//         style={{ width: "100%", height: "300px" }}
//       ></textarea>
//     </div>
//   );
// };






