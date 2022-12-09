import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const Login = ({ login, isAuthenticated }) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
        <table>
            <tr>Email<input placeholder="enter email id (xxxxx@gmail.com)" type="email" value={()=>setEmail(e.target.value)}></input></tr>
            <tr>password<input placeholder="password" type="password" value={()=>setEmail(e.target.value)}></input></tr>
            <tr><button onClick={onSubmit}>Submit</button></tr>
            <tr>Dont have an Account?<a href="/register">Register</a></tr>
        </table>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
