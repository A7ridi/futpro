import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    description: '',
    points: '',
    wlt: '',
    cups: '',
    cluster: '',
    group: ''
  });

  const { company, title, description, points, wlt, cups, cluster, group } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">Add Team Performance</h1>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          addExperience(formData, history);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Team Name"
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Rank"
            name="company"
            value={company}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Points"
            name="points"
            value={points}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* W-L-T"
            name="wlt"
            value={wlt}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Cups"
            name="cups"
            value={cups}
            onChange={onChange}
            required
          />
        </div>    
        <div className="form-group">
          <input
            type="text"
            placeholder="* Cluster"
            name="cluster"
            value={cluster}
            onChange={onChange}
            required
          />
        </div>    
        <div className="form-group">
          <input
            type="text"
            placeholder="* Group"
            name="group"
            value={group}
            onChange={onChange}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
};

export default connect(null, { addExperience })(AddExperience);
