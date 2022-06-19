import React,{useState} from 'react'
import './SearchItem.css'
import List from './List.json';


const SearchItem = () => {

    const [searchList, setSearchList] = useState(List);
    console.log(searchList);



  return (
    <>
    {searchList &&  searchList.map((item) => {
        return(
        <div key={item.id} className='searchItem'>
        <img src={item.image} alt={item.name} className='siImg' />
        <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.center}</span>
        <span className="siTaxiOp">{item.taxi}</span>
        <span className="siSubtitle">{item.desc.firstTitle}</span>
        <span className="siFeatures">{item.desc.rooms}</span>
        <span className='siCancelOp'>{item.desc.free}</span>
        <span className="siCancelOpSubtitle">
            {item.desc.lastTitle}
        </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>{item.status}</span>
                <span className='siRate'>{item.rate}</span>
            </div>
        <div className="siDetailText">
            <span className="siPrice">{item.price}</span>
            <span className="siTaxOp">Include taxes and fees</span>
            <button className="siBtn">See avaibility</button>
        </div>
        </div>
        </div>


    )})}
    </>
  
  )
}

export default SearchItem