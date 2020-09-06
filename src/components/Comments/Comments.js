import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin:  '10px  0',
      
    },
    paper: {
      padding: theme.spacing(2),
      backgroundColor:'#ecf0f1',
      margin: 'auto',
      maxWidth: 1100,
      border: '1px solid maroon',
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
      borderRadius: '50%',
    },
  }));
const Comments = (props) => {
    const classes = useStyles();
    const {name, email, body, picture }= props.comment

    return (
        
        <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={picture} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    <h4>Name: {name}</h4>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <h5> Email: {email}</h5>
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                   <p>{body}</p>
                  </Typography>
                  
                </Grid>
                
              </Grid>
              
            </Grid>
          </Grid>
        </Paper>
      </div>
       
    );
};

export default Comments;