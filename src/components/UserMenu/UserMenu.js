import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { Button, MenuItem } from '@mui/material';


function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    return (
        <>
        <MenuItem >
            <p>{name}</p>
             </MenuItem>
      
                <Button variant='outlined' size='small' onClick={() => dispatch(authOperations.logOut())} type="button">Logout</Button>
            </>

)
}

export default UserMenu;