import React, { useState } from 'react'
import Auth from '../components/auth/Auth'
import Registr from '../components/registr/Registr'
import AuthImg from '../components/authImg/AuthImg'
import styles from '../components/auth/Auth.module.css'

const AuthRegistr = () => {
	const [isActive, setIsActive] = useState(false)

	const handleRegisterClick = () => {
		setIsActive(true)
	}

	const handleAuthClick = () => {
		setIsActive(false)
	}

	return (
		<div className={styles.AuthRegistr}>
			<Auth onRegisterClick={handleRegisterClick} />
			<Registr isMirror={isActive} onAuthClick={handleAuthClick} />
			<AuthImg isActive={isActive} />
		</div>
	)
}

export default AuthRegistr
