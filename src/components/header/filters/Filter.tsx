import './styles/Filter.css';
import SmallFilter from './SmallFilter';
import FilterDetails from './FilterDetails';
import {AppDispatch} from '../../../app/store';
import {useDispatch, useSelector} from 'react-redux';
import {
	selectShowFilterDetails,
	toggleShowFilterDetails,
} from '../../../features/filter/filterSlice';

export default function Filter() {
	const dispatch = useDispatch<AppDispatch>();
	const showFilterDetails = useSelector(selectShowFilterDetails);

	const handleFilterClick = () => {
		dispatch(toggleShowFilterDetails());
	};

	return (
		<>
			<SmallFilter onClick={handleFilterClick} />
			{showFilterDetails && (
				<div className="backdrop">
					<FilterDetails onClick={handleFilterClick} />
				</div>
			)}
		</>
	);
}
