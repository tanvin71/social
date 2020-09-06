import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    root: {
      margin:'auto',
      width: 1000,
      background:'#ecf0f1',
      border: ' 1px solid yellow',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Post = (props) => {
    const {title, body,id } = props.post

    const mar ={
        marginBottom: '10px',
        marginTop:  '10px',

    }

    const classes = useStyles();
    return (
           
        <div style={mar}>
            <Card className={classes.root}>
            <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
               <h4>Id: {id}</h4>
            </Typography>
            <Typography className={classes.title} color="textPrimary" gutterBottom>
              <h1>Title: {title}</h1>
            </Typography>
            
            <Typography variant="body2" component="p">
                <h4>Main body: {body}</h4>
                <br />
            </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" color="secondary" outline="none"><Link to={`/post/${id}`}>Read detail</Link></Button>
            </CardActions>
            </Card>
        </div>
                


        
        
    );
};

export default Post;