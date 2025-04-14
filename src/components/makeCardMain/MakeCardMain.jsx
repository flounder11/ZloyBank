import React, { useState } from 'react'
import styles from '../makeCard/MakeCard.module.css'
import axios from 'axios'

const MakeCardMain = card => {
	const [surnameNamePatronymic, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [dateOfBirthday, setDateOfBirthday] = useState('')
	const [selectedOption, setSelectedOption] = useState('first')
	const handleOptionClick = option => {
		setSelectedOption(option)
	}

	const handleSend = async () => {
		const url = `http://localhost:8081/api/make-card/${card.card}`
		const personData = {
			surnameNamePatronymic,
			phone,
			email,
			dateOfBirthday,
			russianCitizenship: selectedOption === 'first' ? 'true' : 'false',
		}

		try {
			axios
				.post(url, personData)
				.then(response => console.log(response.data))
				.catch(error => console.error('Error:', error))
		} catch (error) {
			console.error('Error sending message:', error)
		}
	}

	return (
		<div className={styles.cardInfo}>
			<p className={styles.infoTitle}>Необходимо заполнить поля</p>

			<div className={styles.selectData}>
				<input
					type='text'
					placeholder='Фамилия, имя и отчество'
					value={surnameNamePatronymic}
					onChange={e => setName(e.target.value)}
				/>
				<div className={styles.inputs}>
					<input
						type='tel'
						placeholder='Номер телефона'
						value={phone}
						onChange={e => setPhone(e.target.value)}
					/>
					<input
						type='email'
						placeholder='Email'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<input
					type='date'
					placeholder='Дата рождения'
					value={dateOfBirthday}
					onChange={e => setDateOfBirthday(e.target.value)}
				/>
			</div>

			<div>
				<p className={styles.titleRF}>Гражданство РФ?</p>

				<div className={styles.checkboxRF}>
					<div className={styles.citizenshipOptions}>
						<div
							className={`${styles.option}`}
							onClick={() => handleOptionClick('first')}
						>
							<p>Да</p>
							<div
								className={`${styles.radioButton} ${
									selectedOption === 'first'
										? styles.selected
										: styles.noSelected
								}`}
							></div>
						</div>
						<div
							className={`${styles.option}`}
							onClick={() => handleOptionClick('second')}
						>
							<p>Нет</p>
							<div
								className={`${styles.radioButton} ${
									selectedOption === 'second'
										? styles.selected
										: styles.noSelected
								}`}
							></div>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.policy}>
				<div className={styles.check}>
					<input type='checkbox' />
					<p>
						Заполняя форму, я принимаю условия передачи информации и
						использования карты до встречи и даю согласие на получение
						информации о продуктах и услугах Банка и партнеров
					</p>
				</div>

				<button onClick={handleSend}>Оформить</button>
			</div>
		</div>
	)
}

export default MakeCardMain
