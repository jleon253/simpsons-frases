import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Frase from './components/Frase'
import Spinner from './components/Spinner'

function App() {
	const [frase, setFrase] = useState({})
	const [cargando, setCargando] = useState(false)
	const [msgError, setMsgError] = useState('')

	const obtenerFrase = async () => {
		setCargando(true)
		const url = 'https://thesimpsonsquoteapi.glitch.me/quotes'
		let data = await await fetch(url, { credentials: 'same-origin' })
			.then((res) => {
				// console.log('res', res)
				return res.json()
			})
			.catch((err) => {
				// console.log('Error:', err)
				setMsgError(err)
			})
		setTimeout(() => {
			setCargando(false)
			if (data) {
				// console.log('data', data)
				setFrase(data[0])
			}
		}, 500)
		return data
	}

	useEffect(() => {
		obtenerFrase()
	}, [])

	return (
		<div className='container my-3'>
			<div className='row'>
				<div className='col-lg-6 offset-lg-3'>
					<img src={logo} className='mx-auto d-block' alt='logo' width='80%' />
        </div>
        <div className='col-lg-6 offset-lg-3'>
          <small className="text-center d-block mx-auto"><b>Random Quotes</b></small>
        </div>
			</div>
			<div className='row'>
				{msgError ? (
					<div className='col-10 offset-1 col-lg-8 offset-lg-2 my-5 p-5'>
						<div className='alert alert-danger' role='alert'>
							{ msgError }
						</div>
					</div>
				) : null}

				<div className='col-10 offset-1 col-lg-8 offset-lg-2 my-5 p-3 bg-white rounded shadow'>
					{cargando ? <Spinner /> : <Frase frase={frase} />}
				</div>
			</div>
			<div className='row mb-5'>
				<div className='col-lg-6 offset-lg-3'>
					<button
						type='button'
						className='btn btn-danger d-block mx-auto'
						onClick={obtenerFrase}
					>
						Show me another
					</button>
				</div>
      </div>
      <hr/>
      <div className='row'>
        <div className='col-lg-6 offset-lg-3 d-flex flex-row justify-content-between'>
          <small className="text-dark">Code by: <a href="https://github.com/jleon253">John León</a></small>
          <small className="text-dark">API by: <a href="https://jluboff-portfolio.glitch.me/">Jason Luboff</a></small>
        </div>
      </div>
		</div>
	)
}

export default App
