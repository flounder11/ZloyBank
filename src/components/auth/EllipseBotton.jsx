import React from 'react'
import ellipse from '../../assets/img/auth/Ellipse 30.svg'
import styles from './Auth.module.css'

const EllipseBottom = ({ isMirror }) => {
	return (
		<div className={styles.ellipseBottom}>
			<img src={ellipse} alt='' />
		</div>
	)
}

export default EllipseBottom
