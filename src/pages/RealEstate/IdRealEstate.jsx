import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../../components/Navbar/Navbar'
import DataRealEstate from './DataRealEstate.json'
import Map from '../../icon/map.svg'
import Price from '../../icon/price.svg'
import Realtor from '../../icon/realtor.svg'

export default function IdRealEstate() {
  const { id } = useParams();
  const [item] = useState(DataRealEstate);
  const [data, setData] = useState(null);
  useEffect(() => {
    const foundData = DataRealEstate.find(item => item.id === id);
    setData(foundData);
  }, [id]);
//-----------------
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <>
        <section className='section'>
            <Navbar/>
            <div className='container'>
                <div className='section_title'>
                  <div className='box_title'>
                    <img src={Map} alt = 'map' />
                    <h1 className='title'>1-кімнатна квартира за адресою вул. Каманіна, Приморський</h1>
                  </div>
                  <div className='id_object'>код об'єкта <span>{id}</span></div>
                </div>

                {/* <div>
                  <img src={require('../../images/303/10.jpg')} alt="Image 1" />

                </div> */}
                
                  <div className='container_info'>
                    {/* <div className='slider-container'>
                  <Slider {...settings}>
                    {data && data.images && data.images.map((image, index) => (
                      <div key={index}>
                        <img src={data.images[index]} alt={`Image ${index + 1}`} />
                      </div>
                    ))}
                  </Slider>
                    </div> */}

                    <div className='info_text'>
                      <div className='info_subtitle'>
                        <div className='box_subtitle'>
                          <div className='key_subtitle'>
                              <img src={Price} alt='price' />
                              Ціна
                          </div>
                          15 000 грн
                        </div>
                        <div className='box_subtitle'>
                          <div className='key_subtitle'>
                              <img src={Realtor} alt='realtor' />
                              Ріелтор
                          </div>
                          Волошина Мішель
                        </div>
                      </div>
                      <div className='charact'>
                        <h4>Характеристики</h4>
                        <div className='box_charact'>
                          
                          <p>Кількість кімнат</p>
                          <p>1</p>
                        </div>

                        <div className='box_charact'>
                          <p>Поверх</p>
                          <p>3</p>
                        </div>
                        <div className='box_charact'>
                          <p>Поверховість</p>
                          <p>25</p>
                        </div>
                        <div className='box_charact'>
                          <p>Загальна площа</p>
                          <p>48</p>
                        </div>
                      </div>
                    </div>
                  </div>

                {/* src={require('./images/mops.jpeg').default} */}

                  {/* {Object.keys(data.id_pages).map((key, index) => (
                    <div key={index}>
                      <div>{data.id_pages.text1}</div>
                    </div>
                    ))}        */}

                {/* {data && data.id_pages && (
                  <div>
                      <div >
                          <div>{data.id_pages.text2}</div>
                      </div>
                 </div>
                )} */}


              </div>
        </section>
    </>
  )
}
