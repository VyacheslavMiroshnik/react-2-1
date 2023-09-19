import PropTypes from 'prop-types';

export default function ProjectList({ project }) {
  return (
    <div className='imgCardContainer'>
      {project.map((el, indx) => (
        <img className='imgCard' key={indx} src={el} alt='some Image Card' />
      ))}
    </div>
  );
}

ProjectList.propTypes = {
  project: PropTypes.array,
};
