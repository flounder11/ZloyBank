import React, { Children } from 'react'
import styles from './CardInfo.module.css'

const CardInfo = ({
	title,
	inflation1,
	inflation2,
	inflation3,
	imageUrl,
	buttonText,
	isMirror,
	buttonHref,
	children,
	addChildern,
}) => {
	return (
		<div>
			{addChildern}
			<div className={`${styles.card} ${isMirror ? styles.mirror : ''}`}>
				<div className={styles.cardInfo}>
					<h3>{title}</h3>
					<div className={styles.inflations}>
						<p>{inflation1}</p>
						<p>{inflation2}</p>
						<p>{inflation3}</p>
					</div>
					<div className={styles.takeCard}>
						<a href={buttonHref}>{buttonText}</a>
					</div>
				</div>

				<div className={styles.cardImg}>
					{children}
					{imageUrl && <img src={imageUrl} alt={title} />}
				</div>
			</div>
			<div
				className={`${styles.circle} ${isMirror ? styles.mirrorCircle : ''}`}
			>
				<svg
					width='1024'
					height='1023'
					viewBox='0 0 1024 1023'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<circle
						cx='512.473'
						cy='511.5'
						r='511.5'
						fill='url(#paint0_linear_51_6)'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_51_6'
							x1='160.973'
							y1='250.5'
							x2='867.973'
							y2='743.5'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#F4C228' />
							<stop offset='1' stopColor='#EFDA9B' />
						</linearGradient>
					</defs>
				</svg>
			</div>
		</div>
	)
}

export default CardInfo
