import React,{useState} from 'react';
import './FeaturedProperties.css';
import data from './data.json';



const FeaturedProperties = () => {

    const [featured, setFeatured] = useState(data);
    console.log(data)


  return (
    <div className='featuredproperties'>
        {featured.map((property, index) => {
            return(
            <div key={index} className="fpItem">
                <a href="#">
                    <img className='fpImg' src={property.image} alt={property.name} />
                    <div className="fbDecs">
                    <span className="fpName">{property.name}</span>
                    <span className="fpCity">{property.city}</span>
                    <span className="fpPrice">{property.price}</span>
                    </div>
                    <div className="fpRating">
                        <span className='rate'>{property.rate}</span>
                        <span className='state'>{property.status}</span>
                        <span className='rewiew'>{property.rewiews}</span>
                    </div>
                </a>
            </div>
            )})}
    </div>
  )
}

export default FeaturedProperties