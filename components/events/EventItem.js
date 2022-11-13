import Link from 'next/link';
import styles from './EventItem.module.css';

function EventItem({ event }) {
	const { title, date, image, location, id } = event;

	const formattedDate = new Date(date).toLocaleDateString('en-IN', {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
	});

	const formattedAddress = location.replace(', ', '\n');

	return (
		<li className={styles.item}>
			<img src={image} alt={title}></img>
			<div className={styles.content}>
				<div className={styles.summary}>
					<h2>{title}</h2>
					<div>
						<time className={styles.date}>{formattedDate}</time>
					</div>
					<div className={styles.address}>
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={styles.actions}>
					<Link href={`/events/${id}`}>Explore Event</Link>
				</div>
			</div>
		</li>
	);
}

export default EventItem;
