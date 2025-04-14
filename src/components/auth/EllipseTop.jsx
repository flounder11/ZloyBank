import React from 'react'
import styles from './Auth.module.css'
import ellipses from '../../assets/img/auth/Group 19.svg'

const EllipseTop = () => {
	return (
		<div className={styles.ellipseTop}>
			<img src={ellipses} alt='' />
		</div>
	)
}

export default EllipseTop
