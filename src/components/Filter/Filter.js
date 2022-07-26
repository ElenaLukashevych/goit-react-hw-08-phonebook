import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {getFilter} from 'redux/contacts/selectors';
import { changeFilter } from "redux/contacts/slice";


function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onChange = (event) => {
    dispatch(changeFilter(event.currentTarget.value))
  }

    return (
        <label className={s.label}>Find contacts by name
          <input className={s.input} type='text' value={value} onChange={onChange}/>
        </label>
    )
}

export default Filter;