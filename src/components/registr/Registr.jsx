import React, { useState } from 'react'
import HomePageButton from '../auth/HomePageButton'
import styles from './Registr.module.css'
import strangeMinion from '../../assets/img/auth/strange-minion.png'
import EllipseTop from '../auth/EllipseTop'
import EllipseBottom from '../auth/EllipseBotton'
import Minions from '../auth/Minions'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import NotificationSuccess from '../notification/NotificationSuccess'
import NotificationError from '../notification/NotificationError'

const Registr = ({ isMirror, onAuthClick }) => {
	const [username, setUsername] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const navigate = useNavigate
	const form = document.getElementById('authMain')

	const handle = async e => {
		e.preventDefault()

		// if (!username.trim() || phoneNumber.trim() || password.trim()) {
		// 	setError(true)
		// }

		if (password.length < 6) {
			setError(true)
		}

		setIsLoading(true)

		const url = `http://localhost:8082/auth/signup`
		const signupData = {
			username,
			phoneNumber,
			password,
		}

		try {
			const response = await axios.post(url, signupData)
			console.log(response.data)

			localStorage.setItem('token', response.data.token)
			setSuccess(true)
		} catch (error) {
			console.error('Ошибка:', error)
			// setError(error.response?.data?.message || 'Произошла ошибка')
			setError(true)
		} finally {
			setIsLoading(false)
		}
	}

	const successBlock = () => {
		form.style.paddingBottom = '250px'
		setTimeout(() => {
			setSuccess(false)
			form.style.paddingBottom = '308px'
		}, 5000)

		return <NotificationSuccess notificationText='Успешная регистрация' />
	}

	const errorBlock = () => {
		form.style.paddingBottom = '250px'
		setTimeout(() => {
			setError(false)
			form.style.paddingBottom = '308px'
		}, 5000)

		return <NotificationError notificationText='Произошла ошибка' />
	}

	return (
		<section>
			<form onSubmit={handle} className={styles.registr}>
				<HomePageButton />

				<div id='authMain' className={styles.authMain}>
					<p className={styles.loginText}>
						<span className={styles.auth} onClick={onAuthClick}>
							Вход
						</span>
						/Регистрация
					</p>

					<div className={styles.inputs}>
						<input
							type='text'
							placeholder='Имя'
							name='username'
							value={username}
							onChange={e => setUsername(e.target.value)}
							required
						/>
						<input
							type='tel'
							placeholder='Номер телефона'
							pattern='[1-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}'
							name='phoneNumber'
							value={phoneNumber}
							onChange={e => setPhoneNumber(e.target.value)}
						/>
						<input
							type='password'
							placeholder='Придумайте пароль'
							name='password'
							value={password}
							minLength='6'
							onChange={e => setPassword(e.target.value)}
						/>
					</div>

					<p className={styles.validation}>
						Минимум 6 символов (букв, цифр и спец. знаков)
					</p>

					<div className={styles.policy}>
						<input type='checkbox' />
						<p>
							Я принимаю <a href=''>политику конфиденциальности</a>
						</p>
					</div>

					{success ? successBlock() : ''}
					{error ? errorBlock() : ''}
					<button type='submit' disabled={isLoading} className={styles.login}>
						{isLoading ? 'Загрузка...' : 'Зарегистрироваться'}
					</button>
				</div>

				<EllipseTop />
				<div className={`${isMirror ? styles.mirrorCircle : ''}`}>
					<Minions imageUrl={strangeMinion} />
					<EllipseBottom />
				</div>
			</form>
		</section>
	)
}

export default Registr
