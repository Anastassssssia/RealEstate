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
      name_group: '',
      course: '',
      start: '',
      term: '',
      coach: '',
      type: '1'
    });

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      setFormData({
          name_group: '',
          course: '',
          start: '',
          term: '',
          coach: '',
          type: ''
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
          <Navbar/>
          <div className='container'>
              <div className='section_title'>
                  <h1 className='title'>Нерухомість</h1>
                  <Link className='btn' to='/addRealEstate'> 
                      <img alt="add" src={Add} className='icon_add' />
                      Додати нерухомість
                  </Link>
              </div>

              {showForm && (
                <div className='form_container'>
                  <div className='form_cancel'>
                    <img src={Cancel} onClick={() => setShowForm(false)}/>
                  </div>
                  <h2>Додати нерухомість</h2>
                  <form className='form' onSubmit={handleSubmit}>
                    <div className='form_box'>

                      <div className='input_box'>
                        <label>Назва групи</label>
                        <input type="text" name="name_group" value={formData.name_group} onChange={handleInputChange} required/>
                      </div>

                      <div className='input_box'>
                        <label>Курс</label>
                        <input type="number"  name="course" value={formData.course} onChange={handleInputChange} required/>
                      </div>

                    </div>
                    
                    <div className='form_box'>
                      <div className='input_box'>
                        <label>Старт</label>
                        <input type="date" name="start" value={formData.start} onChange={handleInputChange} required/>
                      </div>

                      <div className='input_box'>
                        <label>Тип групи</label>
                        <select name='type' value={formData.type} onChange={handleInputChange}>
                          <option value="1">група</option>
                          <option value="2">індивідуально</option>
                        </select>
                      </div>
                    </div>
                    <div className='form_box'>

                      <div className='input_box'>
                        <label>Термін, тижд.</label>
                        <input type="number"  min="1" name="term" value={formData.term} onChange={handleInputChange} required/>
                      </div>

                      <div className='input_box'>
                        <label>Тренер</label>
                        <input type="number" name="coach" value={formData.coach} onChange={handleInputChange} required/>
                      </div>

                      
                    </div>
                    <button type="submit" className='btn form_btn'>Додати</button>

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
                          <th>Район</th>
                          <th >Вулиця</th>
                          <th>Ціна, грн</th>
                          <th>Тип угоди</th>
                          <th className='column_50'>Кімнат</th>
                          <th className='column_100'>Площа, м<sup>2</sup></th>
                          <th className='column_50'>Поверх</th>
                          <th className='column_200'>Ріелтор</th>
                          <th>Статус</th>
                        </tr>
                      </thead>

                      <tbody>
                          <tr>
                            <td><input className='input_search' name="id" type="search" /></td>
                            <td><input className='input_search' name="district" type="search" /></td>
                            <td><input className='input_search' name="street" type="search" /></td>
                            <td><input className='input_search' name="price" type="search" /></td>
                            <td><input className='input_search' name="type" type="search" /></td>
                            <td><input className='input_search' name="room" type="search" /></td>
                            <td><input className='input_search' name="area" type="search" /></td>
                            <td><input className='input_search' name="floor" type="search" /></td>
                            <td><input className='input_search' name="realtor" type="search" /></td>
                            <td><input className='input_search' name="status" type="search" /></td>
                          </tr>
                      
                          {currentRows.map((d, index) => (
                            <tr key={index}>
                              <td><Link to={d.id}>{d.id}</Link></td>
                              <td>{d.district}</td>
                              <td>{d.street}</td>
                              <td>{d.price}</td>
                              <td>{d.type}</td>
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
