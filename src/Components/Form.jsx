import { useState } from "react";
import {usePostPlayerMutation} from "../api/Api"
import { useNavigate } from 'react-router-dom';

const AddPuppyForm = () => {
    const navigate = useNavigate();
    const [postPlayer] = usePostPlayerMutation()

    const [name, setName] = useState("")
    const [breed, setBreed] = useState('')
    const [status, setStatus] = useState('bench')
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit =async  event => {
        event.preventDefault();

        const response = await postPlayer({name, breed, status, imageUrl})

        setName("")
        setBreed("")
        setImageUrl("")
        setStatus('bench')

        navigate(`/players/${response.data.data.newPlayer.id}`)
    }

    return (
       <section className="add-puppy">
        <h3>Add a Puppy Player</h3>
         <form onSubmit={handleSubmit}>
            <label>
                Name: <input value={name} onChange={(event)=> setName(event.target.value)} />
            </label>
            <label>
                Breed: <input value={breed} onChange={(event) => setBreed(event.target.value)} />
            </label>
             <label>
                Image url:
                <input value={imageUrl} onChange={(event) => setImageUrl(event.target.value)}/>
            </label>
            <label>
                Status:
                <select value={status} onChange={(event)=>setStatus(event.target.value)}>
                    <option value='field'>Field</option>
                    <option value='bench'>Bench</option>
                </select>
            </label>
            <button>Submit</button>
         </form>
       </section>
    )   
}

export default AddPuppyForm;