import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Register = ({}) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmpassword,setconfirmPassword]=useState('')
  const onSubmit = async (e) => {
    e.preventDefault();
    password===confirmpassword && register(email, password);
  };
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
        <table>
            <tr>Email<input placeholder="enter email id (xxxxx@gmail.com)" type="email" value={()=>setEmail(e.target.value)}></input></tr>
            <tr>password<input placeholder="password" type="password" value={()=>setPassword(e.target.value)}></input></tr>
            <tr>confirm password<input placeholder="password" type="password" value={()=>setconfirmPassword(e.target.value)}></input></tr>
            <tr><button onClick={onSubmit}>Submit</button></tr>
            <tr>Already have an Account?<a href="/register">Login</a></tr>
        </table>
    </div>
  );
};

Register.propTypes = {
  Register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { Register })(Register);
