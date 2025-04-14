import React from 'react'
import styles from './AuthImg.module.css'
import img from '../../assets/img/auth/mainImg.png'

const AuthImg = ({ isActive }) => {
	return (
		<div className={`${styles.mainImg} ${isActive ? styles.active : ''}`}>
			<img src={img} alt='Minions' />
		</div>
	)
}

export default AuthImg
