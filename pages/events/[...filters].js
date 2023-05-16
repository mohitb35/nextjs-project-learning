import { getFilteredEvents } from '../../helpers/api-util';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/results-title';

function FilteredEventsPage(props) {
	const date = new Date(props.date.year, props.date.month - 1);
	return (
		<div>
			<ResultsTitle date={date} />
			{props.hasError ? (
				<p className="center">{props.error}</p>
			) : props.events.length > 0 ? (
				<EventList events={props.events} />
			) : (
				<p className="center">No events found</p>
			)}
		</div>
	);
}

export async function getServerSideProps(context) {
	const filterData = context.params.filters;

	if (filterData) {
		const [year, month] = filterData;
		if (
			isNaN(year) ||
			isNaN(month) ||
			year < 2000 ||
			year > 2025 ||
			month < 1 ||
			month > 12
		) {
			return {
				props: {
					hasError: true,
					error: 'Invalid date filters',
				},
				/* notFound: true,
				redirect: {
					destination: '/error'
				} */
			};
		} else {
			const events = await getFilteredEvents({ year, month });
			return {
				props: { events, date: { month, year } },
			};
		}
	}
}

export default FilteredEventsPage;
