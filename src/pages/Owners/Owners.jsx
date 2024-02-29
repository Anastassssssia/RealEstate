import React, {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import DataOwners from './DataOwners.json'
import Add from "../../icon/plus.svg";
import Cancel from "../../icon/cancel.svg";

export default function Owners() {
  const [data, setData] = useState(DataOwners);

//-----------------
  const [showForm, setShowForm] = useState(false);
  const handleToggleForm = () => {
    if (!showForm) {
      setShowForm(true);
    }
  };

  const [formData, setFormData] = useState({
    surname: '', name: '', patronymic: '',
    phone: '', email: '', birthday: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormData({
      surname: '', name: '', patronymic: '',
      phone: '', email: '', birthday: ''
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
                    <h1 className='title'>Власники</h1>
                    <button className='btn' onClick={handleToggleForm}>
                        <img alt="add" src={Add} className='icon_add' />
                        Додати власника
                    </button>
                </div>

                {showForm && (
                  <div className='form_container'>
                      <div className='form_cancel'>
                        <img src={Cancel} onClick={() => setShowForm(false)}/>
                      </div>
                      <h2>Додати нового власника</h2>
                      <form className='form' onSubmit={handleSubmit}>
                          <div className='form_box'>
                            <div className='input_box'>
                              <label>Прізвище</label>
                              <input type="text" name="surname" value={formData.surname} onChange={handleInputChange} required/>
                            </div>
                            <div className='input_box'>
                              <label>Ім'я</label>
                              <input type="text"  name="name" value={formData.name} onChange={handleInputChange} required/>
                            </div>
                            <div className='input_box'>
                              <label>По-батькові</label>
                              <input type="text" name="patronymic" value={formData.patronymic} onChange={handleInputChange} />
                            </div>
                          </div>


                          <div className='form_box'>
                              <div className='input_box'>
                                <label>Телефон</label>
                                <input type="tel"  name="phone" value={formData.phone} onChange={handleInputChange} required/>
                              </div>
                              <div className='input_box'>
                                <label>Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required/>
                             </div>
                            <div className='input_box'>
                              <label>День народження</label>
                              <input type="date" name="birthday" value={formData.birthday} onChange={handleInputChange} required/>
                            </div>
                          </div>
                          <button type="submit" className='btn form_btn'>Додати</button>
                      </form>
                  </div>
                )}

                <div className='table_wrapper'>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th className='column_80'>ID</th>
                        <th>ПІБ</th>
                        <th>Телефон</th>
                        <th>Пошта</th>
                        <th>День народження</th>
                        <th>Статус</th>
                      </tr>
                    </thead>
                  
                    <tbody>
                      <tr>
                        <td><input className='input_search' name="id" type="search" /></td>
                        <td><input className='input_search' name="name_owner" type="search" /></td>
                        <td><input className='input_search' name="phone" type="search" /></td>
                        <td><input className='input_search' name="email" type="search" /></td>
                        <td><input className='input_search' name="hb" type="search" /></td>
                        <td><input className='input_search' name="status" type="search" /></td>
                      </tr>

                      {currentRows.map((d, index) => (
                        <tr key={index}>
                          <td>{d.id}</td>
                          <td>{d.name_owner}</td>
                          <td>{d.phone}</td>
                          <td>{d.email}</td>
                          <td>{d.hb}</td>
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
        </section>
    </>
  )
}
