import { Button, makeStyles, Paper, Radio, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';

const Contact = ({title, dark, id}) => {
    const classes = useStyles();
    const [value, setValue] = useState("Say Hi")

    const handleChange = (e) => {
        setValue(e.target.value)
     }
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id} > 
                <Typography variant="h4">{title}</Typography>
                <Paper className={classes.root}>
                    <div className={classes.titleandchoices}>
                        <Typography variant="h5">Contacto</Typography>
                        <div className={classes.choices}>
                            <span>Saludarme</span>
                            <Radio 
                                value="Say Hi"
                                checked={value === "Say Hi"}
                                color="primary"
                                onChange={handleChange}
                            />
                            <span>Adquirir mis servicios</span>
                            <Radio 
                                value="Get a Quote"
                                checked={value === "Get a Quote"}
                                color="primary"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <form className={classes.form} noValidate autoComplete="off">
                        <TextField label="Tu nombre"/>
                        <TextField label="Tu e-mail"/>
                        {
                            value === "Get a Quote" ? (
                                <>
                                    <TextField label="Servicios necesarios"/>
                                    <TextField label="Presupuesto estimado"/>
                                </>
                            ) : null
                        }
                        <TextField label="Escribe tu mensaje"/>                  
                    </form>
                    <Button variant="contained"> Enviar </Button>
                </Paper>
            </div>    
        
        </div>
    )
}

const useStyles = makeStyles((theme)=> ({
    section: {
        minHeight:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center",
    },
    sectiondark: {
        background:"#333",
        color:"#fff",
    },
    root: {
        marginTop:theme.spacing(4),
        background:"tomato",
        color:"#fff",
        fontSize:"1.2rem",
        maxWidth:"500px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        padding:theme.spacing(4),
        "& button": {
            backgroundColor:"#fff",
            color:"tomato",
            fontWeight:900,
            fontSize:"1.2 rem",
            marginTop: theme.spacing(4),
        },
        "& button:hover": {
            backgroundColor: theme.palette.primary.main,
            color:"#fff",
        }
    },
    sectioncontent: {
       maxWidth:"80vw",
       margin:"0 auto",
        padding:theme.spacing(5),
        textAlign:"center",
    },
    titleandchoices:{
        "& h5": {
            marginTop:theme.spacing(1),
        }
    },
    form: {
        display:"flex",
        flexDirection:"column",
        "& input": {
            marginBottom:theme.spacing(1)
        }
    }
  }))

export default Contact
