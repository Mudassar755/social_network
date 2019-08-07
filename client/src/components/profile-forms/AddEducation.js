import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addExperience } from '../../Redux/Actions/profile'
import { Link, withRouter } from 'react-router-dom'

const AddEducation = props => {
    return (
        <div>
            
        </div>
    )
}

AddEducation.propTypes = {
addExperience: PropTypes.func.isRequired,
}

export default connect(null, { addExperience })(AddEducation);
