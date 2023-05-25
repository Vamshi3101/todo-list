import React from "react"
function Note(props){
    function deletingNote(){
        props.deleteNote(props.id);
    }
    return <div>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={deletingNote}>delete</button>
    </div>
}
export default Note;