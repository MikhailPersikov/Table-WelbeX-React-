import {useState} from 'react';

import './Search.scss'

const Search = ({posts, filtredNames}) => {
  // const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  // const defferedValue = useDeferredValue(value);

  // console.log(data)

  const onValueChange = (e) => {
    filtredNames(e.target.value)
  }
  
  // console.log('render')

  // console.log(`rerendering`)
  return (
    <div className="search-panel">
      <input
        className="table-input"
        type="text"
        placeholder='Поиск...'
        onChange={onValueChange}
         />
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
      {/* {searchName.map(name => (
          <div className="test" key={name.id}>
            <h3>{name.name}</h3>
          </div>
        ))} */}
    </div>
  )
}

export default Search;