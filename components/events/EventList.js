import EventItem from './EventItem';
import styles from './EventList.module.css';

function EventList({ events }) {
	return (
		<ul className={styles.list}>
			{events.map((event, index) => (
				<EventItem key={index} event={event} />
			))}
		</ul>
	);
}

export default EventList;
