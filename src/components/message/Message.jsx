import React from 'react'
import styles from '../support/Support.module.css'

function Message({ isUser, text }) {
	// return <div className={`message ${sender}`}>{text}</div>

	return (
		<div className={`${isUser ? styles.user : styles.bot}`}>
			<p>{text}</p>
		</div>
	)
}

export default Message
