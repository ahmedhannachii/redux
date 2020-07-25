import React from 'react'
import {connect} from 'react-redux'
import addNumber from '../Store/actions/AddCounter'
import {subNumber} from '../Store/actions/AddCounter'
import '../App';


const Counter = (props) => {
    console.log(props)
    return (
        <>
            <p className="title">This is our Counter</p>
            <br/>
            <div className="counter" >
            <button className="btn" onClick={() => {props.descounter()}} >-</button>
            <div className="number">
            <span > {props.number.number} </span>
            </div>
            <button className="btn" onClick={() => {props.addcounter()}} >+</button>
            </div>

        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return{
        plus: () =>{dispatch(addNumber())},
        moin: () =>{dispatch(subNumber())}
    }
}       

const mapStateToProps = (state) =>{
    return {
        number: state
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Counter)