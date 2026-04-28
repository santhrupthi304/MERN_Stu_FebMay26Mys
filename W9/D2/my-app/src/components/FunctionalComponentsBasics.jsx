import React from 'react';

function Welcome(props){
    // Child component : resuable UI
    return(
        <p>Hello,{props.name}</p>
    );
}

export function FunctionalComponentsBasics(){
    return(
        <div>
            <h2>FunctionalComponentsBasics</h2>
            {/* we are passing 'Santhrupthi' as prop Welcome function receives it as {name: "Santhrupthi"}  */}
            <Welcome name="Santhrupthi" />
            {/* we are passing 'Developer' as prop Welcome function receives it as {name: "Developer"}  */}
            <Welcome name="Developer" />
        </div>
    );
}