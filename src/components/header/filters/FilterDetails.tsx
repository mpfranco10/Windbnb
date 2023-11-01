import {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import PlaceIcon from '@mui/icons-material/Place';
import './styles/FilterDetails.css';

import {useSelector} from 'react-redux/es/hooks/useSelector';
import {selectCities} from '../../../features/stays/staysSlice';
import classNames from 'classnames';

const GuestsSelector = ({
	title,
	description,
}: {
	title: string;
	description: string;
}) => {
	const [amount, setAmount] = useState(0);

	const reduceAmount = () => {
		setAmount((amount) => {
			if (amount > 0) {
				return amount - 1;
			} else {
				return amount;
			}
		});
	};

	const incrementAmount = () => {
		setAmount((amount) => {
			if (amount < 8) {
				return amount + 1;
			} else {
				return amount;
			}
		});
	};
	return (
		<div>
			<strong>{title}</strong>
			<p style={{color: '#bdbdbd'}}>{description}</p>
			<div style={{display: 'flex', gap: '12px', marginTop: '10px'}}>
				<button onClick={reduceAmount}>-</button>
				{amount}
				<button onClick={incrementAmount}>+</button>
			</div>
		</div>
	);
};

type FilterDetailsProps = {onClick?: () => void};
export default function FilterDetails({
	onClick: onToggleClick,
}: FilterDetailsProps) {
	const listOfCities = useSelector(selectCities);
	const [selectedItem, setSelectedItem] = useState<'location' | 'guests'>(
		'location'
	);
	const locationSelected = selectedItem == 'location';

	const [selectedCity, setSelectedCity] = useState<string>('');

	return (
		<div className="filterDetails">
			<div className="filterDetailsContent">
				<div className="bigFilter">
					<div
						className={classNames('bigFilterItem', {
							bigFilterItemSelected: locationSelected,
							grayFilterText: !locationSelected,
						})}
						onClick={() => setSelectedItem('location')}>
						<p className="filterLabel">LOCATION</p>
						{selectedCity ? selectedCity : 'Add location'}
						{locationSelected && (
							<div className="dropdown-content">
								{listOfCities.map((city: string) => (
									<p
										className="city-p"
										key={city}
										onClick={() => setSelectedCity(city)}>
										<PlaceIcon
											style={{fill: '#4F4F4F', paddingRight: '5px'}}
											fontSize="small"
										/>
										{city}
									</p>
								))}
							</div>
						)}
					</div>
					<div
						className={classNames('bigFilterItem', {
							bigFilterItemSelected: !locationSelected,
							grayFilterText: locationSelected,
						})}
						onClick={() => setSelectedItem('guests')}>
						<p className="filterLabel">GUESTS</p>
						Add guests
						{!locationSelected && (
							<div className="dropdown-content">
								<GuestsSelector title="Adults" description="Ages 13 or more" />
								<GuestsSelector title="Children" description="Ages 2-12" />
							</div>
						)}
					</div>
				</div>

				<button className="bigSearchButton primaryButton">
					<SearchIcon style={{paddingRight: '5px'}} />
					Search
				</button>

				<button
					className="bigSearchButton secondaryButton"
					onClick={onToggleClick}>
					<CloseIcon style={{paddingRight: '5px'}} />
					Close
				</button>
			</div>
		</div>
	);
}
