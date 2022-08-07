import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement} from './actions/index'


export function App() {
	const count = useSelector((data)=>{
		return data.counter.count;
	}
	
	)
	const dispatch = useDispatch()

	return (
		<div className='row'>
			<div className="d-flex justify-content-center m-5">
				
				<button className='btn btn-secondary m-5' aria-label="Increment value" onClick={() => dispatch(increment(2))}>+</button>
				<span className='m-5'>{count}</span>
				<button className='btn btn-secondary m-5' aria-label="Decrement value" onClick={() => dispatch(decrement(2))}>-</button>
			</div>
		</div>
	)
}