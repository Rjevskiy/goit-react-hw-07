import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice'; // Используем changeFilter для изменения фильтра
import './SearchBox.css';

const SearchBox = () => {
  const filter = useSelector((state) => state.filters.name); // Смотрим фильтр по имени
  const searchType = useSelector((state) => state.filters.searchType); // Смотрим тип поиска
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(changeFilter({ name: 'name', value: e.target.value })); // Обновляем фильтр по имени
  };

  const handleSearchTypeChange = (e) => {
    dispatch(changeFilter({ name: 'searchType', value: e.target.value })); // Обновляем тип поиска
  };

  return (
    <div className="divSBox">
      <label className="search-label">Пошук контакту:</label>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Пошук контакту:"
      />
      <div className="labelRadio">
        <label>
          <input
            type="radio"
            value="name"
            name="searchType"
            checked={searchType === 'name'}
            onChange={handleSearchTypeChange}
          />
          Введіть ім'я
        </label>
        <label>
          <input
            type="radio"
            value="number"
            name="searchType"
            checked={searchType === 'number'}
            onChange={handleSearchTypeChange}
          />
          Введіть номер
        </label>
      </div>
    </div>
  );
};

export default SearchBox;






