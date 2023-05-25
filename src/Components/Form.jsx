import React, { useState } from "react"
function Form(props){
    const [note,setNote] = useState({
        title:"",
        content:""
    })
    function detectInput(event){
        const {name,value} = event.target;
        setNote(prevInput=>{
            return {
                ...prevInput,
                [name] : value
            }
        })
    }
    function addingNote(event){
        props.addNote(note);
        event.preventDefault();
        setNote({
            title:"",
            content:""
        })
    }
    return <div>
        <form>
            <input onChange={detectInput} name = "title" placeholder="Title" value = {note.title}/>
            <textarea onChange={detectInput} name = "content" placeholder = "Add note..." rows={4} value = {note.content}/>
            <button onClick={addingNote}>Add</button>
        </form>
    </div>
}
export default Form;