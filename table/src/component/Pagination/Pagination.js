import './Pagination.scss';

const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);

  }

  return (
    <nav className="pagination-container">
      <ul className="pagination-list">
      {pageNumbers.map(number => (
        <li key={number} className="pagination-list-item">
          <a onClick={() => paginate(number)} href="!#" className="pagination-list-link">{number}</a>
        </li>
      ))}
      </ul>
    </nav>
  )
}

export default Pagination;