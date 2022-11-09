import Link from 'next/link';

function EventItem({ event }) {
	const { title, date, image, location, id } = event;

	const formattedDate = new Date(date).toLocaleDateString('en-IN', {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
	});

	const formattedAddress = location.replace(', ', '\n');

	return (
		<li>
			<img src={image} alt={title}></img>
			<div>
				<div>
					<h2>{title}</h2>
					<div>
						<time>{formattedDate}</time>
					</div>
					<div>
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div>
					<Link href={`/events/${id}`}>Explore Event</Link>
				</div>
			</div>
		</li>
	);
}

export default EventItem;
