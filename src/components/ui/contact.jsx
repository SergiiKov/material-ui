import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import background from '../../assets/background.jpg';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    background:{
        backgroundImage: `url(${background})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        height:'30em'
    }
  }));
  
  export default function Contact() {
    const classes = useStyles();
    const theme= useTheme(); 
  
    return (
        <Grid container direction='row'>
            <Grid item container direction='column' lg={3}>
                <Grid item>
                    <Typography variant='h2'>Contact US</Typography>
                    <Typography variant='body1'>Contact US</Typography>
                    
                </Grid>
                
            </Grid>
        
            <Grid item container className={classes.background} lg={9}></Grid>
        </Grid>
    );
  }