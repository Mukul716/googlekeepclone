import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';   
import Note from './Note';



const CreateNote = (props) => {
    
const [note,setNote] = useState({
    title:"",
    content:"",
});

const InputEvent = (event) => {
    const {name,value} = event.target;

    setNote((prevData) => {
        return {
            ...prevData,
            [name]:value,
        }
    });
}

const addEvent = () =>
{
    props.passNote(note);

    setNote({
        title:"",
        content:"",
    });
}


return (
     <>
     <div className="main_note">
     <form>
         <input 
         type="text" 
         name="title"
         value={note.title}
         placeholder="Title"
          onChange={InputEvent}
           />
         <textarea
          rows="" 
          column=""
           placeholder="Write a note..." 
           name="content"
           value={note.content}
           onChange={InputEvent}
           ></textarea>
         <Button onClick={addEvent}><AddIcon className="plus_sign" /></Button>
         </form>
     </div>


     </>
);
}

export default CreateNote;