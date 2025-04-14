import React from 'react'
import styles from './Auth.module.css'

const Minions = ({ imageUrl, isMirror }) => {
	return (
		<div className={styles.minionPng}>
			{imageUrl && <img src={imageUrl} alt='' />}
		</div>
	)
}
export default Minions
