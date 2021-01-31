import React from 'react';
import PropTypes from 'prop-types';

const ProfileExperience = ({
  experience: { company, title, cups, wlt, cluster, group, points }
}) => (
  <div>
    <table className="styled-table">
        {/* <thead>
          <tr>
            <th width="7%">Rank</th>
            <th width="15%">Team</th>
            <th width="10%">Points</th>
            <th width="11%">W-L-T</th>
            <th width="11%">Cups</th>
            <th width="11%">Cluster</th>
            <th width="11%">Group</th>
          </tr>
        </thead> */}
        <tbody>
          <td width="7%">{company}</td>
          <td width="15%">{title}</td>
          <td width="10%">{points}</td>
          <td width="11%">{wlt}</td>
          <td width="11%">{cups}</td>
          <td width="11%">{cluster}</td>
          <td width="11%">{group}</td>
        </tbody>
      </table>
  </div>
);



ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default ProfileExperience;
