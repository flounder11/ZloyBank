import React from 'react'
import Header from '../header/Header'
import MakeCardMain from '../makeCardMain/MakeCardMain'
import styles from './MakeCard.module.css'

const MakeCard = ({
	title,
	imageUrl,
	ellipse1,
	ellipse2,
	cardClass,
	titleClass,
	cardApi,
}) => {
	return (
		<section>
			<Header />

			<div className={`${styles.makeCard} ${styles[cardClass]}`}>
				<p className={`${styles.title} ${styles[titleClass]}`}>{title}</p>

				<div className={styles.mainCard}>
					<div className={styles.cardImg}>
						<img src={imageUrl} alt='minion' />
					</div>
					<MakeCardMain card={`${cardApi}`} />
				</div>
			</div>
			<div>
				<div className={styles.ellipse1}>
					<img src={ellipse1} alt='' />
				</div>
				<div className={styles.ellipse2}>
					<img src={ellipse2} alt='' />
				</div>
			</div>
		</section>
	)
}

export default MakeCard
