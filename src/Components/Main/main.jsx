import React ,{useEffect}from 'react'
import './main.css'
import img from '../../assests/image(1).jpg'
import img2 from '../../assests/image(2).jpg'
import img3 from '../../assests/image(3).jpg'
import img4 from '../../assests/image(4).jpg'
import img5 from '../../assests/image(5).jpg'
import img6 from '../../assests/image(6).jpg'
import img7 from '../../assests/image(7).jpg'
import img8 from '../../assests/image(8).jpg'
import img9 from '../../assests/image(9).jpg'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import{TbClipboardCheck} from 'react-icons/tb'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id:1,
        imgSrc:img,
        destTitle:'Bora Boar',
        location:'New Zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'The person of romance,Bora Bora is one of the best travel destination in the world .This place is know for its luxurious styas aand adventurous activities.'
                      
    },
    {
        id:2,
        imgSrc:img2,
        destTitle:'Machu Picchu',
        location:'peru',
        grade:'CULTURAL RELAX',
        fees:'$600',
        description:'Huayna picchu is a mountain in peru,rising over Machu picchu,the solid so-called Lostcity of Incas.this place is popular among tourists as the sunrise from the sun gate is simply spectaular'
                      
    },
    {
        id:3,
        imgSrc:img3,
        destTitle:'Great Barrier Reef',
        location:'Australia',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'The Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia. It contains the worlds largest collection of coral reefs, with 400 types of coral, 1,500 species of fish and 4,000 types of mollusc.'
                      
    },
    {
        id:4,
        imgSrc:img4,
        destTitle:'Cappadacia',
        location:'Turkey',
        grade:'CULTURAL RELAX',
        fees:'$800',
        description:'Cappadocias landscape includes dramatic expanses of soft volcanic rock, shaped by erosion into towers, cones, valleys, and caves. Rock-cut churches and underground tunnel complexes from the Byzantine and Islamic eras are scattered throughout the countryside.'
                      
    },
    {
        id:5,
        imgSrc:img5,
        destTitle:'Gunajuato',
        location:'Mexio',
        grade:'CULTURAL RELAX',
        fees:'$1100',
        description:'The city is a municipality in central Mexico and the capital of the state of the same name. It is part of the macroregion of the Bajío. It is located in a narrow valley, which makes its streets narrow and winding.'
                      
    },
    {
        id:6,
        imgSrc:img6,
        destTitle:'Cinque Terre',
        location:'Italy',
        grade:'CULTURAL RELAX',
        fees:'$840',
        description:'The city is a coastal area within Liguria, in the northwest of Italy. It lies in the west of La Spezia Province, and comprises five villages: Monterosso al Mare, Vernazza, Corniglia, Manarola, and Riomaggiore.'
                      
    },
    {
        id:7,
        imgSrc:img7,
        destTitle:'Angkor wat',
        location:'Cambodia',
        grade:'CULTURAL RELAX',
        fees:'$790',
        description:'Angkor Wat is an enormous Buddhist temple complex located in northern Cambodia. It was originally built in the first half of the 12th century as a Hindu temple. Spread across more than 400 acres, Angkor Wat is said to be the largest religious monument in the world.'
                      
    },
    {
        id:8,
        imgSrc:img8,
        destTitle:'Taj Mahal',
        location:'India',
        grade:'CULTURAL RELAX',
        fees:'$600',
        description:'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.'
                      
    },
    {
        id:9,
        imgSrc:img9,
        destTitle:'Bali Island',
        location:'Indonesia',
        grade:'CULTURAL RELAX',
        fees:'$500',
        description:'Bali, the famed Island of the Gods, with its varied landscape of hills and mountains, rugged coastlines and sandy beaches, lush rice terraces, and volcanic hillsides all providing a picturesque backdrop to its colorful, deeply spiritual, and unique culture stakes a serious claim to be paradise on earth.'
                      
    },
]

const Main = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
         },[])
    return(
        <section className='main container section'>

            <div className="secTitle">
                <h3 data-aos="fade-right"
                className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
               {
                Data.map(({id,imgSrc,destTitle,location,grade,
                    fees,description})=>{
                    return(
                        <div key={id}
                        data-aos="fade-up"
                        className='singleDestination'>
                            <div className="imageDiv">
                       <img src={imgSrc} alt={destTitle} />
                       </div>

                       <div className="cardInfo">
                        <h4 className="destTitle">{destTitle}</h4>
                        <span className="continent flex">
                            <HiOutlineLocationMarker className='icon' />
                            <span className="name">{location}</span>
                        </span>

                        <div className="fees flex">
                            <div className="grade">
                                <span>{grade}<small>+1</small></span>
                            </div>
                            <div className="price">
                                <h5>{fees}</h5>
                            </div>
                        </div>
                        <div className="desc">
                            <p>{description}</p>
                        </div>

                        <button className='btn flex'>
                            DETAILS <TbClipboardCheck  className="icon"/>
                        </button>
                       </div>
                        </div>
                    )
                })
               }
            </div>
        </section>
    )
}
export default Main;