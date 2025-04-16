import React, { use } from 'react'
import styles from './Header.module.css'
import Logo from '../../assets/img/header/logo.svg'
import eye from '../../assets/img/header/eye.png'
import useAuth from '../hooks/useAuth'

const Header = () => {
	const { isAuthenticated, logout } = useAuth()

	return (
		<header>
			<div className={styles.headerMain}>
				<a className={styles.logo} href='/'>
					<img src={Logo} alt='Logo' />
				</a>
				<div className={styles.links}>
					<a className={styles.link} href='/'>
						Главная
					</a>
					<a className={styles.link} href=''>
						Оформить
					</a>
					<a className={styles.link} href='/#ourProducts'>
						Продукты
					</a>
					<a className={styles.link} href='/support'>
						Поддержка
					</a>

					{isAuthenticated ? (
						<div>
							<div className={styles.profile}>
								<a className={styles.profileLink} href='/home'>
									Личный кабинет
								</a>
								<img src={eye} alt='' />
							</div>
							<button onClick={logout}>Выйти</button>
						</div>
					) : (
						<a className={styles.signiLink} href='/auth'>
							Войти
						</a>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
