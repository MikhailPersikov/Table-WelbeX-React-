import React from 'react';

import './Search.scss'

const Search = ({ onChange }) => {
  // const search = (data) => {
  //       return data.filter((item) =>
  //         keys.some((key) => item[key].toLowerCase().includes(query))
  //       );
  //     };

  const handleInputChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className="search-panel">
      <input
        className="table-input"
        type="text"
        placeholder='Поиск...'
        onChange={handleInputChange} />
      <select name="" id="">
        <option value="name">Название</option>
        <option value="quantity">Количество</option>
        <option value="distance">Дистанция</option>
      </select>
      <select name="" id="">
        <option value="equel">Равно</option>
        <option value="contain">Содержит</option>
        <option value="more">Больше</option>
        <option value="less">Меньше</option>
      </select>
    </div>
  )
}

export default Search;