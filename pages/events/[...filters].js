import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import { useEffect, useState } from 'react';

function FilteredEventsPage() {
	const router = useRouter();
	const filterData = router.query.filters;
	const [isLoading, setIsLoading] = useState(true);
	const [events, setEvents] = useState([]);
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
				const events = getFilteredEvents({ year, month });
				setEvents(events);
			}
		}
	}, [filterData]);

	return (
		<div>
			<h1>Filtered Events Page</h1>
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
