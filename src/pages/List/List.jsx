import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import {useLocation} from 'react-router-dom';
import { useState } from 'react';
import './List.css';
import {format} from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/SearchItem/SearchItem';


const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [option, setOption] = useState(location.state.options);
  const [openDatePicker, setOpenDatePicker] = useState(false);
       

  return (
    <div>
      <Navbar />
      <Header type='list'/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label >Destination</label>
              <input placeholder='Destination' type="text" />
            </div>
            <div className="lsItem">
              <label >Check-in Date</label>
              <span onClick={() => setOpenDatePicker(!openDatePicker)}> {`${format(date[0].startDate ,"dd/MM/yyyy")} to ${format(date[0].endDate ,"dd/MM/yyyy")} `}</span>
              {openDatePicker && (
              <DateRange
               onChange={item => setDate([item.selection])}
               ranges={date}
               minDate={new Date()}
              />)}
            </div>

            <div className="lsItem">
              <label >Options</label>
              <div className="lsOptions">

              <div className="lsOptionItem">
                <span className="lsOptionText">Min price <small>per night</small></span>
                <input type="number" className='lsOptionInput'/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Max price <small>per night</small></span>
                <input type="number" className='lsOptionInput'/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input type="number" className='lsOptionInput' min={1} placeholder={option.adult}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input type="number" className='lsOptionInput' min={0} placeholder={option.children}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input type="number" className='lsOptionInput' min={1}  placeholder={option.room}/>
              </div>
              </div>
            </div>
                <button>Search</button>
          </div>
          <div className="listResult">
                <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List