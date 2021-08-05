import Head from 'next/head';
import CTA10 from '../components/CTA10';
import Feature10 from '../components/Feature10';
import Footer1 from '../components/Footer1';
import Hero1 from '../components/Hero1';
import PricingTable2 from '../components/PricingTable2';
import Step1 from '../components/Step1';
import Testimonial3 from '../components/Testimonial3';

export default function Home() {
	return (
		<section>
			<Hero1 />
			<PricingTable2 />
			<Step1 />
			<Feature10 />
			<Testimonial3 />
			<CTA10 />
			<Footer1 />
		</section>
	);
}
