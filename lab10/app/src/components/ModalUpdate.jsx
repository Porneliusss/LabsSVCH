import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct as updateProductAction, updateEditedProduct as updateEditedProductAction } from '../redux/actions';
import '../styles/ModalUpdate.css';

const ModalUpdate = ({ show, onClose, product, updateProduct }) => {
  const dispatch = useDispatch();
  const editedProduct = useSelector((state) => state.editedProduct);

  useEffect(() => {
    dispatch(updateEditedProductAction({ ...product }));  
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateEditedProductAction({ ...editedProduct, [name]: value }));  
  };

  const handleUpdate = () => {
    dispatch(updateProductAction(editedProduct));
    onClose();
  };

  return (
    <div className={`modalupdate-container ${show ? 'modalupdate-display-block' : ''}`}>
      <div className="modalupdate-main">
        <button onClick={onClose} className="close">&times;</button>
        <h2>Редактировать продукт</h2>
        <form onSubmit={handleUpdate} className="form-update">
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
            <button type="save" className="save-button" onClick={() => updateProduct(editedProduct)}>Сохранить</button>
          </form>
        </div>
      </div>
    );
  };  

  export default ModalUpdate;
