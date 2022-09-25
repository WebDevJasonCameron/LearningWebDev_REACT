import { Link } from "react-router-dom";
import './topbar.css'

export default function topbar() {
  // VARs
  const user = true;

  // OUT
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to={"/"}>HOME</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/about"}>ABOUT</Link>
          </li>
          <li className="topListItem"> 
            <Link className="link" to={"/contact"}>CONTACT</Link>
          </li>
          <li className="topListItem">
            {user? 
            <Link className="link" to={"/write"}>WRITE</Link> : 
            <Link className="link" to={"/none"} style={{display:"none"}}></Link>}
          </li>
          <li className="topListItem">
            {user? 
              <Link className="link" to={"/logout"}>LOGOUT</Link> : 
              " "}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img 
              className='topImage'
              src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2821&q=80" alt="randomImage"/>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to={"/login"}>LOGIN</Link>
              </li>
              <li className="topListItem">
                <Link className="link" to={"/register"}>Register</Link>
              </li>
            </ul>
          )
        }



        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
