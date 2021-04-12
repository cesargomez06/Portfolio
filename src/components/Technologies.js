import React from 'react'
import photoshop from "../images/photoshop.png"
import html from "../images/html.png"
import css from "../images/css.png"
import javascript from "../images/javascript.png"
import react from "../images/react.png"
import sass from "../images/sass.png"
import bootstrap from "../images/bootstrap.png"
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@material-ui/lab'
import { makeStyles, Paper, Typography } from '@material-ui/core'
import StartRating from './StartRating'


const Technologies = () => {
    const classes = useStyles()
    const skills = [
        {
            year:"2019",
            src:photoshop,
            title:"Photoshop",
            stars:4,
        },
        {
            year:"2020",
            src:html,
            title:" HTML 5",
            stars:5,
        },
        {
            year:"2020",
            src:css,
            title:" Css 3",
            stars:4,
        },
        {
            year:"2020",
            src: sass,
            title: "Sass",
            stars: 4,
        },
        {
            year:"2020",
            src: bootstrap,
            title:"Bootstrap",
            stars: 4,
        },
        {
            year:"2021",
            src:javascript,
            title:" JavaScript ES6",
            stars:4,
        },
        {
            year:"2021",
            src:react,
            title:"  React Js",
            stars:4,
        },
    ]
    
    
    return (
        <Timeline align="left">
           {
                skills.map(({year, src, title, stars}, index)=> (
                    <TimelineItem kye={index}>
                        <TimelineOppositeContent>
                            <Typography variant="h6" color="textSecondary">
                                {year}
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot>
                            <img src={src} alt={title} className={classes.customlogo}/>
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                       <TimelineContent>
                           <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                    {title}
                                </Typography>
                                <StartRating stars={stars}/>
                           </Paper>
                       </TimelineContent>
                    </TimelineItem>
               ))
           }
        </Timeline>
    )
}
const useStyles = makeStyles((theme)=> ({
    customlogo: {
        width:"30px",
    },
    paper: {
        padding:"10px 16px",
        maxWidth:"200px",
    }
  }))

export default Technologies
