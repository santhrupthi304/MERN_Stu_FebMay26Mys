import { React,Component } from 'react';
export class ClassComponentsState extends Component{
    //1. constructor: run once when Component is first created
    constructor(props){
        super(props);    //calls parent constructor first
        this.state = { count:0 };   //state is going to be hre and stays even after the re-renders
    };

    //2. Event handler: arrow function to handle 'this' binding.
    increment = () => {
        this.setState((prevState)=>({         //setState is a build in function.. , prevState userdefined
            count:prevState.count + 1
        }));
    };

    //3. Render: state/props change
    render(){
        console.log("render() called")

        return(
            <div>
                <h3>Class components state</h3>
                <p>Count:{this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}