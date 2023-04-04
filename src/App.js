import './App.css';
import Header from "./Components/Header.js";
import Pin from "./Components/Pin";

function App() {

    return (
        <div className="App">
            <Header />
            <main>
                <div className="mainContainer">
                    {/*{Data && Data.map}*/}
                    <Pin pinSize = {"small"}/>
                    <Pin pinSize = {"medium"}/>
                    <Pin pinSize = {"large"}/>
                    <Pin pinSize = {"small"}/>
                    <Pin pinSize = {"medium"}/>
                    <Pin pinSize = {"large"}/>
                    <Pin pinSize = {"small"}/>
                    <Pin pinSize = {"medium"}/>
                    <Pin pinSize = {"large"}/>
                    <Pin pinSize = {"small"}/>
                    <Pin pinSize = {"medium"}/>
                    <Pin pinSize = {"large"}/>
                    <Pin pinSize = {"small"}/>
                    {/*<Pin pinSize = {"medium"}/>*/}
                    {/*<Pin pinSize = {"large"}/>*/}
                    {/*<Pin pinSize = {"small"}/>*/}
                    {/*<Pin pinSize = {"medium"}/>*/}
                    {/*<Pin pinSize = {"large"}/>*/}
                    {/*<Pin pinSize = {"small"}/>*/}
                    {/*<Pin pinSize = {"medium"}/>*/}
                    {/*<Pin pinSize = {"large"}/>*/}
                </div>
            </main>
        </div>
    );
}

export default App;
