import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExperience, setCurrent } from '../../actions/profile';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map(exp => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td>{exp.title}</td>
      <td>{exp.points}</td>
      <td>{exp.wlt}</td>
      <td>{exp.cups}</td>
      <td>{exp.cluster}</td>
      <td>{exp.group}</td>
      {/* <td>
        <button
          // onClick={() => deleteExperience(exp._id)}
          onClick={() => setCurrent(experience)}
          className="btn btn-dark btn-sm"
        >
          Edit
        </button>
      </td> */}
      <td>
        <button
          onClick={() => deleteExperience(exp._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Table Credentials</h2>
      <div className="profile-exp bg-white p-2" style={{ overflow: 'auto', whiteSpace: 'nowrap',   overflowY: 'scroll', height: '400px' }}>
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
              {/* <th width="11%">Edit</th> */}
              <th width="11%">Delete</th>
            </tr>
          </thead>
          <tbody>{experiences}</tbody>
        </table>
      </div>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);
