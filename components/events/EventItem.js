import Button from '../ui/Button';
import DateIcon from '../../icons/date-icon';
import ArrowRightIcon from '../../icons/arrow-right-icon';
import AddressIcon from '../../icons/address-icon';
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
						<time className={styles.date}>
							<DateIcon />
							{formattedDate}
						</time>
					</div>
					<div className={styles.address}>
						<AddressIcon />
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={styles.actions}>
					<Button link={`/events/${id}`}>
						<span>Explore Event</span>
						<span className={styles.icon}>
							<ArrowRightIcon />
						</span>
					</Button>
				</div>
			</div>
		</li>
	);
}

export default EventItem;
