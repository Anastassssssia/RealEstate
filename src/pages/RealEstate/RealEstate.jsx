import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar'
import DataRealEstate from './DataRealEstate.json'
import Add from "../../icon/plus.svg";
import Cancel from "../../icon/cancel.svg";

export default function RealEstate() {
  const [data, setData] = useState(DataRealEstate);

  const [toggle, setToggle] = useState(2);
    function updateToggle(id) {
         setToggle(id)
    }

//-----------------
    const [showForm, setShowForm] = useState(false);
    const handleToggleForm = () => {
      if (!showForm) {
        setShowForm(true);
      }
    };

    const [formData, setFormData] = useState({
      id: '',  district: '',  street: '',  price: '', type: '',
      room: '', area: '',  floor: '', realtor: '',  status: '' 
    });

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      setFormData({
        id: '',  district: '',  street: '',  price: '', type: '', 
        room: '', area: '',  floor: '', realtor: '',  status: '' 
        });
    };
//-----------------

  const [sortOption, setSortOption] = useState("1");
  
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };
//-----------------

  const [searchQuery, setSearchQuery] = useState({
    id: '',  district: '',  street: '',  price: '', type: '', type_property: '',
    room: '', area: '',  floor: '', realtor: '',  status: '' 
  });

  const handleSearch = (event) => {
    const { name, value } = event.target;
    setSearchQuery({ ...searchQuery, [name]: value });
  };

  let filteredData = data.filter((row) => {
    return Object.keys(searchQuery).every((key) =>
      row[key].toString().toLowerCase().includes(searchQuery[key].toLowerCase())
    );
  });

  if (toggle === 2) {
    filteredData = filteredData.filter((row) => row.status === 'активний');
  } else if (toggle === 3) {
    filteredData = filteredData.filter((row) => row.status === 'неактивний');
  }
//-----------------

  const handleChangeStatus = (index) => {
    const newData = [...data];
    newData[index].status = newData[index].status === "активний" ? "неактивний" : "активний";
    setData(newData);
  };
