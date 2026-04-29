// Prop Validation
import propTypes from "prop-types";
function Profile({name,age}){
    return(
        <div className="card">
            <p>{name}</p>
            <p>{age}</p>
        </div>
    );
}
Profile.propTypes = {
    name: propTypes.string.isRequired,
    name: propTypes.number.isRequired,
};
export function PropTypesDemo(){
    return(
        <>
        <Profile name="Sonu" age={20}/>
        </>
    );
}