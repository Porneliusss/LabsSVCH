import React, { useState  } from 'react';
import '../styles/ModalUpdate.css';

const ModalUpdate = ({ show, onClose, product, updateProduct }) => {
    const [editedProduct, setEditedProduct] = useState({ ...product });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditedProduct({ ...editedProduct, [name]: value });
    };
  
    const handleUpdate = () => {
      updateProduct(editedProduct);
      onClose();
    };
  
    return (
      <div className={`modalupdate-container ${show ? 'modalupdate-display-block' : ''}`}>
        <div className="modalupdate-main">
          <button onClick={onClose} className="close">&times;</button>
          <h2>Редактировать продукт</h2>
          <form onSubmit={handleUpdate} className="form-update  ">
            <input
              type="text"
              name="name"
              value={editedProduct.name}
              onChange={handleInputChange}
              placeholder="Название продукта"
            />
            <textarea
            name="description"
              value={editedProduct.description}
             onChange={handleInputChange}
             placeholder="Описание продукта"
             rows={4}
             className="w-100"
            />
            <input
              type="text"
              name="type"
              value={editedProduct.type}
              onChange={handleInputChange}
              placeholder="Тип продукта"
            />
            <input
              type="number"
              name="price"
              value={editedProduct.price}
              onChange={handleInputChange}
              placeholder="Цена"
            />
            <input
              type="number"
              name="weight"
              value={editedProduct.weight}
              onChange={handleInputChange}
              placeholder="Вес"
            />
            <select name="quality" value={editedProduct.quality} onChange={handleInputChange}>
             <option value="Хорошее">Хорошее</option>
             <option value="Среднее">Среднее</option>
             <option value="Плохое">Плохое</option>
            </select>
            <button type="save" className="save-button">Сохранить</button>
          </form>
        </div>
      </div>
    );
  };  

  export default ModalUpdate;
