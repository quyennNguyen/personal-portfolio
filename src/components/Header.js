function Header({ color, background, icon, changeTheme }) {
  return (
    <header style={{ color: color, background: background }}>
      <h1>QQ</h1>
      <nav>
        <ul>
          <li>
            <a href="#" style={{ color: color }}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" style={{ color: color }}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" style={{ color: color }}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" style={{ color: color }}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button style={{ color: color }} onClick={changeTheme}>{icon}</button>
    </header>
  );
}

export default Header;
