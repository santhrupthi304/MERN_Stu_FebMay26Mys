// Updating Objects and Arrays
import { useState } from 'react';

export function UpDatingObjectsArraysState(){
    // user state
    const [user, setUser] = useState ({
        name : "Sonu",
        skill: "React"
    });

    const updateSkill = () => {
        setUser({
            ...user, //Copies all exisiting properties.
            skill: "Advanced React"
        });
    };
    return(
        <>
        <h2>Updating Objects state</h2>
        <p>{user.name} = {user.skill}</p>
        <button onClick={updateSkill}>Updating Skill</button>
        </>
    )
}