import React from 'react'
import styles from './Notification.module.css'

const Notification = () => {
	return (
		<ul className={styles.notificationContainer}>
			<li className={`${styles.notificationItem} ${styles.success}`}>
				<div className={styles.notificationContent}>
					<div className={styles.notificationIcon}>
						<svg aria-hidden='true' fill='none' viewBox='0 0 24 24'>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
							></path>
						</svg>
					</div>
					<div className={styles.notificationText}>
						Everything went perfectly!
					</div>
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
			<li className={`${styles.notificationItem} ${styles.info}`}>
				<div className={styles.notificationContent}>
					<div className={styles.notificationIcon}>
						<svg aria-hidden='true' fill='none' viewBox='0 0 24 24'>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
							></path>
						</svg>
					</div>
					<div className={styles.notificationText}>
						Some information for you.
					</div>
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
			<li className={`${styles.notificationItem} ${styles.warning}`}>
				<div className={styles.notificationContent}>
					<div className={styles.notificationIcon}>
						<svg aria-hidden='true' fill='none' viewBox='0 0 24 24'>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
							></path>
						</svg>
					</div>
					<div className={styles.notificationText}>Proceed with caution.</div>
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
					<div className={styles.notificationText}>An issue occurred.</div>
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
			<li className={styles.notificationItem}>
				<div className={styles.notificationContent}>
					<div className={styles.notificationIcon}>
						<svg aria-hidden='true' fill='none' viewBox='0 0 24 24'>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z'
							></path>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
							></path>
						</svg>
					</div>
					<div className={styles.notificationText}>A notification for you.</div>
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

export default Notification
