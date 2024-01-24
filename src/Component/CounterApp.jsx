import {Component} from "react";
// import './App.css'

export default class CounterApp extends Component{

    constructor(){
        super();
        this.state={
            count:0
        }
    }

    handleIncrement=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    handleDecrement=()=>{
        if(this.state.count>0){
            this.setState({
                count:this.state.count-1
            })

        }
        
    }

    handleReset=()=>{
        this.setState({
            count:0
        })
    }
    render(){
        
        return (
            <>
            <h1 className="heading">Counter App</h1>
            <h2 className="counter">{this.state.count}</h2>
            <button className="button increase-btn" onClick={this.handleIncrement}>+</button>
            <button className="button decrease-btn" onClick={this.handleDecrement}>-</button>
            <button className="button reset-btn" onClick={this. handleReset}>Reset</button>
            </>

        )
        
    }

}

// export default