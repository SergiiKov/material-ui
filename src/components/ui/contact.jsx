import React, {useState} from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import background from '../../assets/background.jpg';
import phoneIcon from '../../assets/phone.svg';
import emailIcon from '../../assets/email.svg';


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

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const [emailHelper, setEmailHelper] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneHelper, setPhoneHelper] = useState('');

    const [message,setMessage] = useState('');

    const onChange = event => {
        let valid;
    
        switch (event.target.id) {
          case "email":
            setEmail(event.target.value);
            valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
              event.target.value
            );
    
            if (!valid) {
              setEmailHelper("Invalid email");
            } else {
              setEmailHelper("");
            }
            break;
          case "phone":
            setPhone(event.target.value);
            valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
              event.target.value
            );
    
            if (!valid) {
              setPhoneHelper("Invalid phone");
            } else {
              setPhoneHelper("");
            }
            break;
          default:
            break;
        }
      };

  
    return (
        <Grid container direction='row'>
            <Grid item container direction='column' justify='center' lg={3}>
                <Grid item>
                    <Typography variant='h2'>Contact US</Typography>
                    <Typography variant='body1'>Contact US</Typography> 
                </Grid>
                <Grid item container>
                    <Grid item>
                        <img src={phoneIcon} alt='phone' />
                    </Grid>
                    <Grid item>
                       <Typography variant='body1'>2323232 34234 23</Typography>
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item>
                    <img src={emailIcon} alt='email' />
                    </Grid>
                    <Grid item>
                       <Typography variant='body1'>@mail12345</Typography>
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item>
                        <TextField 
                        label='Name' 
                        id='name' 
                        value={name} 
                        onChange={(event)=> setName(event.target.value)} />
                    </Grid>
                    <Grid item>
                    <TextField label='Email' id='email' error={emailHelper.length !==0} helperText={emailHelper} value={email} onChange={onChange} />
                    </Grid>
                    <Grid item>
                    <TextField label='Phone' id='phone' error={phoneHelper.length !==0} helperText={phoneHelper} value={phone} onChange={onChange} />
                    </Grid>
                </Grid>
                <Grid item>
                <TextField multiline rows={5} id='message' value={message} onChange={(event)=> setMessage(event.target.value)} />
               <Grid>
                   <Button variant='contained'>Send Message</Button>
               </Grid>
                </Grid>
            </Grid>
        
            <Grid item container className={classes.background} lg={9}></Grid>
        </Grid>
    );
  }