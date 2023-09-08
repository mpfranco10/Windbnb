import {StayProps} from '../../types/Stays.types';
import './Stay.css';
import StarIcon from '@mui/icons-material/Star';

export default function Stay(props: StayProps) {
	const {title, rating, photo, superHost, type, beds} = props;
	return (
		<div className="stay">
			<img src={photo} alt={title} className="stayPhoto" />
			<div className="stayInfo">
				{superHost && <p className="staySuperHost">SUPER HOST</p>}
				<p className="stayType">
					{type}{' '}
					{beds && beds > 0 ? ' - '.concat(beds.toString(), ' beds') : ''}
				</p>
				<p className="stayRating">
					<StarIcon style={{fontSize: '16px', fill: '#f05454'}}></StarIcon>
					{rating}
				</p>
			</div>
			<p className="stayTitle">{title}</p>
		</div>
	);
}
