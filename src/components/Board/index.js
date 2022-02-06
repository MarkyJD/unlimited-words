import PropTypes from 'prop-types';

export default function Board({ children }) {
  return (
    <div className="flex flex-col items-center space-y-2 justify-center flex-1">
      {children}
    </div>
  );
}

Board.propTypes = {
  children: PropTypes.node,
};
