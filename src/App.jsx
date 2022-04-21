import { useCallback } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useStytch } from '@stytch/stytch-react'

import Navigation from './components/Navigation'

import Home from './views/Home'
import Login from './views/Login'
import Account from './views/Account'
import Authenticate from './views/Authenticate'

import PrivateRoute from './layouts/PrivateRoute'

function App() {
	const client = useStytch()
	const navigate = useNavigate()

	const handleLogout = useCallback(async () => {
		const res = await client.session.revoke()
		alert('Logged out!')
		navigate(0)
	}, [client])

	const handleLogin = async (email) => {
		await client.magicLinks.email.loginOrCreate(email)

		alert('Email has been sent to ' + email)
	}

	return (
		<>
			<Navigation handleLogout={handleLogout} />

			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="/login" element={<Login handleLogin={handleLogin} />} />
				<Route 
					path="/account"
					element={
						<PrivateRoute>
							<Account />
						</PrivateRoute>
					}
				/>
				<Route path="/authenticate" element={<Authenticate />} />
				<Route path="*" element={<p>404!</p>} />
			</Routes>
		</>
	)
}

export default App
