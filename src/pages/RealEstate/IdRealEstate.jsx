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
import Room from '../../icon/room.svg'
import Floor from '../../icon/floor.svg'
import Floors from '../../icon/floors.svg'
import Area from '../../icon/area.svg'
import AreaLiv from '../../icon/area_liv.svg'
import Height from '../../icon/height.svg'
import State from '../../icon/state.svg'
import Planning from '../../icon/drawing.svg'
import Kitchen from '../../icon/kitchen.svg'
import Bathroom from '../../icon/bathroom.svg'
import Build from '../../icon/build.svg'
import Calendar from '../../icon/calendar.svg'


export default function IdRealEstate() {
  const { id } = useParams();
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
                    {data && (
                      <h1 className='title'>{data.room}-кімн. {data.type_property} за адресою вул. {data.street}, {data.district} район</h1>
                    )}
                    </div>
                  <div className='id_object'>код об'єкта <span>{id}</span></div>
                </div>
                
                  <div className='container_info'>
                    <div className='slider-container'>
                      <Slider {...settings}>
                        {data && data.images && data.images.map((image, index) => (
                          <div key={index}>
                            <img src={data.images[index]} alt={`Image ${index + 1}`} />
                          </div>
                        ))}
                      </Slider>
                    </div>

                    <div className='info_text'>
                      <div className='info_subtitle'>
                        <div className='box_space'>
                          <div className='box_subtitle'>
                          <div className='key_subtitle'>
                              <img src={Price} alt='price' />
                              Ціна
                          </div>
                          {data && (
                            <div>{data.price} грн</div>
                          )}
                          </div>
                          <div className='box_subtitle'>
                            <div className='key_subtitle'>
                              <img src={Price} alt='price' />
                              Тип угоди
                            </div>
                            {data && (
                              <div>{data.type}</div>
                            )}
                          </div>
                          
                        </div>
                        
                        <div className='box_subtitle'>
                          <div className='key_subtitle'>
                              <img src={Realtor} alt='realtor' />
                              Ріелтор
                          </div>
                          {data && (
                            <div>{data.realtor}</div>
                          )}
                        </div>
                      </div>
                      <div className='charact'>
                        <h4>Характеристики</h4>
                        <div className='container_charact'>
                          <table className='table_charact'>
                          <tbody>
                            <tr>
                              <th><img src={Room} alt='room' />Кількість кімнат</th>
                              {data && (
                                <td>{data.room}</td>
                              )}
                            </tr>
                            <tr>
                              <th><img src={Floor} alt='floor' />Поверх</th>
                              {data && (
                                <td>{data.floor}</td>
                              )}
                            </tr>
                            <tr>
                              <th><img src={Floors} alt='floors' />Поверховість</th>
                              {data && (
                                <td>{data.floors}</td>
                              )}
                            </tr>
                            <tr>
                              <th><img src={Area} alt='area' />Загальна площа</th>
                              {data && (
                                <td>{data.area}</td>
                              )}
                            </tr>
                            <tr>
                              <th><img src={AreaLiv} alt='area_liv' />Жила площа</th>
                              {data && (
                                <td>{data.area_liv}</td>
                              )}
                            </tr>
                            <tr>
                              <th><img src={Height} alt='height' />Висота стель</th>
                              {data && (
                                <td>{data.height}</td>
                              )}
                            </tr>
                          </tbody>
                          </table>
                          <table className='table_charact'>
                          <tbody>
                            <tr>
                              <th><img src={State} alt='state' />Загальний стан</th>
                              {data && (
                                <td>{data.state}</td>
                              )}
                            </tr>
                            <tr>
                              <th><img src={Planning} alt='planning' />Тип планування</th>
                              {data && (
                                <td>{data.planning}</td>
                              )}
                            </tr>
                            <tr>
                              <th><img src={Kitchen} alt='kitchen' />Тип кухні</th>
                              {data && (
                                <td>{data.kitchen}</td>
                              )}
                            </tr>
                            <tr>
                              <th><img src={Bathroom} alt='bathroom' />Тип санвузла</th>
                              {data && (
                                <td>{data.bathroom}</td>
                              )}
                            </tr>
                            <tr>
                              <th><img src={Build} alt='build' />Тип матеріалу</th>
                              {data && (
                                <td>{data.build}</td>
                              )}
                            </tr>
                            <tr>
                              <th><img src={Calendar} alt='calendar' />Рік будування</th>
                              {data && (
                                <td>{data.year}</td>
                              )}
                            </tr>
                          </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='description'>
                  {data && (
                      <p>{data.description}</p>
                    )}
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
