import React from 'react'
import styles from './AboutSupport.module.css'
import groupMinions from '../../assets/img/aboutSupport/groupMinions.png'

const AboutSupport = () => {
	return (
		<section className={styles.frame3}>
			<p className={styles.title}>Потрясающая поддержка</p>
			<div className={styles.supportText}>
				<p>
					Наша тех поддержка всегда рада помочь каждому клиенту! Поэтому не
					пишите нам...
				</p>
				<div className={styles.groupMinions}>
					<img src={groupMinions} alt='Minions' />
				</div>
			</div>
			<div className={styles.supportLink}>
				<a href='/support'>Обратится</a>
			</div>
		</section>
	)
}

export default AboutSupport
