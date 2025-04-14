import React from 'react'
import styles from './GeneralCard.module.css'
import card from '../../assets/img/generalCard/general-card.png'
import inflation from '../../assets/img/generalCard/inflation.png'
import blackBanan from '../../assets/img/generalCard/black-banan.png'
import procent from '../../assets/img/generalCard/procent.png'
import minions from '../../assets/img/generalCard/minions.png'

const GeneralCard = () => {
	return (
		<section className={styles.bcImage}>
			<div className={styles.frame}>
				<div className={styles.title}>
					<p className={styles.titleText}>Сбережем все ваши бананы!</p>
					<p className={styles.titleText2}>Но не точно...</p>
				</div>

				<div className={styles.aboutCard}>
					<img className={styles.minions} src={minions} alt='' />
					<div className={styles.cardInfo}>
						<p className={styles.aboutText}>Новая карта</p>
						<h2>Бананомания</h2>
						<p className={styles.aboutText}>
							для тех, кто хочет сберечь свои бананы от злых злодеев!
						</p>

						<div className={styles.mainCard}>
							<div className={styles.advantages}>
								<img src={blackBanan} alt='' />
								<p className={styles.aboutText}>Скользкие сотрудники</p>
							</div>
							<div className={styles.advantages}>
								<img src={procent} alt='' />
								<p className={styles.aboutText}>
									Кэшбэк? Забираем обратно с комиссией!
								</p>
							</div>
							<div className={styles.advantages}>
								<img src={inflation} alt='' />
								<p className={styles.aboutText}>
									В тайне уменьшаем ваш баланс...
								</p>
							</div>
						</div>
						<div className={styles.saveMoney}>
							<a href='/make-debit'>Сохранить бананы</a>
						</div>
					</div>
					<div className={styles.cardImg}>
						<img src={card} alt='' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default GeneralCard
