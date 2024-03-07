import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar'
import DataContractsOwners from './DataContractsOwners.json'
import Add from "../../icon/plus.svg";
import Cancel from "../../icon/cancel.svg";

export default function ContractsOwners() {
  const [data, setData] = useState(DataContractsOwners);

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
        id_owners: '', id_realEstate: '', realtor: '',  
        type: '', max_price: '', file: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormData({
        id_owners: '', id_realEstate: '', realtor: '',  
        type: '', max_price: '', file: ''
      });
  };

  const handleFileInputChange = (event) => {
    const files = event.target.files;
  };
  const handleFileSelection = () => {
    document.getElementById('fileInput').click();
  };
//-----------------
  const [sortOption, setSortOption] = useState("1");
  
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };
//-----------------
  const [searchQuery, setSearchQuery] = useState({
    id: '',  id_owners: '',  id_realEstate: '',  type: '', type_property: '',
    realtor: '', status: '',  date_start: '',  date_end: ''
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
  const [rowsPerPage] = useState(5); 

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
//-----------------

  let sortedData = [...currentRows];
  if (sortOption === "2") {
    sortedData.sort((a, b) => new Date(b.date_start.split('.').reverse().join('.')) - new Date(a.date_start.split('.').reverse().join('.')));
  } else if (sortOption === "3") {
    sortedData.sort((a, b) => new Date(a.date_start.split('.').reverse().join('.')) - new Date(b.date_start.split('.').reverse().join('.'))); 
  }

  return (
    <>
        <section className='section'>
            <Navbar />
            <div className='container'>
              <div className='section_title'>
                  <h1 className='title'>Договори з власниками</h1>
                  <button className='btn' onClick={handleToggleForm}>
                      <img alt="add" src={Add} className='icon_add' />
                      Створити договір з власником
                  </button>
              </div>

              {showForm && (
                <div className='form_container'>
                  <div className='form_cancel'>
                    <img src={Cancel} onClick={() => setShowForm(false)}/>
                  </div>
                  <h2>Створити договір з власником</h2>
                  <form className='form' onSubmit={handleSubmit}>
                    <div className='form_box'>
                      <div className='input_box'>
                        <label>ID власника</label>
                        <input type="number" min="1" name="id_owners" value={formData.id_owners} onChange={handleInputChange} required/>
                      </div>

                      <div className='input_box'>
                        <label>ID нерухомості</label>
                        <input type="number" min="1" name="id_realEstate" value={formData.id_realEstate} onChange={handleInputChange} required/>
                      </div>

                      <div className='input_box'>
                        <label>Ріелтор</label>
                        <select name='realtor' value={formData.realtor} onChange={handleInputChange} required>
                            <option value="">Оберіть ріелтора</option>
                            <option value="1">Волошина Мішель</option>
                            <option value="2">Романенко Ігор</option>
                            <option value="3">Тимошенко Анастасія</option>
                            <option value="4">Лисенко Андрій</option>
                            <option value="5">Тарасюк Василь</option>
                            <option value="6">Ніколаєва Олена</option>
                            <option value="7">Петренко Тетяна</option>
                            <option value="8">Черненко Володимир</option>
                        </select>
                      </div>
                    </div>


                    <div className='form_box'>
                      <div className='input_box'>
                        <label>Тип угоди</label>
                        <select name='type' value={formData.type} onChange={handleInputChange} required>
                          <option value="">Оберіть тип угоди</option>
                          <option value="1">продаж</option>
                          <option value="2">оренда</option>
                        </select>
                      </div>

                      <div className='input_box'>
                        <label>Max ціна, грн</label>
                        <input type="number"  min="1" name="max_price" value={formData.max_price} onChange={handleInputChange} required/>
                      </div>

                      <div className='input_box'>
                        <label>Завантажити файли</label>
                        <button type="button" className='btn_file' onClick={handleFileSelection}>Вибрати файли</button>
                        <input type="file" name="file" id="fileInput" multiple value={formData.file} style={{display: 'none'}}  onChange={handleFileInputChange} />
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
                          <th className='column_100'>ID власника</th>
                          <th className='column_150'>ID нерухомості</th>
                          <th >Тип угоди</th>
                          <th>Тип нерухомості</th>
                          <th className='column_200'>Ріелтор</th>
                          <th>Статус</th>
                          <th>Дата початку</th>
                          <th>Дата завершення</th>
                        </tr>
                      </thead>

                      <tbody>
                          <tr>
                            <td><input className='input_search' name="id" type="search" value={searchQuery.id} onChange={handleSearch}/></td>
                            <td><input className='input_search' name="id_owners" type="search" value={searchQuery.id_owners} onChange={handleSearch}/></td>
                            <td><input className='input_search' name="id_realEstate" type="search" value={searchQuery.id_realEstate} onChange={handleSearch}/></td>
                            <td><input className='input_search' name="type" type="search" value={searchQuery.type} onChange={handleSearch}/></td>
                            <td><input className='input_search' name="type_property" type="search" value={searchQuery.type_property} onChange={handleSearch}/></td>
                            <td><input className='input_search' name="realtor" type="search" value={searchQuery.realtor} onChange={handleSearch}/></td>
                            <td><input className='input_search' name="status" type="search" value={searchQuery.status} onChange={handleSearch}/></td>
                            <td><input className='input_search' name="date_start" type="search" value={searchQuery.date_start} onChange={handleSearch}/></td>
                            <td><input className='input_search' name="date_end" type="search" value={searchQuery.date_end} onChange={handleSearch}/></td>
                          </tr>
                      
                          {sortedData.map((d, index) => (
                            <tr key={index}>
                              <td><Link to=''>{d.id}</Link></td>
                              <td><Link to=''>{d.id_owners}</Link></td>
                              <td><Link to=''>{d.id_realEstate}</Link></td>
                              <td>{d.type}</td>
                              <td>{d.type_property}</td>
                              <td>{d.realtor}</td>
                              <td>
                                <button
                                  className={d.status === "активний" ? "btn_status green" : "btn_status red"}
                                  onClick={() => handleChangeStatus(index)}
                                >
                                  {d.status}
                                </button>
                              </td>
                              <td>{d.date_start}</td>
                              <td>{d.date_end}</td>
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
