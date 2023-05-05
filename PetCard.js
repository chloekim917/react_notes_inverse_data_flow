import React from 'react'

function PetCard({ 
  name, 
  image = "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg", 
  favSnacks,
  isAdopted
}) {
  
  const snackLis = favSnacks.map(snack => <li key={snack}>{snack}</li>)
  
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      {isAdopted ? null : <button>Adopt</button>}
      <h3>Favorite Snacks</h3>
      <ul>
        {snackLis}
      </ul>
    </div>
  )
}

export default PetCard