import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions';
import '../styles/ModalAdd.css';

const ModalAdd = ({ onClose, onAddProduct }) => {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    type: '',
    weight: '',
    quality: 'Высокое',
    price: '',
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(newProduct));
    onClose();
  };

  return (
    <div className="modal-add">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Название продукции"
        />
        <textarea
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
          placeholder="Описание качества продукции"
          rows="4"
          style={{ width: '100%', maxWidth: '100%', resize: 'none' }}
        />
        <input
          type="text"
          name="type"
          value={newProduct.type}
          onChange={handleInputChange}
          placeholder="Тип продукции"
        />
        <input
          type="text"
          name="weight"
          value={newProduct.weight}
          onChange={handleInputChange}
          placeholder="Вес продукции (кг)"
        />
        <input
          type="text"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Цена продукции (р)"
        />
        <input
          type="text"
          name="image"
          value={newProduct.image}
          onChange={handleInputChange}
          placeholder="Ссылка на изображение продукции"
        />
        <label htmlFor="quality">Качество продукции: </label>
        <select
          name="quality"
          value={newProduct.quality}
          onChange={handleInputChange}
        >
          <option value="Высокое">Высокое</option>
          <option value="Среднее">Среднее</option>
          <option value="Низкое">Низкое</option>
        </select>
        <button type="submit" className="submit-button" onClick={() => onAddProduct(newProduct)}><strong>Добавить</strong></button>
        <button onClick={onClose} className="cancel-button"><strong>Отмена</strong></button>
      </form>
    </div>
  );

};

export default ModalAdd;
