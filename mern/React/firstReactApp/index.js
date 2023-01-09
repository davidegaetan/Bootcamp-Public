const App = () => {
    return React.createElement("h1", {}, "Your first react app has rendered");
};
const DOMcontainer = document.getElementById('root');
const root = ReactDOM.createRoot(DOMcontainer);
root.render(React.createElement(App));
