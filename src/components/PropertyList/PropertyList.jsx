import React,{useState, useEffect} from 'react';
import './PropertyList.css';
import Slider from "react-slick";
import Banner from './banner.json';


const PropertyList = () => {

    const [banners, setBanners] = useState(Banner);
console.log(banners)
    // const settings = {
    //     dots: false,
    //     arrow: false,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     speed: 500,
    //   };

  return (
    // <div className="container">
    //     <div className='pList slick-track'>
    //    <Slider {...settings}>
    //    {banners.length !== 0 && banners.map((item) => {
    //     return(
    //     <div key={item.id}>
    //         <div style={{width:'100%', gap:'20px',height:'100%'}}
    //         data-index="-3" tabindex={item.id}
    //         className="pListItem slick-slide slick-cloned slick-current slick-active"
    //         >
    //         <div>
    //         <div tabindex={item.id} style={{width: '100%', display: 'inline-block'}}>
    //         <picture style={{display:'block', width:'95%', gap:'20px',height:'230px'}}>
    //         <img style={{width:'95%', gap:'20px',height:'230px'}} className="pListImg" src={item.image} alt={item.name} />
    //         </picture>
    //         <div className="pListTitle">
    //             <h1>{item.name}</h1>
    //             <h2>{item.num}</h2>
    //         </div>
    //     </div>
    //     </div>
    //     </div>
    //     </div>
    //    )
    //    })}
    //    </Slider>
    // </div>
    // </div>


    <ul className="pList">
       {banners.map((item) => {
       return (
        <li className='pListItem' key={item.id}>
            <a href="#">
            <img className='pListImg' src={item.image} alt={item.name} />
            <div className="pListTitle">
                <h1>{item.name}</h1>
                <h2>{item.num}</h2>
            </div>
            </a>
        </li>
        )})}
    </ul>
  )
}

export default PropertyList