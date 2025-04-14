import React from 'react'
import Header from '../components/header/Header'
import GeneralCard from '../components/generalCard/GeneralCard'
import OutCards from '../components/ourCards/OurCards'
import AboutSupport from '../components/aboutSupport/AboutSupport'
import Footer from '../components/footer/Footer'

const MainPage = () => {
	return (
		<div>
			<Header />
			<main>
				<GeneralCard />
				<OutCards />
				<AboutSupport />
				<Footer />
			</main>
		</div>
	)
}

export default MainPage
