import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile, deleteAccount } from '../../actions/profile'
import { Link } from 'react-router-dom'
import Buses from './Buses'

const Dashboard = ({ auth: { user }, profile: { profile, loading } }) => {

    return (<Fragment>
        <h1 >Welcome To Dashboard</h1>
        <p>
             Hello {user && user.name}. Nice To Meet You!!</p>
        {profile !== null ? (
            <Fragment>
                <div>
                    <button  onClick={() => deleteAccount()}>
                         Delete Account
                    </button>
                </div> </Fragment>
        ) : (
            <Fragment><p>You don't have booked any buses.</p>
                <Link to='/' > Book Bus</Link> </Fragment>
        )}
    </Fragment>
    )
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard)
