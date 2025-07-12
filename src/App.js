import logo from './logo.svg';
import './App.css';

function HelloButton() {
    function handleClick() {
        alert("Hello");
    }

    return (
        <button onClick={handleClick}>
            I am a button
        </button>
    );

}

function App() {

    let page = "main"

    function pageButton() {
        if (page === "main") {
            page = "second";
        } else {
            page = "main";
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                This is the {page} page
                <button onClick={pageButton}>first page button</button>
            </header>
        </div>
    );
}

export default App;
