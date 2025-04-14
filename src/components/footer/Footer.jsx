import React from 'react'
import styles from './Footer.module.css'
import grass from '../../assets/img/footer/grass.png'
import logo from '../../assets/img/footer/logo.png'

const Footer = () => {
	return (
		<footer>
			<div className={styles.grass}>
				<img src={grass} alt='' />
			</div>
			<div className={styles.bcDirt}>
				<div className={styles.footerMain}>
					<div className={styles.logo}>
						<img src={logo} alt='Logo' />
					</div>
					<div className={styles.footerText}>
						<div className={styles.title}>
							<p>Контакты</p>
							<p>
								Гадкий Банк 7878 пл. Гагарина -1, Офис Сложно Лера - 1. Город не
								Москва, $$78-meaT.
							</p>
						</div>
						<div className={styles.contacts}>
							<a href='https://web.telegram.org/a/#1025992768'>Telegram</a>
							<a href='https://github.com/flounder11'>GitHub</a>
						</div>
					</div>
				</div>
				<p className={styles.descripion}>
					Этот сайт является полностью шуточным и пародийным. Он не предназначен
					для настоящих финансовых операций и не преследует цель обмана или
					введения в заблуждение. Все упомянутые услуги и продукты вымышлены и
					не существуют. Сайт создан исключительно для развлекательных и
					пародийных целей. Мы не продаем ничего и не предоставляем реальных
					финансовых услуг. Пожалуйста, относитесь к содержанию с юмором и не
					воспринимайте его всерьез. Спасибо за ваше понимание!
				</p>
			</div>
		</footer>
	)
}

export default Footer
