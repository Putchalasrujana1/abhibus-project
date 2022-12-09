import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Landing from './Landing'
import SeatSelection from './SeatSelection/SeatSelection'
import PaymentTab from './PaymentTab/PaymentTab'
import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert'
import PropTypes from 'prop-types'

const BookBus = (setAlert) => {
    return (
        <div className="container">
            <div>
                <ul>
                    <li>
                        <a   href="/book/menu1">Select Seat</a>
                    </li>
                    <li >
                        <a  href="/book/menu2">Payment</a>
                    </li>
                </ul>

                <div >
                    <div  id="menu1"><SeatSelection /></div>
                    <div  id="menu2"><PaymentTab /></div>
                </div>
            </div>

        </div>
    )
}



BookBus.propTypes = {
    setAlert: PropTypes.func.isRequired,
    // searchBuses: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert })(BookBus)