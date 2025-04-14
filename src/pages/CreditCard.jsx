import React from 'react'
import MakeCard from '../components/makeCard/MakeCard'
import ellipce1 from '../assets/img/makeCard/debit-ellipce1.svg'
import ellipce2 from '../assets/img/makeCard/credit-ellipce2.png'
import CreditCardImg from '../assets/img/OurCards/CreditCard(main).png'

const CreditCard = () => {
	return (
		<MakeCard
			title={'Долговая яма ждет тебя!'}
			imageUrl={CreditCardImg}
			cardClass={'creditCard'}
			titleClass={'creditTitle'}
			ellipse1={ellipce1}
			ellipse2={ellipce2}
			cardApi={'credit'}
		/>
	)
}

export default CreditCard
