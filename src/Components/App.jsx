import React, { useState } from "react" 
import Header from "./Header"
import Form from "./Form"
import Note from "./Note"
import Footer from "./Footer"
function App(){
    const [notes,setNotes] = useState([])
    function addItem(note){
        setNotes(prevNotes=>[...prevNotes,note])
        console.log(notes);
    }
    function deleteItem(id){
        setNotes(prevNotes=>{
            return prevNotes.filter((value,index)=>(index!==id))
        })
    }
    return <div>
    <Header/>
    <Form addNote = {addItem}/>
    {notes.map((noteItem,index)=><Note key = {index} id = {index} title = {noteItem.title} content = {noteItem.content} deleteNote={deleteItem}/>)}
    <Footer/>
    </div>
}
export default App;