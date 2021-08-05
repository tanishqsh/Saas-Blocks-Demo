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
			<Head>
				<title> Tailwind SaaS Blocks UI – Demo </title>

				<title>Tailwind SaaS Blocks UI – Demo </title>
				<meta name="title" content="Tailwind SaaS Blocks UI – Demo " />
				<meta name="description" content="" />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.saasblocks.app" />
				<meta property="og:title" content="Tailwind SaaS Blocks UI – Demo " />
				<meta property="og:description" content="" />
				<meta
					property="og:image"
					content="https://res.cloudinary.com/stamped/image/upload/v1628175884/meta_zsle3y.jpg"
				/>

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://www.saasblocks.app" />
				<meta property="twitter:title" content="Tailwind SaaS Blocks UI – Demo " />
				<meta property="twitter:description" content="" />
				<meta
					property="twitter:image"
					content="https://res.cloudinary.com/stamped/image/upload/v1628175884/meta_zsle3y.jpg"
				></meta>
			</Head>
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
