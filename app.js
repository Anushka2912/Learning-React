import React from "react";
import ReactDOM from "react-dom/client";

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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);