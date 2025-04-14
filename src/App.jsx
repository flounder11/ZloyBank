import React from 'react'
import MainPage from './pages/MainPage'
import SupportPage from './pages/SupportPage'
import DebitCard from './pages/DebitCard'
import AuthRegistr from './pages/AuthRegistr'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreditCard from './pages/CreditCard'
import LocalAccount from './pages/LocalAccount'
import PrivateRoute from './components/PrivateRoute'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/support' element={<SupportPage />} />
				<Route path='/make-debit' element={<DebitCard />} />
				<Route path='/make-credit' element={<CreditCard />} />
				<Route path='/auth' element={<AuthRegistr />} />
				<Route
					path='/home'
					element={
						<PrivateRoute>
							<LocalAccount />
						</PrivateRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
