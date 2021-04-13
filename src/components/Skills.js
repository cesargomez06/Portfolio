import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import Technologies from './Technologies';


const Skills = ({title , dark, id}) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id} > 
                <Typography variant="h4">{title}</Typography>
                <Technologies/>
            </div>    
        </div>
    )
}

const useStyles = makeStyles((theme)=> ({
    section: {
        minHeight:"100vh",
    },
    sectiondark: {
        background:"#333",
        color:"#fff",
    },
    sectioncontent: {
        marginTop:theme.spacing(3),
        margin:"0 auto",
        "& h4":{
            marginBotttom: theme.spacing(6),
            marginLeft: theme.spacing(3),
        }
    }, 
  }))

export default Skills
