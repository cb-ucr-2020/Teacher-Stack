import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authlinks = (
    <ul>
      <li>
        <Link to='/profiles'>Teachers</Link>
      </li>
      <li>
        <Link to='/forum'>Forum</Link>
      </li>
      <li>
        <Link to='/profile'>
          <i className='fas fa-user'></i>{' '}
          <span className='hide-sm'>Profile</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <Link to='/profile'>Profile</Link>
      </li>
      <li>
        <Link to='/signup'>Sign Up</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-blue text-center'>
      <h3>
        <Link to='/'>
          <i className='fas fa-school'></i> Teacher Stack
        </Link>
      </h3>
      {!loading && (
        <Fragment>{isAuthenticated ? authlinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
