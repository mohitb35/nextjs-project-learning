import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import { getFeaturedEvents, getEventById } from '../../helpers/api-util';
import { useRouter } from 'next/router';

function EventDetailsPage({ event }) {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	if (!event) return <div>No Event Found</div>;

	return (
		<>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt={event.title}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</>
	);
}

export async function getStaticPaths() {
	const events = await getFeaturedEvents();
	const paths = events.map((event) => ({
		params: { id: event.id },
	}));

	return {
		paths,
		fallback: 'blocking', // can also be true or 'blocking'
	};
}

export async function getStaticProps(context) {
	const event = await getEventById(context.params.id);

	if (!event) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			event,
		},
		revalidate: 30,
	};
}

export default EventDetailsPage;
