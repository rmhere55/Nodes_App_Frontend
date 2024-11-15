// import { useState } from 'react'
// // import React {useState} from 'react'
// import TagInput from '../../components/Input/TagInput'
// import { MdClose } from 'react-icons/md'

// const AddEditNotes = ({onClose , noteData , type}) => {
//   const [title, setTitle] = useState("")
    
//   const [content, setContent] = useState("")
//   const [tags, setTags] = useState([])

//    const [error, setError]=useState(null)
// // add note
// const addNewNote =()=>{

// }
// // add note
// const editNote = async()=>{

// }


//    const handleAddNote =()=>{
//     if(!title){
//       setError("Please enter a title")
//       return
//     }
//     if(!content){
//       setError("Please enter a content")
//       return
//     }
//     setError("")
//     if(type === 'edit'){
//       editNote()
//     }
//     else{
//       addNewNote()
//     }
//    }

//   return (
//     <div className='relative'>
//       <button className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-salte-500' onClick={onClose}>
//         <MdClose className='text-xl text-slate-400'/>
//       </button>
//       <div className='flex flex-col gap-2'>
//         <label className='input-label'> Title</label>
//          <input
//          type="text"
//          className="text-2xl text-slate-950 outline-none"
//          placeholder='Go to Gym At %'
          
//          value={title}
//          onChange={({target})=> setTitle(target.value)}
//          />
      
      
//       </div>
//         <div>
//           <label className='input-label'>CONTENT</label>
//           <textarea
//           type = 'text'
//           className='text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded'
//           placeholder='Content'
//           rows={10}
          
//          value={content}
//          onChange={({target})=> setContent(target.value)}
//           />

//         </div>
//         <div className='mt-3'>
//           <label className='input-label'>Tags</label>
//           <TagInput
          
//          value={tags}
//          onChange={({target})=> setTags(target.value)}
//           />
//         </div>
//         {error && <p className='text-red-500 text-xs pt-4'>{error}</p>}
//         <button className='btn-primary font-medium mt-5 p-3' onClick={handleAddNote}>
//           ADD
//         </button>
//     </div>
//   )
// }

// export default AddEditNotes


import { useState } from "react";
import TagInput from "../../components/Input/TagInput";
import { MdClose } from "react-icons/md";

const AddEditNotes = ({ onClose, noteData, type }) => {
  const [title, setTitle] = useState(noteData?.title || "");
  const [content, setContent] = useState(noteData?.content || "");
  const [tags, setTags] = useState(noteData?.tags || []);
  const [error, setError] = useState(null);

  const addNewNote = () => {
    console.log("New Note Added:", { title, content, tags });
    onClose();
  };

  const editNote = async () => {
    console.log("Note Edited:", { title, content, tags });
    onClose();
  };

  const handleAddNote = () => {
    if (!title) {
      setError("Please enter a title");
      return;
    }
    if (!content) {
      setError("Please enter content");
      return;
    }
    setError(null);
    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };

  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-500"
        onClick={() => {
          setTitle("");
          setContent("");
          setTags([]);
          setError(null);
          onClose();
        }}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>
      <div className="flex flex-col gap-2">
        <label className="input-label">Title</label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Go to Gym At 5"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div>
        <label className="input-label">Content</label>
        <textarea
          type="text"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
          placeholder="Content"
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>
      <div className="mt-3">
        <label className="input-label">Tags</label>
        <TagInput value={tags} onChange={setTags} />
      </div>
      {error && <p className="text-red-500 text-xs pt-4">{error}</p>}
      <button
        className="btn-primary font-medium mt-5 p-3"
        onClick={handleAddNote}
      >
        {type === "edit" ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default AddEditNotes;
