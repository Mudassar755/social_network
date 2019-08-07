import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Moment from 'Moment'

const Experience = ({}) => {
    const experiences = experience.map(exp => {
        <tr key = {exp._id}>
            <td>{ exp.company }</td>
            <td className = 'hide-sm'>{ exp.title }</td>
            <td>
               <Moment format = 'YYYY' />
            </td>
        </tr>
    })
    return (
        <Fragment>
            <h2 className = 'my-2'>Experience Credentials</h2>
            <table>
                <thead>
                <tr>
                    <th>Company</th>
                    <th className = 'hide-sm'>Title</th>
                    <th className = 'hide-sm'>Years</th>

                </tr>
                </thead>
                <tbody>{ experiences }</tbody>
            </table>
        </Fragment>
    )
}

Experience.propTypes = {

}

export default connect()(Experience)
