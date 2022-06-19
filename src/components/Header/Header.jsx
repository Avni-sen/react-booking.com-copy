import React,{useState } from 'react';
import { useNavigate } from 'react-router';
import './Header.css';import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed , faPlane,faCar,faTaxi, faCalendarDays, faPerson} from '@fortawesome/free-solid-svg-icons';
import {format} from 'date-fns';



    const Header = ({type}) => {
        //useNavigate için 
        const [destination, setDestination] = useState('');
        //
        const [openDatePicker, setOpenDatePicker] = useState(false);
        const [openOptions , setOpenOptions] = useState(false);
        const [options,setOptions] = useState({
            adult:1,
            children:0,
            room:1
        });

        //hotels yönlendirme için
        const navigate = useNavigate();

        const [date, setDate] = useState([{
            startDate : new Date(),
            endDate : new Date(),
            key : 'selection'
        }]);

        const handleOption = (name , operation) =>{
            setOptions(prev => {
                return {
                    ...prev,[name]:operation === 'd' ? options[name]-1 : options[name]+1
        }})}

        const handleSearch = () =>{
            navigate('/hotels' , {state:{destination,date,options}});
        }

    return (
        <div className='header'>
        <div className={type ==="list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxis</span>
                </div>
            </div>

        {type !== 'list' &&
        <>
        <h1 className="hedaerTitle">A lifetime of discounts? It's genius.</h1>
        <p className="headerDecs">Get rewarded for your travels - unlock instant saving of 10% or ... with a free MyBooking account. </p>
        <button className='headerBtn'>Sign Up / Register</button>
        <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className='headerIcon' />
                <input type="text" onChange={(e) => setDestination(e.target.value)} placeholder='Where are you going ?' className='headerSearchInput' />
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                <span onClick={() =>{setOpenDatePicker(!openDatePicker)}} className="headerSearchText">{`${format(date[0].startDate ,"dd/MM/yyyy")} to ${format(date[0].endDate ,"dd/MM/yyyy")} `}</span>
                {openDatePicker &&
                <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='date'
                minDate={new Date()}
                />}
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                <span onClick={() =>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult * ${options.children}  children * ${options.room} room`}</span>
                {openOptions &&
                <div className="options">
                <div className="optionsItem">
                    <span className="optionsText">Adult</span>
                    <div className="optionCounter">
                    <button disabled={options.adult <=1} className="optionCounterBtn" onClick={() => handleOption("adult","d")}>-</button>
                    <span className="optionCounterNumber">{options.adult < 0 ? options.adult=0 : options.adult}</span>
                    <button disabled={options.adult >=5} className="optionCounterBtn" onClick={() =>handleOption("adult","i")}>+</button>
                    </div>
                </div>
                <div className="optionsItem">
                    <div className="optionHeader">
                    <span className="optionsText">Children</span>
                    <span className='optionsRange'>0-17 age range</span>
                    </div>
                    <div className="optionCounter">
                    <button disabled={options.children <=0} className="optionCounterBtn" onClick={() =>handleOption("children","d")}>-</button>
                    <span className="optionCounterNumber">{options.children < 0 ? options.children=0 : options.children}</span>
                    <button disabled={options.children >=5} className="optionCounterBtn" onClick={() =>handleOption("children","i")}>+</button>
                    </div>
                </div>
                <div className="optionsItem">
                    <span className="optionsText">Room</span>
                    <div className="optionCounter">
                    <button disabled={options.room <=1} className="optionCounterBtn" onClick={() =>handleOption("room","d")}>-</button>
                    <span className="optionCounterNumber">{options.room<0 ? options.room =0 : options.room}</span>
                    <button disabled={options.room >=4} className='optionCounterBtn ' onClick={() =>handleOption("room","i")}>+</button>
                    </div>
                </div>
            </div>
                }
            </div>
            <div className="headerSearchItem">
                <button onClick={handleSearch} type='button' style={{width:'80px',backgroundColor:'#0071c2',color:'white',borderRadius:'0px'}} className='headerBtn'>Search</button>
            </div>
        </div>
        </>
        }
        </div>
        </div>
    )
}
export default Header