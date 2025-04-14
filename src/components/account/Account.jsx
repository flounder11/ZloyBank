import React, { useEffect, useState } from 'react'
import styles from './Account.module.css'
import Header from '../header/Header'
import rubleIcon from '../../assets/img/account/rubleIcon.png'
import changeMoney from '../../assets/img/account/changeMoney.png'
import axios from 'axios'

const Account = () => {
	const [percentage, setPercentage] = useState(78)

	const handleSliderChange = event => {
		setPercentage(event.target.value)
	}

	return (
		<div>
			<Header />

			<section className={styles.account}>
				<div className={styles.leftSite}>
					<div className={styles.username}>
						<p>Виталя</p>
					</div>

					<div className={styles.balance}>
						<p className={styles.balanceTitle}>Общий бананс</p>
						<div className={styles.allMoney}>
							<div className={styles.money}>
								<img src={rubleIcon} alt='' />
								<span>7544,35</span>
							</div>
							<img className={styles.change} src={changeMoney} alt='' />
						</div>
						<p className={styles.disclamer}>Не по курсу ЦБ</p>
					</div>

					<div className={styles.commission}>
						<div className={styles.progressText}>Выбор комиссии</div>
						<div className={styles.progressContainer}>
							<div className={styles.progressBar}>{percentage}%</div>
						</div>

						<div className={styles.sliderContainer}>
							<input
								type='range'
								min='0'
								max='100'
								value={percentage}
								onChange={handleSliderChange}
								className={styles.slider}
							/>
						</div>
					</div>
				</div>
				<div></div>
			</section>
		</div>
	)
}

export default Account
