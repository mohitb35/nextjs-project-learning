import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../helpers/api-util';

function HomePage({ featuredEvents }) {
	return (
		<div>
			<EventList events={featuredEvents} />
		</div>
	);
}

export async function getStaticProps() {
	const featuredEvents = await getFeaturedEvents();

	return {
		props: {
			featuredEvents,
		},
		revalidate: 120,
	};
}

export default HomePage;
