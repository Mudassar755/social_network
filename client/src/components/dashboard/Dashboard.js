import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentProfile } from "../../Redux/Actions/profile";
import Spinner from "../layout/Spinner";
import { Link } from 'react-router-dom';
import DashboardActions from './DashboardActions'

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { loading, profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" />
        Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment><DashboardActions /></Fragment>
      ) : (
        <Fragment>
          <p>You have not created profile yet, please create profile</p>
          <Link to = '/create-profile' className = 'btn btn-primary my-1'>Create Profile</Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
