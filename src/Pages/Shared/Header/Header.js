import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .then(err => console.error(err))
  }
  console.log(user);
    const menuLists = <>
        <li><Link to={`/`}>Home</Link></li>
        <li><Link to={`/services`}>Services</Link></li>
        <li><Link to={`/blogs`}>Blogs</Link></li>
        <li><Link to={`/myservice`}>My Services</Link></li>
        <li><Link to={`/myreviews`}>My Reviews</Link></li>
        {
          user?.uid ? <>
          <li><Link onClick={handleLogOut}>Logout</Link></li></> :
          <><li><Link to={`/login`}>Login</Link></li></>
        }
    </>

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuLists}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">PhotoShootCare</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
        {menuLists}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>
    );
};

export default Header;