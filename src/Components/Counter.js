import React from 'react'
import {connect} from 'react-redux'
import addNumber from '../Store/actions/AddCounter'
import {subNumber} from '../Store/actions/AddCounter'
import '../App';


const Counter = (props) => {
    console.log(props)
    return (
        <>
            <p style={{color: "red"}}>If you click ( + ) you add (1), If you click ( - ) you decrement by (-1).</p>
            <br/>
            <div>
            <button style={{width: 50, height: 50, marginBottom: 15}} onClick={() => {props.descounter()}}>-</button>
            <div>
            <span > {props.number.number} </span>
            </div>
            <button style={{width: 50, height: 50, marginTop: 15}} onClick={() => {props.addcounter()}}>+</button>
            </div>

        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return{
      addcounter: () =>{dispatch(addNumber())},
      descounter: () =>{dispatch(subNumber())}
    }
}       

const mapStateToProps = (state) =>{
    return {
        number: state
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)