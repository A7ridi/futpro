import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const DashboardAction = ({ auth: { user } }) => {
  return (
    <div className='dash-buttons'>
      {/* <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary'></i> Edit Profile
      </Link> */}
      <Link to='/add-experience' className='btn btn-light'>
        <i className='fas fa-table text-primary' style={{ marginRight: '3px' }}></i> Add Team Result
      </Link>
      <Link to='/add-education' className='btn btn-light'>
        <i className="fas fa-baseball-ball text-primary" style={{ marginRight: '3px' }}></i> Add League
      </Link>
      <Link to={`/profile/${user ? user._id : ""}`} className='btn btn-primary'>
        View Result
      </Link>
    </div>
  );
};

DashboardAction.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(DashboardAction);
