import React from 'react';
import PropTypes from 'prop-types';

const ProfileEducation = ({
  education: { school, degree}
}) => (
  <div style={{ overflow: 'auto' }}>
    <table className="table">
      <thead>
        <tr>
          <th>SI. No.</th>
          <th>League Name</th>
        </tr>
      </thead>
      <tbody>
        <td>{degree}</td>
        <td>{school}</td>
      </tbody>
    </table>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;
