import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import { getProfileById } from '../../actions/profile';

const Profile = ({ getProfileById, profile: { profile }, auth, match, }) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to="/profiles" className="btn btn-light">
            Go Back
          </Link>
          <br/><br/>
          <p className="mobile-hide">* Scroll horizontally & vertically</p>
          {/* {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            )} */}
          <div className="profile-grid my-1">
            {/* <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} /> */}
            <div className="profile-exp bg-white p-2"  style={{ overflow: 'auto', overflowY: 'scroll', height: '400px' }}>
              <h2 className="text-primary">Point Table</h2>
              <div>
                <table className="styled-table">
                  <thead>
                    <tr>
                      <th width="7%">Rank</th>
                      <th width="15%">Team</th>
                      <th width="10%">Points</th>
                      <th width="11%">W-L-T</th>
                      <th width="11%">Cups</th>
                      <th width="11%">Cluster</th>
                      <th width="11%">Group</th>
                    </tr>
                  </thead>
                </table>
              </div>
              {profile.experience.length > 0 ? (
                <Fragment>
                  {profile.experience.map((experience) => (
                    <ProfileExperience
                      key={experience._id}
                      experience={experience}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No result credentials</h4>
              )}
            </div>

            <div className="profile-edu bg-white p-2"  style={{ overflow: 'auto' }}>
              <h2 className="text-primary">League</h2>
              {profile.education.length > 0 ? (
                <Fragment>
                  {profile.education.map((education) => (
                    <ProfileEducation
                      key={education._id}
                      education={education}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No league credentials</h4>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  experience: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
