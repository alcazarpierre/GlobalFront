import './OptionsBar.modules.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getShapers, getDeletedMembers } from '../../../../redux/actionsMembers';
import { RiPlayListAddFill, RiUserAddLine, RiTeamLine, RiUserUnfollowLine   } from "react-icons/ri";
import SearchMember from './SearchMember';

const OptionsBar = () => {
    const dispatch = useDispatch();
    const activeShapers = useSelector((state) => state.reducerMembers.allShapers);
    const deletedShapers = useSelector((state) => state.reducerMembers.deletedMembers);

    const [fieldsKey, setFiledsKey] = useState(0);
    const [selectType, setSelectType] = useState('');
    const [activeButton, setActiveButton] = useState(null);
    const [activeMemberCount, setActiveMemberCount] = useState(0);
    const [deletedMemberCount, setDeletedMemberCount] = useState(0);

    useEffect(() => {
        if(activeShapers.length === 0) {
            dispatch(getShapers());
        }
        if(deletedShapers.length === 0) {
            dispatch(getDeletedMembers());
        }
    },[]);

    useEffect(() => {
        setActiveMemberCount(activeShapers.length);
        setDeletedMemberCount(deletedShapers.length);
    }, [activeShapers, deletedShapers]);

    const showAllMembers = () => {
        dispatch(getShapers());
    }

    const showDeletedMembers = () => {
        dispatch(getDeletedMembers());
    }

    return (
        <div className='member-options-bar'>
            <div className='team-container-action-buttons'>
                <h2>Acciones:</h2>
                <Link to='/admin/equipo/crear' >
                    <button><RiUserAddLine /> Agregar Miembro</button>
                </Link>
                <Link to='/admin/equipo/roles' >
                    <button><RiPlayListAddFill /> Editar Roles</button>
                </Link>
            </div>

            <div className='team-container-show-by'>
                <h2>Mostrar: </h2>
                <button onClick={showAllMembers}><RiTeamLine /> Todos ({activeMemberCount}) </button>
                <button onClick={showDeletedMembers}><RiUserUnfollowLine /> Eliminados ({deletedMemberCount}) </button>
            </div>

            <div className='team-container-search'>
                <h2>Buscar: </h2>
                <SearchMember />
            </div>
        </div>
    );
}

export default OptionsBar;