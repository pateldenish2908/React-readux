import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement} from './actions/index'
import { Check } from './components/Check';


export function App() {
	const count = useSelector((data)=>{
		return data.counter.count;
	}
	
	)
	const dispatch = useDispatch()

	return (
		<div className='row'>
				<h3 className='text-center mt-5'>
					 Number Opration Increment or Decrement
				</h3>
				<div className="d-flex justify-content-center">
					<button className='btn btn-secondary m-5' aria-label="Increment value" onClick={() => dispatch(increment(2))}>+</button>
					<span className='m-5'>{count}</span>
					<button className='btn btn-secondary m-5' aria-label="Decrement value" onClick={() => dispatch(decrement(2))}>-</button>
				</div>
				<Check/>
		</div>
	)
}