// Passing Functions as props
// Also called as "callback props"
// Child component has to invoke parent logic
function ChildButton({onGreet}){
    return(
        <button onClick={onGreet}>Invoke Parent function</button>
    )
}

export function FunctionProps(){
    const greet = () => alert('Hello from parent function');
    return(
        <>
            <h2>Passing Function as props</h2>
            <ChildButton onGreet={greet}/>
        </>
    )
}