import React from 'react'
import styles from './Notification.module.css'

const NotificationError = ({ notificationText }) => {
	return (
		<ul className={styles.notificationContainer}>
			<li className={`${styles.notificationItem} ${styles.error}`}>
				<div className={styles.notificationContent}>
					<div className={styles.notificationIcon}>
						<svg aria-hidden='true' fill='none' viewBox='0 0 24 24'>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
							></path>
						</svg>
					</div>
					<div className={styles.notificationText}>{notificationText}</div>
				</div>
				<div
					className={`${styles.notificationIcon} ${styles.notificationClose}`}
				>
					<svg aria-hidden='true' fill='none' viewBox='0 0 24 24'>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M6 18 17.94 6M18 18 6.06 6'
						></path>
					</svg>
				</div>
				<div className={styles.notificationProgressBar}></div>
			</li>
		</ul>
	)
}

export default NotificationError
