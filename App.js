import React, { useState } from "react";
import Header from "./Header";
import PetCard from "./PetCard";
import PetForm from "./PetForm";
import { pets as petsArray } from "./data"

/*

Component Hierarchy

  App
  ├───Header
  ├───PetForm : newPetObj ^ App
  └───PetCard

Lifting state: to decide which component to create our state variable in, 
we need to locate the closest common parent
*/

function App() {
  const [pets, setPets] = useState(petsArray)
  const [user, setUser] = useState(null)
  
  const petCards = pets.map((petObj) => {
    return (
      <PetCard
        key={petObj.id}
        name={petObj.name}
        image={petObj.image}
        favSnacks={petObj.favSnacks}
        isAdopted={petObj.isAdopted}
      />
    );
  });
  
  function addPet(petObj) {
    console.log("in App", petObj)
    setPets([...pets, petObj])
    // callback function(unction passed as an argument to another function) that allows inverse data flow
  }

  return (
    <div>
      <Header user={user} setUser={setUser} />
      {user ? <p>Welcome, {user.username}</p> : <em>Please log in!</em>}
      <PetForm onAddPet={addPet} />
      {/* Where it's called */}
      <main>{petCards}</main>
    </div>
  );
}

export default App;