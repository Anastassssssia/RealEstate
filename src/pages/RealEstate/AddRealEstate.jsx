import React, {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'

export default function AddRealEstate() {
  const [formData, setFormData] = useState({
    district: '', street: '', parade: '',  flat: '', 
    room: '', floor: '', totalFloors: '', state: '',
    area: '', liv_area: '', height: '', date: '',
    planning: '', build: '', kitchen: '', bathroom: '',
    image: '', description: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormData({
      district: '', street: '', parade: '',  flat: '', 
      room: '', floor: '', totalFloors: '', state: '',
      area: '', liv_area: '', height: '', date: '',
      planning: '', build: '', kitchen: '', bathroom: '',
      image: '', description: ''
      });
  };
  const handleFileInputChange = (event) => {
    const files = event.target.files;
  };
  const handleFileSelection = () => {
    document.getElementById('imageInput').click();
  };
    
  return (
    <>
        <section className='section'>
            <Navbar />
            <div className='container'>
                    <div className='section_title'>
                        <h1 className='title'>Додати нерухомість</h1>
                    </div>

                    <form className='form form_add' onSubmit={handleSubmit}>

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
                        <input type='text' name='street' value={formData.street} onChange={handleInputChange} required/>
                      </div>
                      
                      <div className='input_box'>
                        <label>Парадна</label>
                        <input type="number"  min="1" name="parade" value={formData.parade} onChange={handleInputChange} required/>
                      </div>

                      <div className='input_box'>
                        <label>Квартира</label>
                        <input type="number"  min="1" name="flat" value={formData.flat} onChange={handleInputChange} required/>
                      </div>
                      
                    </div>

                    <div className='form_box'>
                      <div className='input_box'>
                        <label>Кількість кімнат</label>
                        <select name='room'  value={formData.room} onChange={handleInputChange} required>
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
                        <input type="number"  min="1" max="50" name="floor" value={formData.floor} onChange={handleInputChange}/>
                      </div>

                      <div className='input_box'>
                        <label>Поверховість</label>
                        <input type="number"  min="1" max="50" name="totalFloors" value={formData.totalFloors} onChange={handleInputChange}/>
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
                        <label>Загальна площа</label>
                        <input type="number"  min="1" name="area" value={formData.area} onChange={handleInputChange}/>
                      </div>

                      <div className='input_box'>
                        <label>Жила площа</label>
                        <input type="number"  min="1" name="liv_area" value={formData.liv_area} onChange={handleInputChange}/>
                      </div>

                      <div className='input_box'>
                        <label>Висота стель</label>
                        <input type="number"  min="1" name="height"  value={formData.height} onChange={handleInputChange}/>
                      </div>
                      <div className='input_box'>
                        <label>Рік будування</label>
                        <input type='date' name="date" value={formData.date} onChange={handleInputChange}/>
                      </div>
                    </div>

                    <div className='form_box'>
                      <div className='input_box'>
                        <label>Тип планування</label>
                        <select name='planning' value={formData.planning} onChange={handleInputChange}>
                          <option value="">Оберіть тип планування</option>
                          <option value="1">роздільне</option>
                          <option value="2">прохідна</option>
                          <option value="3">суміжна</option>
                        </select>                      
                      </div>

                      <div className='input_box'>
                        <label>Тип матеріалу</label>
                        <input type="text"  name="build" value={formData.build} onChange={handleInputChange} />
                      </div>

                      <div className='input_box'>
                        <label>Тип кухні</label>
                        <input type="text"  name="kitchen" value={formData.kitchen} onChange={handleInputChange}/>
                      </div>

                      <div className='input_box'>
                        <label>Тип санвузла</label>
                        <input type="text" name="bathroom"  value={formData.bathroom} onChange={handleInputChange}/>
                      </div>
                    </div>


                    <div className='form_box_down'>
                      <div className='input_box'>
                        <label>Завантажити фото</label>
                        <button type="button" className='btn_file btn_file_add' onClick={handleFileSelection}>Вибрати фото</button>
                        <input type="file" name='image' id="imageInput" multiple value={formData.image} style={{display: 'none'}} onChange={handleFileInputChange} accept="image/png, image/jpeg"/>
                      </div>
                    </div>

                    <div className='form_box'>
                      <div className='input_box'>
                        <label>Опис</label>
                        <textarea name="description"  value={formData.description} onChange={handleInputChange}/>
                      </div>
                    </div>

                    <button type="submit" className='btn form_btn'>Створити</button>

                  </form>
            </div>
        </section>
    </>
  )
}
