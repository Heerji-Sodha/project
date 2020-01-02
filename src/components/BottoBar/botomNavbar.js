import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {
  NavLink, Link
} from 'react-router-dom'
// const useStyles = makeStyles({
//   root: {
//     width: 500,
//   },
// });

export default function LabelBottomNavigation() {
//   const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style ={{}}>
    <BottomNavigation value={value} onChange={handleChange}  style={{width:'100%'}}>
      <Link to="/chat">          
      <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
      </Link>
      <Link to="/wallet">
      <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
      </Link>
      <Link to="/lists">
      <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
      </Link>
      <Link to="orderlist">
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
      </Link>
      <Link to="settings">
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
      </Link>
    </BottomNavigation>
    </div>
  );
}
