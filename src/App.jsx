import './App.css';
import {AboutMe , Background , Projects} from './react-component/homepage';


function App() {
    return (
        <div>
            <Background/>
            <AboutMe/>
            <Projects/>
        </div>
    );
}

export default App
