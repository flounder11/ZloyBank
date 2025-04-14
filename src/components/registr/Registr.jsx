import React, { useState } from 'react'
import HomePageButton from '../auth/HomePageButton'
import styles from './Registr.module.css'
import strangeMinion from '../../assets/img/auth/strange-minion.png'
import EllipseTop from '../auth/EllipseTop'
import EllipseBottom from '../auth/EllipseBotton'
import Minions from '../auth/Minions'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Registr = ({ isMirror, onAuthClick }) => {
	const [username, setUsername] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const navigate = useNavigate

	const handle = async e => {
		e.preventDefault()
		setError('')

		if (!username.trim() || phoneNumber.trim() || password.trim()) {
			setError('Необходимо заполнить все поля')
		}

		if (password.length < 6) {
			setError('Пароль должен быть больше 5 символов')
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
		} catch (error) {
			console.error('Ошибка:', error)
			setError(error.response?.data?.message || 'Произошла ошибка')
		} finally {
			setIsLoading(false)
		}
	}
	return (
		<section>
			<div className={styles.registr}>
				<HomePageButton />

				<div className={styles.authMain}>
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
							pattern='[1-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}'
							name='phoneNumber'
							value={phoneNumber}
							minLength='6'
							onChange={e => setPhoneNumber(e.target.value)}
						/>
						<input
							type='password'
							placeholder='Придумайте пароль'
							name='password'
							value={password}
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
					<button
						onClick={handle}
						disabled={isLoading}
						className={styles.login}
					>
						{isLoading ? 'Загрузка...' : 'Зарегистрироваться'}
					</button>
				</div>

				<EllipseTop />
				<div className={`${isMirror ? styles.mirrorCircle : ''}`}>
					<Minions imageUrl={strangeMinion} />
					<EllipseBottom />
				</div>
			</div>
		</section>
	)
}

export default Registr
