import React from 'react'
import { useSelector } from 'react-redux'


export function Check() {
	const count = useSelector((data)=>{
		return data.counter.count;
	}
	
	)

	return (
		<div className='row'>
			<hr/>
			<h3 className='text-center mt-5'>
					Check Value On another Page
			</h3>
			<div className="text-center mt-5">
				{count}
			</div>
		</div>
	)
}