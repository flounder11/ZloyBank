import React, { useEffect, useRef } from 'react'
import Message from '../message/Message'
import styles from '../support/Support.module.css'

function MessageList({ messages, isExpanded }) {
	const messagesEndRef = useRef(null)

	useEffect(() => {
		// Прокрутка к последнему сообщению при обновлении списка
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [messages])

	return (
		<div
			className={`${styles.messageList} ${isExpanded ? styles.expanded : ''}`}
		>
			{messages.map((msg, index) => (
				<Message isUser={msg.isUser} key={index} text={msg.text} />
			))}
			<div ref={messagesEndRef}></div>
		</div>
	)
}

export default MessageList
