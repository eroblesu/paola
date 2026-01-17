export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		// twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Paola Fanjul Psicología",
	title: "Psicóloga en Madrid | Paola Fanjul",
	description:
		"Terapia basada en la evidencia. Atención presencial y online a adultos y parejas. Bienestar emocional.",
	useViewTransitions: true,
	author: {
		name: "Paola Fanjul",
		email: "paolafanjulpsico@gmail.com",
	},
	defaultImage: {
		src: "/images/main-logo.png",
		alt: "Paola Fanjul Psicología Logo",
	},
};

export default siteData;
