import { useEffect } from "react"
import { useStytch, useStytchSession } from "@stytch/stytch-react"
import { useNavigate } from 'react-router-dom'

export default function Authenticate () {
	const client = useStytch()
	const session = useStytchSession()
	const navigate = useNavigate()

	useEffect(() => {
		if (session) {
			navigate('/')
		} else {
			const token = new URLSearchParams(window.location.search).get('token')
			client.magicLinks.authenticate(token, {
				session_duration_minutes: 60
			}).then(() => {
				alert('Successfully authenticated!')
				navigate(0)
			})
		}
	}, [client, session])

	return (
		<>
			<h1>Logging in...</h1>
			<p>
				Please wait whilst we log you in.
			</p>
		</>
	)
}