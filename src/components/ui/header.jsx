import React from 'react';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import logo from '../../assets/logo.svg';


function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

const useStyles = makeStyles(theme => ({
  ToolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: "8em"
  },
  logoContainer:{
    padding:0,
    '&hover': {
      backgroundColor:'transparent'
    }
  },
  tabContainer:{
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth:10,
    marginLeft:'25px'
  },
  button: {
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight:'25px',
    ...theme.typography.estimate
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white'
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1
    }
  }
}))

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const handleChange = (e, value) => {
    setValue(value)
  };

const handleMenuIteClick = (e, i) =>{
  setAnchorEl(null)
  setOpen(false)
  setSelectedIndex(i)
}

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpen(true)
  }
  const handleClose = (e) =>{
    setAnchorEl(null)
    setOpen(false)
  }

 const menuOptions = [{name:'Services', link:'/services'}, 
 {name:'Custom Software Development', link:'/customsoftware'}, 
 {name:'Custom Mobile Development', link:'/mobileapps'}, 
 {name:'Custom WebSite Development', link:'/websites'} ]

  useEffect(()=>{
    if (window.location.pathname === '/' && value !== 0 ) {
      setValue(0);
    } else  if (window.location.pathname === '/services' && value !== 1 ) {
      setValue(1);
    } else  if (window.location.pathname === '/theRevolutions' && value !== 2 ) {
      setValue(2);
    } else  if (window.location.pathname === '/aboutUs' && value !== 3 ) {
      setValue(3);
    } else  if (window.location.pathname === '/contactUs' && value !== 4 ) {
      setValue(4);
    }
  }, [value]);


    return(
      <React.Fragment>
        <ElevationScroll>
            <AppBar color='primary'>
                <Toolbar disableGutters>
                  <Button component={Link} to='/' className={classes.logoContainer} onClick={()=>setValue(0)} disableRipple>
                    <img src={logo} alt='company logo' className={classes.logo} />
                  </Button>
                  <Tabs value={value} onChange={handleChange} className={classes.tabContainer}>
                    <Tab className={classes.tab} component={Link} to='/' label='Home' />
                    <Tab aria-owns={anchorEl ? 'simple-menu' : undefined}
                         aria-haspopup={anchorEl ? 'true' : undefined} 
                         className={classes.tab} 
                         component={Link} to='/services' 
                         onMouseOver={(event)=>handleClick(event)}
                         label='Services' 
                    />
                    <Tab className={classes.tab} component={Link} to='/theRevolutions' label='The Revolutions' />
                    <Tab className={classes.tab} component={Link} to='/aboutUs' label='About Us' />
                    <Tab className={classes.tab} component={Link} to='/contactUs' label='Contact Us' />
                  </Tabs>
                    <Button variant="contained" color="secondary" className={classes.button}>Free download</Button>
                    <Menu id='simple-menu' 
                          anchorEl={anchorEl} 
                          open={open} 
                          onClose={handleClose}
                          MenuListProps={{onMouseLeave:handleClose}}
                          classes={{paper: classes.menu}}
                          elevation={0}
                          >
                            {menuOptions.map((option, i)=>(
                              <MenuItem key={option} component={Link} to={option.link} 
                                classes={{root: classes.menuItem}}
                                onClick={(event)=>{ handleMenuIteClick(event, i); 
                                                    setValue(1);
                                                    handleClose()}}
                                selected={i===selectedIndex && value === 1}
                              >
                                {option.name}
                              </MenuItem>
                            ))}
                    </Menu>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
<div className={classes.ToolbarMargin} />
     </React.Fragment>    
    );
};