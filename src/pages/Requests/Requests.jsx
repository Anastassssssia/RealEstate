import React, {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import DataRequests from './DataRequests.json'
import Add from "../../icon/plus.svg";
import Cancel from "../../icon/cancel.svg";

export default function Requests() {
  const [data, setData] = useState(DataRequests);

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
    id_clients: '', realtor: '', max_price: '',
    district: '', goal: '', type_property: '',
    room: '', floor:'', totalFloors: '',
    area: '', liv_area: '', state: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormData({
        id_clients: '', realtor: '', max_price: '',
        district: '', goal: '', type_property: '',
        room: '', floor:'', totalFloors: '',
        area: '', liv_area: '', state: ''
      });
  };
//-----------------

  const handleChangeStatus = (index) => {
    const newData = [...data];
    newData[index].status = newData[index].status === "активний" ? "неактивний" : "активний";
    setData(newData);
  };
//-----------------
const [currentPage, setCurrentPage] = useState(1);
const [rowsPerPage] = useState(5); 

const indexOfLastRow = currentPage * rowsPerPage;
const indexOfFirstRow = indexOfLastRow - rowsPerPage;
const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <section className='section'>
          <Navbar />
          <div className='container'>
              <div className='section_title'>
                <h1 className='title'>Заявки</h1>
                <button className='btn' onClick={handleToggleForm}> 
                      <img alt="add" src={Add} className='icon_add' />
                      Створити заявку
                </button>
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
                        <label>ID клієнта</label>
                        <input type="number" min="1" name="id_clients" value={formData.id_clients} onChange={handleInputChange} required/>
                      </div>

                      <div className='input_box'>
                        <label>Ріелтор</label>
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
                        <label>Max ціна, грн</label>
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
                        <label>Мета</label>
                        <select name='goal' value={formData.goal} onChange={handleInputChange} required>
                          <option value="">Оберіть мету</option>
                          <option value="1">оренда</option>
                          <option value="2">купити</option>
                        </select>
                      </div>

                      <div className='input_box'>
                        <label>Тип нерухомості</label>
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
                        <label>Поверх мінімальний</label>
                        <input type="number"  min="1" max="50" name="floor" value={formData.floor} onChange={handleInputChange} />
                      </div>

                      <div className='input_box'>
                        <label>Поверх максимальний</label>
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
                        <select name="select">
                          <option value='1'>за замовчуванням</option>
                          <option value='2'>від нових до старих</option>
                          <option value='3'>від старих до нових</option>
                        </select>
                      </div>
                  </div>

                  <div className='table_wrapper'>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th className='column_80'>ID</th>
                          <th className='column_100'>ID клієнта</th>
                          <th >Мета</th>
                          <th>Тип нерухомості</th>
                          <th>Район</th>
                          <th className='column_150'>Max ціна, грн</th>
                          <th className='column_50'>Кімнат</th>
                          <th className='column_200'>Ріелтор</th>
                          <th>Статус</th>
                          <th>Дата</th>
                        </tr>
                      </thead>

                      <tbody>
                          <tr>
                            <td><input className='input_search' name="id" type="search" /></td>
                            <td><input className='input_search' name="id_clients" type="search" /></td>
                            <td><input className='input_search' name="goal" type="search" /></td>
                            <td><input className='input_search' name="type_property" type="search" /></td>
                            <td><input className='input_search' name="district" type="search" /></td>
                            <td><input className='input_search' name="max_price" type="search" /></td>
                            <td><input className='input_search' name="room" type="search" /></td>
                            <td><input className='input_search' name="realtor" type="search" /></td>
                            <td><input className='input_search' name="status" type="search" /></td>
                            <td><input className='input_search' name="date" type="search" /></td>
                          </tr>
                      
                          {currentRows.map((d, index) => (
                            <tr key={index}>
                              <td>{d.id}</td>
                              <td>{d.id_clients}</td>
                              <td>{d.goal}</td>
                              <td>{d.type_property}</td>
                              <td>{d.district}</td>
                              <td>{d.max_price}</td>
                              <td>{d.room}</td>
                              <td>{d.realtor}</td>
                              <td>
                                <button
                                  className={d.status === "активний" ? "btn_status green" : "btn_status red"}
                                  onClick={() => handleChangeStatus(index)}
                                >
                                  {d.status}
                                </button>
                              </td>

                              <td>{d.date}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="pagination">
                    {Array.from({ length: Math.ceil(data.length / rowsPerPage) }).map((_, index) => (
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
