import './App.css';
import Section from './Section';

function App() {
  return (
    <div className="App">   
        <Section rimg="./Images/whm.jpg" 
        title="Whack-A-Mole" 
        gameDesc="Whac-A-Mole is a popular arcade game and carnival game, originally known as Mogura Taiji in Japan. 
        Holes in the play area top are filled with small plastic moles, which pop up at random. 
        Points are scored by whacking each mole as it appears. The faster the reaction the higher the score." 
        lcolor = "#98d182"
        dcolor = "#6ca356"
        >
        </Section>   

        <Section limg="./Images/snake.jpg" 
        title="snake" 
        gameDesc="Snake is a video game that originated during the late 1970s in arcades becoming something of a classic. 
                  ... The player controls a long, thin creature, resembling a snake, 
                  which roams around on a bordered plane, picking up food (or some other item), 
                  trying to avoid hitting its own tail or the edges of the playing area." 
        lcolor = "#c7774e"
        dcolor = "#b55b2d"
        >
        </Section>

        <Section rimg="./Images/rps.jpg" 
        title="Rock-Paper-Scissors" 
        gameDesc="The familiar game of Rock, Paper, Scissors is played like this:
                  at the same time, two players display one of three symbols:
                  a rock, paper, or scissors. A rock beats scissors, scissors beat paper by cutting it,
                  and paper beats rock by covering it." 
        lcolor = "#193180"
        dcolor = "#11225c"
        >
        </Section> 
         
        <Section limg="./Images/whm.jpg" 
        title="Whack-A-Mole" 
        gameDesc="Whac-A-Mole is a popular arcade game and carnival game, originally known as Mogura Taiji in Japan. 
        Holes in the play area top are filled with small plastic moles, which pop up at random. 
        Points are scored by whacking each mole as it appears. The faster the reaction the higher the score." 
        lcolor = "#98d182"
        dcolor = "#6ca356"
        >
        </Section> 
    </div>
  );
}

export default App;