//-----------------
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10); 

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
//-----------------

  let sortedData = [...currentRows];
  if (sortOption === "2"){
    sortedData.sort((a, b) => {
      const priceA = parseInt(a.price.replace(/\s/g, ''), 10);
      const priceB = parseInt(b.price.replace(/\s/g, ''), 10);
      return priceA - priceB;
    });
  } else if (sortOption === "3"){
    sortedData.sort((a, b) => {
      const priceA = parseInt(a.price.replace(/\s/g, ''), 10);
      const priceB = parseInt(b.price.replace(/\s/g, ''), 10);
      return priceB - priceA;
    });
  } else if (sortOption === "4") {
    sortedData.sort((a, b) => new Date(b.date.split('.').reverse().join('.')) - new Date(a.date.split('.').reverse().join('.')));
  } else if (sortOption === "5") {
    sortedData.sort((a, b) => new Date(a.date.split('.').reverse().join('.')) - new Date(b.date.split('.').reverse().join('.'))); 
  }

  return (
    <>
      <section className='section'>
          <Navbar/>
          <div className='container'>
              <div className='section_title'>
                  <h1 className='title'>Нерухомість</h1>
                  <Link className='btn' to='/addRealEstate'> 
                      <img alt="add" src={Add} className='icon_add' />
                      Додати нерухомість
                  </Link>
                  {/* <button className='btn' onClick={handleToggleForm}> 
                      <img alt="add" src={Add} className='icon_add' />
                      Додати нерухомість
                </button> */}
              </div>

              {showForm && (
                <div className='form_container'>
                  <div className='form_cancel'>
                    <img src={Cancel} onClick={() => setShowForm(false)}/>
                  </div>
                  <h2>Створити заявку</h2>
                  <form className='form' onSubmit={handleSubmit}>
                    <div className='form_box'>
                      <div className='input_box'>
                        <label>Тип нерухомості</label>
                        <input type="number" min="1" name="id_clients" value={formData.id_clients} onChange={handleInputChange} required/>
                      </div>

                      <div className='input_box'>
                        <label>Тип угоди</label>
                        <select name='realtor' value={formData.realtor} onChange={handleInputChange} required>
                          <option value="">Оберіть ріелтора</option>
                          <option value="1">Волошина Мішель</option>
                          <option value="2">Шевченко Анна </option>
                          <option value="3">Михайленко Сергій </option>
                          <option value="4">Ковальчук Євгенія </option>
                          <option value="5">Громов Артем </option>
                          <option value="6">Кравченко Михайло </option>
                        </select>
                      </div>

                      <div className='input_box'>
                        <label>Ріелтор</label>
                        <input type="number"  min="1" name="max_price" value={formData.max_price} onChange={handleInputChange} required/>
                      </div>
                    </div>


                    <div className='form_box'>
                      <div className='input_box'>
                        <label>Район</label>
                        <select name='district' value={formData.district} onChange={handleInputChange} required>
                          <option value="">Оберіть район</option>
                          <option value="1">Київський</option>
                          <option value="2">Приморський</option>
                          <option value="3">Пересипський</option>
                          <option value="4">Хаджибейський</option>
                        </select>
                      </div>
                      <div className='input_box'>
                        <label>Вулиця</label>
                        <select name='goal' value={formData.goal} onChange={handleInputChange} required>
                          <option value="">Оберіть мету</option>
                          <option value="1">оренда</option>
                          <option value="2">купити</option>
                        </select>
                      </div>

                      <div className='input_box'>
                        <label>Ціна</label>
                        <select name='type_property' value={formData.type_property} onChange={handleInputChange} required>
                          <option value="">Оберіть тип нерухомості</option>
                          <option value="1">квартира</option>
                          <option value="2">будинок</option>
                        </select>
                      </div>
                    </div>

                    <div className='form_box'>
                      <div className='input_box'>
                        <label>Кількість кімнат</label>
                        <select name='room' value={formData.room} onChange={handleInputChange} required>
                          <option value="">Оберіть кількість кімнат</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5+</option>
                        </select>
                      </div>

                      <div className='input_box'>
                        <label>Поверх</label>
                        <input type="number"  min="1" max="50" name="floor" value={formData.floor} onChange={handleInputChange} />
                      </div>

                      <div className='input_box'>
                        <label>Поверховість</label>
                        <input type="number"  min="1" max="50" name="totalFloors" value={formData.totalFloors} onChange={handleInputChange} />
                      </div>
                    </div>


                    <div className='form_box'>
                      <div className='input_box'>
                        <label>Загальна площа</label>
                        <input type="number"  min="1" name="area" value={formData.area} onChange={handleInputChange} />
                      </div>

                      <div className='input_box'>
                        <label>Жила площа</label>
                        <input type="number"  min="1" name="liv_area" value={formData.liv_area} onChange={handleInputChange} />
                      </div>

                      <div className='input_box'>
                        <label>Загальний стан</label>
                        <select name='state' value={formData.state} onChange={handleInputChange}>
                          <option value="">Оберіть загальний стан</option>
                          <option value="1">євроремонт</option>
                          <option value="2">житло чисте</option>
                          <option value="3">потребує ремонту</option>
                        </select>
                      </div>
                    </div>

                    <div className='form_box'>
                      <div className='input_box'>
                        <label>Висота стель</label>
                        <input type="number"  min="1" name="area" value={formData.area} onChange={handleInputChange} />
                      </div>

                      <div className='input_box'>
                        <label>Тип планування</label>
                        <input type="number"  min="1" name="liv_area" value={formData.liv_area} onChange={handleInputChange} />
                      </div>

                      <div className='input_box'>
                        <label>Тип матеріалу</label>
                        <select name='state' value={formData.state} onChange={handleInputChange}>
                          <option value="">Оберіть загальний стан</option>
                          <option value="1">євроремонт</option>
                          <option value="2">житло чисте</option>
                          <option value="3">потребує ремонту</option>
                        </select>
                      </div>
                    </div>

                    <div className='form_box'>
                      <div className='input_box'>
                        <label>Тип санвузла</label>
                        <input type="number"  min="1" name="area" value={formData.area} onChange={handleInputChange} />
                      </div>

                      <div className='input_box'>
                        <label>Тип кухні</label>
                        <input type="number"  min="1" name="liv_area" value={formData.liv_area} onChange={handleInputChange} />
                      </div>

                      <div className='input_box'>
                        <label>Рік будування</label>
                        <select name='state' value={formData.state} onChange={handleInputChange}>
                          <option value="">Оберіть загальний стан</option>
                          <option value="1">євроремонт</option>
                          <option value="2">житло чисте</option>
                          <option value="3">потребує ремонту</option>
                        </select>
                      </div>
                    </div>

                    <div className='form_box'>
                      <div className='input_box'>
                        <label>Завантажити фото</label>
                        <input type="number"  min="1" name="area" value={formData.area} onChange={handleInputChange} />
                      </div>

                      <div className='input_box'>
                        <label>Опис</label>
                        <input type="number"  min="1" name="liv_area" value={formData.liv_area} onChange={handleInputChange} />
                      </div>

                     
                    </div>

                    <button type="submit" className='btn form_btn'>Створити</button>

                  </form>
                </div>
              )}

              <div>
                  <div className='subtitle'>
                      <div className='subtitle_left'>
                        <h4 className={toggle === 1 ? "left_active" : "left_inactive" } onClick={()=>updateToggle(1)}>Все</h4>
                        <h4 className={toggle === 2 ? "left_active" : "left_inactive" } onClick={()=>updateToggle(2)}>Актуальне</h4>
                        <h4 className={toggle === 3 ? "left_active" : "left_inactive" } onClick={()=>updateToggle(3)}>Неактуальне</h4>
                      </div>
                      <div className='subtitle_right'>
                        <h4>Сортувати</h4>
                        <select name="select" value={sortOption} onChange={handleSortChange}>
                          <option value='1'>за замовчуванням</option>
                          <option value='2'>від дешевих до дорогих</option>
                          <option value='3'>від дорогих до дешевих</option>
                          <option value='4'>від нових до старих</option>
                          <option value='5'>від старих до нових</option>
                        </select>
                      </div>
                  </div>

                  <div className='table_wrapper'>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th className='column_80'>ID</th>
                          <th>Тип об'єкта</th>
                          <th>Тип угоди</th>
                          <th>Ціна, грн</th>
                          <th>Район</th>
                          <th className='column_200'>Вулиця</th>
                          <th className='column_50'>Кімнат</th>
                          <th className='column_100'>Площа, м<sup>2</sup></th>
                          <th className='column_50'>Поверх</th>
                          <th className='column_200'>Ріелтор</th>
                          <th className='column_80'>Статус</th>
                        </tr>
                      </thead>

                      <tbody>
                          <tr>
                            <td><input className='input_search' name="id" type="search" value={searchQuery.id} onChange={handleSearch} /></td>
                            <td><input className='input_search' name="type_property" type="search" value={searchQuery.type_property} onChange={handleSearch} /></td>
                            <td><input className='input_search' name="type" type="search" value={searchQuery.type} onChange={handleSearch} /></td>
                            <td><input className='input_search' name="district" type="search" value={searchQuery.district} onChange={handleSearch} /></td>
                            <td><input className='input_search' name="street" type="search" value={searchQuery.street} onChange={handleSearch} /></td>
                            <td><input className='input_search' name="price" type="search" value={searchQuery.price} onChange={handleSearch} /></td>
                            <td><input className='input_search' name="room" type="search" value={searchQuery.room} onChange={handleSearch} /></td>
                            <td><input className='input_search' name="area" type="search" value={searchQuery.area} onChange={handleSearch} /></td>
                            <td><input className='input_search' name="floor" type="search" value={searchQuery.floor} onChange={handleSearch} /></td>
                            <td><input className='input_search' name="realtor" type="search" value={searchQuery.realtor} onChange={handleSearch} /></td>
                            <td><input className='input_search' name="status" type="search" value={searchQuery.status} onChange={handleSearch} /></td>
                          </tr>
                      
                          {sortedData.map((d, index) => (
                            <tr key={index}>
                              <td><Link to={d.id}>{d.id}</Link></td>
                              <td>{d.type_property}</td>
                              <td>{d.type}</td>
                              <td>{d.price}</td>
                              <td>{d.district}</td>
                              <td>{d.street}</td>
                              <td>{d.room}</td>
                              <td>{d.area}</td>
                              <td>{d.floor}</td>
                              <td>{d.realtor}</td>
                              <td>
                                <button
                                  className={d.status === "активний" ? "btn_status green" : "btn_status red"}
                                  onClick={() => handleChangeStatus(index)}
                                >
                                  {d.status}
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="pagination">
                    {Array.from({ length: Math.ceil(filteredData.length / rowsPerPage) }).map((_, index) => (
                      <button key={index} className={currentPage === index + 1 ? 'btn_pagin_active' : 'btn_pagin_inactive'} onClick={() => paginate(index + 1)}>
                        {index + 1}
                      </button>
                    ))}
                  </div>
              </div>
              
          </div>
      </section>
      
    </>
  )
}
