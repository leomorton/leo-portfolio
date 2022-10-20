import './App.css';
import ProjectThumbnail from './components/ProjectThumbnail.js';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Title</h1>
                <ProjectThumbnail projectName={'Project1'} />
            </header>
        </div>
    );
}

export default App;
