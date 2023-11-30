import './OptionsBar.modules.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMemberByName } from '../../../../redux/actionsMembers';
import { RiSearchLine } from "react-icons/ri";

const SearchMember = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSearch = () => {
        if(name.trim() === ''){
            alert('Por favor, introduzca un Nombre o Apellido');
        }
        else {
            dispatch(getMemberByName(name));
            setName('');
        };
    }

  return (
    <div className='member-search-field'>
        <input 
            className='member-search-input' 
            type='search' 
            placeholder='Nombre o Apellido' 
            onChange={handleChange} 
            value={name}
        />
        <button className='search-member-button' onClick={handleSearch}><RiSearchLine /></button>
    </div>
  )
}

export default SearchMember
