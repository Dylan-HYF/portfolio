
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      <header>
        <ul className="menu-items">
          <li>
            <Link className="link" to="/">HOME.</Link>
          </li>
          <li>
            <Link className="link" to="/projects">PROJECTS.</Link>
          </li>
          <li style={{ marginRight: 40 }}>
            {/* <Link className="link" to="/about">ABOUT.</Link> */}
            <a className="link" href="https://about.me/youfan" target="_blank">ABOUT.</a>
          </li>

          <li>
            {/* <Link className="link" to="/contact">CONTACT.</Link> */}
            <a className="icon-left" href="https://www.linkedin.com/in/youfan-huang/" target="_blank">
              <i className="iconfont">&#xe890;</i>
            </a>
            <a className="icon-left" href="https://github.com/Dylan-HYF" target="_blank">
              <i className="iconfont">&#xe885;</i>
            </a>
            <a className="icon-left" href="mailto:hyf.dylan@gmail.com">
              <i className="iconfont">&#xe77e;</i>
            </a>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Header
