import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/results-title';
import { useEffect, useState } from 'react';

function FilteredEventsPage() {
	const router = useRouter();
	const filterData = router.query.filters;
	const [isLoading, setIsLoading] = useState(true);
	const [events, setEvents] = useState([]);
	const [date, setDate] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (filterData) {
			setIsLoading(false);
			const [year, month] = filterData;
			if (
				isNaN(year) ||
				isNaN(month) ||
				year < 2000 ||
				year > 2025 ||
				month < 1 ||
				month > 12
			) {
				setError('invalid date filters');
			} else {
				const _date = new Date(Number(year), Number(month - 1));
				setDate(_date);
				const _events = getFilteredEvents({ year, month });
				setEvents(_events);
			}
		}
	}, [filterData]);

	return (
		<div>
			<ResultsTitle date={date} />
			{isLoading ? (
				<p className="center">Loading...</p>
			) : error ? (
				<p className="center">{error}</p>
			) : (
				<EventList events={events} />
			)}
		</div>
	);
}

export default FilteredEventsPage;
