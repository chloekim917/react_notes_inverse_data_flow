import React, { useState } from "react"
import { getNextId } from './data'

function PetForm({ onAddPet }) {
    
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    
    function handleSubmit(event) {
        event.preventDefault()
        const newPet = {
            id: getNextId(),
            name,
            image,
            favSnacks: ["Dog Treats"],
        }
        
        onAddPet(newPet)
    }
    
    return (
        <div className="card">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                <label htmlFor="image">Image</label>
                <input type="text" id="image" value={image} onChange={e => setImage(e.target.value)} />
                <button type="submit">Add Pet</button>
            </form>
        </div>
    )
}

export default PetForm