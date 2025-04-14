import React, { useState } from 'react'
import Header from '../header/Header'
import MessageList from '../messageList/MessageList'
import axios from 'axios'

import Logo from '../../assets/img/header/logo.svg'
import arrow from '../../assets/img/support/arrow.png'
import styles from './Support.module.css'
import supMinion from '../../assets/img/support/supMinion.png'
import ellipse from '../../assets/img/support/ellipse.png'

const Support = () => {
	const [messages, setMessages] = useState([])
	const [input, setInput] = useState('')
	const [isShifted, setIsShifted] = useState(false)

	const handleSend = async () => {
		if (input.trim() != '') {
			setIsShifted(true)
			const newMessages = [...messages, { isUser: true, text: input }]

			setMessages(newMessages)

			setInput('')

			try {
				const response = await axios.get(
					`http://localhost:8080/api/chat?q=${input}`
				)

				setMessages([...newMessages, { isUser: false, text: response.data }])
			} catch (error) {
				console.error('Error sending message:', error)
			}
		}
	}

	const handleKeyPress = event => {
		if (event.key === 'Enter') {
			handleSend()
		}
	}

	return (
		<section className={styles.frame}>
			<Header />
			<div className={`${styles.logoInput} ${isShifted ? styles.shifted : ''}`}>
				<MessageList messages={messages} isExpanded={isShifted} />
				<div className={`${styles.logo} ${isShifted ? styles.hidden : ''}`}>
					<img src={Logo} alt='' />
				</div>
				<div className={styles.selectQuestion}>
					<input
						placeholder='Расскажите о вашей проблеме'
						type='text'
						value={input}
						onChange={e => setInput(e.target.value)}
						onKeyPress={handleKeyPress}
					/>
					<button className={styles.sendArrow} onClick={handleSend}>
						<img src={arrow} alt='->' />
					</button>
				</div>
			</div>
			<div className={styles.ellipseMinion}>
				<img src={supMinion} alt='' />
			</div>
			<div className={styles.ellipse2}>
				<img src={ellipse} alt='' />
			</div>
		</section>
	)
}

export default Support
