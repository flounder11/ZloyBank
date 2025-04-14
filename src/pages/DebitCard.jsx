import React from 'react'
import MakeCard from '../components/makeCard/MakeCard'
import DebitCardImg from '../assets/img/generalCard/general-card.png'
import ellipce1 from '../assets/img/makeCard/debit-ellipce1.svg'
import ellipce2 from '../assets/img/makeCard/debit-ellipce2.svg'

const DebitCard = () => {
	return (
		<MakeCard
			title={'Наша самая безопасная какрта'}
			imageUrl={DebitCardImg}
			cardClass={'debitCard'}
			titleClass={'debitTitle'}
			ellipse1={ellipce1}
			ellipse2={ellipce2}
			cardApi={'debit'}
		/>
	)
}

export default DebitCard
