function Header(props) {
  return (
    <header className="App-header">
      <img src={props.logo} className="App-logo" alt="logo" />
      <p>{props.text}</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default Header;
