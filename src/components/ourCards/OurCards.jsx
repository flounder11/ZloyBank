import React from 'react'
import styles from './OurCards.module.css'
import CardInfo from '../cardInfo/CardInfo'
import creditCard from '../../assets/img/OurCards/creditCard(main).png'
import creditCardAdd from '../../assets/img/OurCards/creditCard(minions).png'
import PX41Card from '../../assets/img/OurCards/PX-41Card.png'
import investCard from '../../assets/img/OurCards/investCard.png'
import minionBanans from '../../assets/img/OurCards/minion-with-bananas.png'

const OurCards = () => {
	return (
		<section>
			<div id='ourProducts' className={styles.frame2}>
				<p className={styles.title}>Наши продукты</p>

				<div className={styles.cardContainer}>
					<CardInfo
						title='Кредитная карта - “Бесконечный процент”'
						inflation1='Кредиты: Даём много, но возвращать больно.'
						inflation2='Ваши деньи исчезают при пополнении, но за то - это красиво!'
						inflation3='А коллекторы будут радовать Вас, каждое утро 21 пукачем.'
						buttonText='Подписать приговор'
						buttonHref='/make-credit'
						imageUrl={creditCard}
					>
						<div className={styles.creditMinions}>
							<img src={creditCardAdd} alt='' />
						</div>
					</CardInfo>

					<CardInfo
						title='"PX-41 Финансовый мутант"”'
						inflation1='Это не просто карта, это  эксперимент Грю в мире финансов! Как и знаменитая сыворотка PX-41, эта  карта превращает ваши привычные траты в нечто невероятное... и немного  опасное.'
						inflation2='Мутация лимита: Лимит растёт с тратами... и долг тоже.'
						inflation3='Бонусы-мутанты: Кэшбэк то двойной, то нулевой — как повезёт.'
						buttonText='Супер секретно!'
						imageUrl={PX41Card}
						isMirror={true}
					/>

					<CardInfo
						addChildern={
							<img className={styles.investMinion} src={minionBanans} alt='' />
						}
						title='"Инвестор-злодей от мистера Перкинса"”'
						inflation1='Долговая яма: Просрочил — долг растёт, как планы Грю.'
						inflation2='Секретные комиссии: Платишь, а потом узнаёшь, за что.'
						inflation3='Финансовый вирус: Чем больше тратишь, тем глубже в долгах.'
						buttonText='Присоединиться'
						imageUrl={investCard}
					/>
				</div>
			</div>
		</section>
	)
}

export default OurCards
