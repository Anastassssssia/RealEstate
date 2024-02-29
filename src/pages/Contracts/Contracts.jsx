import React, {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import DataContracts from './DataContracts.json'
import Add from "../../icon/plus.svg";
import Cancel from "../../icon/cancel.svg";

export default function Contracts() {
    const [data, setData] = useState(DataContracts);

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
                        <h1 className='title'>Договори</h1>
                        <button className='btn' >
                            <img alt='add' src={Add} className='icon_add' />
                            Створити договір
                        </button>
                    </div>

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
