import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { StytchProvider, initStytch } from "@stytch/stytch-react"

const stytch = initStytch('public-token-test-2e21111b-02b5-4c03-8815-a01353e5e3f3')

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<StytchProvider stytch={stytch}>
			<Router>
				<App />
			</Router>
		</StytchProvider>
	</React.StrictMode>
)