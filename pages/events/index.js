import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';

function EventsPage() {
	const router = useRouter();
	const events = getAllEvents();

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

export default EventsPage;
