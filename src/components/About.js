import { Card, CardActions, CardContent, CardMedia, makeStyles, Typography, Button } from '@material-ui/core';
import React from 'react'
import perfil from "../images/foto-perfil.jpg"
import TypeWriterEffect from "react-typewriter-effect"
import pdf from "../images/cv.pdf"


const About = ({title, dark, id}) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id} > 
                <Typography variant="h4">{title}</Typography>
                <Card className={classes.card}>
                    <CardMedia image={perfil} className={classes.media} title="picture"/>
                    <CardContent className={classes.cardcontent}>
                        <TypeWriterEffect 
                         text="Hola, mi nombre es César Gómez"
                         textStyle={{fontSize:"2rem", fontWeight:"700px", color:"tomato"}}
                         startDelay={100}
                         cursorColor="black"
                         typeSpeed={100}                        
                        />
                        <TypeWriterEffect 
                         text="Soy desarrollador front end, amante de la tecnologia y del diseño desde que tengo recuerdos"
                         textStyle={{fontSize:"1.2rem", fontWeight:"500px"}}
                         startDelay={2500}
                         cursorColor="black"
                         typeSpeed={100}                        
                        />
                        <Typography variant="h6" color="textSecondary">
                            En programación como en todos los trabajos me gusta brindarme al 100%. Seguir adquiriendo conocimientos
                            y formandome como profesional. Por este motivo es que el desarrollo web me apasiona, siempre pienso "no existe un techo de conocimientos".

                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" className={classes.pdfbutton}>
                            <a href={pdf} download>
                                Descargar Cv
                            </a>
                        </Button>
                    </CardActions>
                </Card>
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
        maxWidth: "80vw",
        margin:"0 auto",
    },
    card: {
        height:"70vh",
        display:"flex",
        marginTop: theme.spacing(6),
        position:"relative",
    },
    media: {
        width:"250px",
        height:"auto",
        objectFit:"cover",
        borderRadius:"10px",
        margin:theme.spacing(5)
    },
    cardcontent: {
        marginTop: theme.spacing(2),
        "& h6": {
            marginTop:theme.spacing(6),
            [theme.breakpoints.down("sm")]: {
                display:"none",
            },
        },
    },
    pdfbutton: {
        position:"absolute",
        bottom: "2.5rem",
        right:"4rem",
        [theme.breakpoints.down("sm")]: {
            bottom: "2rem",
            right: "1rem",
        },
        backgroundColor:"tomato",
        padding:theme.spacing(3),
        "&:hover":{
            backgroundColor:"#fff",
        },
        "& a": {
            color:"#fff",
            textDecoration:"none",
            fontWeight:900,
        },
        "& a:hover":{
            color:"tomato",
        }
    },
  }))

export default About
