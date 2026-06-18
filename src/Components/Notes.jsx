import {useState} from 'react'
import NoteLogo from "../assets/notes.png";
import bgNote from '../assets/note-bg.png'

const Note = () => {

    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState("");
    const [task, setTask] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (title.trim() === "" || notes.trim() === "") return;

        setTask([...task, { id: Date.now(), title, notes }]);
        setTitle('')
        setNotes('')
    };

    const deleteNote = (id) => {
        setTask(task.filter((t) => t.id !== id));
    };

       
  return (
    <div className=' lg:flex bg-[#050522] text-white'>

      <form onSubmit={(e)=> {
        handleSubmit(e)
        }} className='flex flex-col p-10 gap-5 items-start lg:w-1/2'>

        <div className='flex gap-2'>
            <h1 className='text-3xl font-bold'>Add Notes</h1>
            <img className='h-8' src={NoteLogo} alt="Note logo" />
        </div>

            <input onChange={(e) => {
                setTitle(e.target.value)
            }} value={title} type="text" placeholder='Enter Note topic' className='border-2 rounded-2xl p-2 w-full'/>

            <textarea onChange={(e) => {
                setNotes(e.target.value)
            }} value={notes} type="text" placeholder='Enter Note details' className='border-2 rounded-2xl p-2 w-full h-30'/>

            <button className='bg-gray-500 text-white py-2 rounded-3xl w-full cursor-pointer hover:bg-gray-600 transition-all transform-200 flex justify-center mx-auto'>Add notes</button>
      </form>

      
      <div className='lg:border-l-2 flex lg:w-1/2 flex-col p-10 gap-5 h-screen overflow-y-scroll'>

        <h1 className='text-3xl font-bold'>Your Notes:</h1>

            <div className='flex flex-wrap justify-center gap-5 overflow-auto'>
                {task.map((myNotes) => {
                    return <div key={myNotes.id} style={{ backgroundImage: `url(${bgNote})`}} className='h-60 w-55 rounded-2xl text-black p-8 bg-cover bg-center relative'>

                        <h3 className='leading-tight text-2xl font-bold mb-2 text-[#00005f]'>{myNotes.title}</h3>

                        <p className='text-gray-600'>{myNotes.notes}</p>
                        
                        <button onClick={() => deleteNote(myNotes.id)} className='w-7 h-7 rounded-full bg-red-700 flex justify-center items-center text-white absolute top-0 right-0 cursor-pointer hover:bg-red-800 transition-all transform-200'>X</button>
                    </div>
                })}
            </div>
      </div>
    </div>
  )
}

export default Note;
