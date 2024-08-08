import './Navbar.css';
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png' 

function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} />
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricin</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select>
                <option value="usd">USD</option>
                <option value="eur">USD</option>
                <option value="inr">INR</option>
            </select>
            <button>Sign up <img src= {arrow_icon}alt="" />
            </button>
        </div>
    </div>
  )
}

export default Navbar