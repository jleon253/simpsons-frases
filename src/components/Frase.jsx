import React, { Fragment } from 'react'
import './Frase.css'

const Frase = ({ frase }) => {
	return (
		<Fragment>
			<div className='col-12'>
				<h4 className='quote'>{frase['quote']}</h4>
			</div>
			<div className='col-12 d-flex justify-content-start align-items-end'>
				<img
					src={frase['image']}
					className='img-fluid img-thumbnail mr-3'
					alt='imagen personaje'
					width='50px'
					height='50px'
				/>
				<blockquote className='personaje'>{frase['character']}</blockquote>
			</div>
		</Fragment>
	)
}

export default Frase
