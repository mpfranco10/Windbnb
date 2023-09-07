import {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import './styles/FilterDetails.css'
type FilterDetailsProps = {onClick?: () => void}

export default function FilterDetails({
  onClick: onToggleClick
}: FilterDetailsProps) {
  const [filterShown, setFilterShown] = useState<'location' | 'guests'>(
    'location'
  )

  return (
    <div className="filterDetails">
      <div className="filterDetailsContent">
        <div className="bigFilter">
          <div className="bigFilterItem">
            <p className="filterLabel">LOCATION</p>
            Helsinki, Finland
            <div id="myDropdown" className="dropdown-content">
              <p>Home</p>
              <p>About</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="bigFilterItem grayFilterText">
            <p className="filterLabel">GUESTS</p>
            Add guests
            <div id="myDropdown" className="dropdown-content">
              <p>Home</p>
              <p>About</p>
              <p>Contact</p>
            </div>
          </div>
        </div>

        <button className="bigSearchButton primaryButton">
          <SearchIcon style={{paddingRight: '5px'}} />
          Search
        </button>

        <button
          className="bigSearchButton secondaryButton"
          onClick={onToggleClick}
        >
          <CloseIcon style={{paddingRight: '5px'}} />
          Close
        </button>
      </div>
    </div>
  )
}
