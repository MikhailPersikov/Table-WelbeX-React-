import {useState, useMemo, useDeferredValue} from 'react';

import './Search.scss'

const Search = ({posts}) => {
  // const sliePosts = posts.slice(0,10);

  const [value, setValue] = useState('');
  const [data] = useState(posts);
  const defferedValue = useDeferredValue(value);

  //Нужно придумать как фильтровать по таблице. 
  const searchName = useMemo(() => {
    return data.filter(item => item.name.toLowerCase().includes(defferedValue));
  })

  const onValueChange = (e) => {
    setValue(e.target.value)
    console.log(value)
  }

  return (
    <div className="search-panel">
      <input
        className="table-input"
        type="text"
        placeholder='Поиск...'
        onChange={onValueChange} />
        {/* {searchName.map(name => (
          <div className="test" key={name.id}>
            <h3>{name.name}</h3>
          </div>
        ))} */}
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