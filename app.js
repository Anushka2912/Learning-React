import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import logo from "/assets/logo.jpg";
import user from "/assets/user-icon.png";

// Assignment 1 Part A
// Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)

const HeadingComponent = () => {
    return (
        <div className="title">
            <h1 id="main-heading">This is Heading 1
                <h2 id="sub-heading">This is Heading 2
                    <h3 id="inner-heading">This is Heading 3</h3>
                </h2>
            </h1>
            <BodyComponent/>
        </div>
    );
}

const BodyComponent = () => <p>This is Part A of Assignment 1.</p>

// Assignment 1 Part B
// Create a Header Component from scratch using Functional Components with JSX

const HeaderComponent = () => {
    return (
        <header>
            <LogoComponent />
            <SearchComponent />
            <UserComponent />
        </header>
    );
}

const LogoComponent = () => {
    return (
        <div id="logoContainer">
            <img src={logo} alt="logo-image" class="logoImage"></img>
        </div>
    );
}

const SearchComponent = () => {
    const stationaries = ["Books", "Pencil", "Pen", "Eraser"];
    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);  
    };

    const handleSearch = () => {
        const searchResult = stationaries.filter(stationary => stationary === query);
        setResult(searchResult);
        console.log("Searching for:", query);
    };

    return (
        <div id="searchBox">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
            {result.length > 0 ? result.map(data=> <div key={data}>{data}</div>) : <div>Result not found</div>}
        </div>
    );
}

const UserComponent = () => {
    return (
        <div id="userIconContainer">
            <img src={user} alt="user-icon" class="userIconImage"></img>
        </div>
    );
}

const App = () => {
    return (
        <div>
            <HeaderComponent />
            <HeadingComponent />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);