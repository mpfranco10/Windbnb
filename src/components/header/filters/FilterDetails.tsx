import {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import PlaceIcon from '@mui/icons-material/Place';
import './styles/FilterDetails.css';
type FilterDetailsProps = {onClick?: () => void};
import {useSelector} from 'react-redux/es/hooks/useSelector';
import {selectCities} from '../../../features/stays/staysSlice';
import classNames from 'classnames';

export default function FilterDetails({
	onClick: onToggleClick,
}: FilterDetailsProps) {
	const listOfCities = useSelector(selectCities);
	const [selectedItem, setSelectedItem] = useState<0 | 1>(0);
	const locationSelected = selectedItem == 0;

	const [selectedCity, setSelectedCity] = useState<string>(listOfCities?.[0]);

	return (
		<div className="filterDetails">
			<div className="filterDetailsContent">
				<div className="bigFilter">
					<div
						className={classNames('bigFilterItem', {
							bigFilterItemSelected: locationSelected,
							grayFilterText: !locationSelected,
						})}
						onClick={() => setSelectedItem(0)}>
						<p className="filterLabel">LOCATION</p>
						{selectedCity}
						{locationSelected && (
							<div className="dropdown-content">
								{listOfCities.map((city: string) => (
									<p key={city} onClick={() => setSelectedCity(city)}>
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
						onClick={() => setSelectedItem(1)}>
						<p className="filterLabel">GUESTS</p>
						Add guests
						{!locationSelected && (
							<div className="dropdown-content">
								<p>Home</p>
								<p>About</p>
								<p>Contact</p>
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
