import React, { useContext, useEffect, useState } from 'react'
import styles from './Profile.module.css';
import { toast } from 'react-toastify';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import ThemeContext from '../context/themeContext';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import GitHubIcon from '@material-ui/icons/GitHub';

const Profile = () => {
  const [username, setUsername] = useState('Witcher0766');
  const [userData, setUserData] = useState({});
  const [isDarkMode, setDarkMode] = useState(false);
  const {toggleTheme, theme} = useContext(ThemeContext);


  useEffect(() => {
    fetchData(); 
  }, []); 


  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();

      if (response.ok) {
        setUserData(data);
      } else {
        toast.error('Error fetching data:', data.message);
      }
    } catch (error) {
      toast.error('Error:', error);
    }
  };
  // console.log(userData);
  const {avatar_url, bio, created_at, followers, following,
  location, public_repos, name, blog, html_url } = userData;


  const toggleDarkMode = (checked) => {
    if(theme === "light") {
      setDarkMode(checked);
    }
    else {
      setDarkMode(checked)
    }
    toggleTheme()
  };
  
  return (
   <>
   <section data-theme={theme} >
    <div className={styles["container"]}>
    <div className={styles["sub-div-1"]}>
    <p>devFinder</p>
     <NavLink>
            <DarkModeSwitch
            className={styles["toggle-btn"]}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={28}
      sunColor="blue"
    />
            </NavLink>
    </div>
    <div className={styles["sub-div-2"]}>
    <div className={styles["search"]}>
    <SearchIcon />
    <input 
    type="search" 
    name="username" 
    id="username" 
    value={username} 
    required 
    placeholder='Search Github Username'
    onChange={(e) => setUsername(e.target.value)}
     />
    </div>
    <button onClick={fetchData} className={styles["btn"]}>Search</button>
    </div>
    <div className={styles["main-box"]}>
    <img src={avatar_url} alt="avatar" />
    <div className={styles["box"]}>
    <div className={styles["sub-box"]}>
    <div className={styles["avatar-div"]}>
    <h4>{name}</h4>
    <p>{username}</p>
    <p>{bio}</p>
    </div>
    <p>{created_at}</p>
    </div>
    <div className={styles["follow"]}>
      <div className={styles["bt"]}>
        <h6>Repos</h6>
        <p>{public_repos}</p>
      </div>
      <div className={styles["bt"]}>
      <h6>Followers</h6>
      <p>{followers}</p>
      </div>
      <div className={styles["bt"]}>
      <h6>Following</h6>
      <p>{following}</p>
      </div>
    </div>
    <div className={styles["link"]}>
    <div className={styles["lin"]}>
    <LocationOnIcon/>
    <p>{location}</p>
    </div>
    <div className={styles["lin"]}>
    <LinkIcon/>
    <NavLink target='_blank' to={blog}>{blog}</NavLink>
    </div>
    <div className={styles["lin"]}>
    <GitHubIcon/>
    <NavLink target='_blank' to={html_url}>{html_url}</NavLink>
    </div>
    <div className={styles["lin"]}>
    <EmojiTransportationIcon/>
    <p>@github</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
   </>
  )
}

export default Profile