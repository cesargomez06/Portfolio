import { createMuiTheme, makeStyles, MuiThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import About from "./components/About";
import Contact from "./components/Contact";
import MiWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

const theme = createMuiTheme({
  palette: {
    primary: {main: purple[500]},
    secondary: {main:"#333"},
  }
})

function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Navbar />
        <About title="Sobre mi" id="about" dark={true}/>
        <Skills title="Mis conocimientos"id="skills" dark={false}/>
        <MiWork title=" Mis trabajos" id="work" dark={true}/>
        <Contact title="Contactarme " id="contact" dark={false} />
      </div>
    </MuiThemeProvider>
    
  );
}

const useStyles = makeStyles((theme)=> ({
  root: {

  }
}))

export default App;
