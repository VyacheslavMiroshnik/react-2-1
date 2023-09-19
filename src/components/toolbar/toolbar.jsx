import PropTypes from 'prop-types';

export default function Toolbar({ filters, activeFilter, onSelectFilter }) {
  return (
    <ul className='filterContainer'>
      {filters.map((el) => (
        <li
          className={el === activeFilter ? ' filter activeFilter' : 'filter'}
          key={el}
          title='el'
          onClick={() => onSelectFilter(el)}
        >
          {el}
          {console.log(el, '+++', activeFilter)}
        </li>
      ))}
    </ul>
  );
}

Toolbar.propTypes = {
  filters: PropTypes.array,
  activeFilter: PropTypes.string,
  onSelectFilter: PropTypes.func,
};
