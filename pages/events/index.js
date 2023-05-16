import { getAllEvents } from '../../helpers/api-util';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';

function EventsPage({ events }) {
	const router = useRouter();

	function findEventsHandler(year, month) {
		router.push(`/events/${year}/${month}`);
	}

	return (
		<>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList events={events} />
		</>
	);
}

export async function getStaticProps() {
	const events = await getAllEvents();

	return {
		props: {
			events,
		},
		revalidate: 60,
	};
}

export default EventsPage;
