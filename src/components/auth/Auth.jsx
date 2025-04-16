import React, { useState } from 'react'
import styles from './Auth.module.css'
import Tg from '../../assets/img/auth/telegram.png'
import Google from '../../assets/img/auth/google.png'
import Vk from '../../assets/img/auth/vk.png'
import eyePass from '../../assets/img/auth/eyePass.png'
import minion from '../../assets/img/auth/group-minion.png'
import eyebrow from '../../assets/img/auth/eyebrow.png'
import HomePageButton from './HomePageButton'
import EllipseTop from './EllipseTop'
import EllipseBottom from './EllipseBotton'
import Minions from './Minions'
import { set, useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import NotificationError from '../notification/NotificationError'

const Auth = ({ onRegisterClick }) => {
	const {
		register,
		formState: { errors },
	} = useForm()

	const [phoneNumber, setPhoneNumber] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const naviagte = useNavigate()
	const form = document.getElementById('authMain')

	const handle = async e => {
		e.preventDefault()

		// if (!phoneNumber.trim() || !password.trim()) {
		// 	setError('Необходимо заполнить все поля')
		// 	return
		// }

		localStorage.clear()
		const url = `http://localhost:8082/auth/signin`
		const loginData = {
			phoneNumber,
			password,
		}

		try {
			const response = await axios.post(url, loginData)
			console.log(response.data)
			localStorage.setItem('token', response.data.token)
			naviagte('/home')
		} catch (error) {
			console.error('Error:', error)
			setError(true)
		}
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
			<form onSubmit={handle} className={styles.auth}>
				<HomePageButton />

				<div id='authMain' className={styles.authMain}>
					<p className={styles.loginText}>
						Вход{' '}
						<span className={styles.register} onClick={onRegisterClick}>
							/ Регистрация
						</span>
					</p>

					<div className={styles.inputs}>
						<input
							id='phone'
							type='tel'
							placeholder='Номер телефона'
							{...register('phone', {
								required: 'Это поле обязательно',
								pattern: {
									value: /^\+7\d{10}$/,
									message:
										'Введите корректный номер телефона в формате +7(XXX)-XXX-XX-XX',
								},
							})}
							name='phoneNumber'
							value={phoneNumber}
							onChange={e => setPhoneNumber(e.target.value)}
							autoComplete='off'
						/>
						{errors.phone && <p>{errors.phone.message}</p>}

						<div className={styles.password}>
							<input
								type='password'
								placeholder='Пароль'
								name='password'
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
					</div>

					<div className={styles.links}>
						<a href=''>Забыли пароль?</a>
					</div>

					{error ? errorBlock() : ''}

					<button type='submit' className={styles.login}>
						Войти
					</button>

					<div className={styles.authLink}>
						<a href=''>
							<img src={Tg} alt='tg' />
						</a>
						<a href=''>
							<img src={Google} alt='Google' />
						</a>
						<a href=''>
							<img src={Vk} alt='Vk' />
						</a>
					</div>
				</div>

				<EllipseTop />
				<EllipseBottom />
				<Minions imageUrl={minion} />
			</form>
		</section>
	)
}
export default Auth
