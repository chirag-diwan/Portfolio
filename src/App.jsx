import './App.css';
import {AboutMe , Projects , GridCanvas} from './react-component/homepage';
import {Skills} from './react-component/skills'



function App() {
    return (
        <div>
            <GridCanvas squareSize={50} gap={1}/>
            <AboutMe/>
            <Skills/>
            <Projects/>
        </div>
    );
}

export default App
