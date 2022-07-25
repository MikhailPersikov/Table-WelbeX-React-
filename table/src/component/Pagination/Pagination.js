import './Pagination.scss';

const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  let pageIncrementEllipses = null;
  if(pages.length > maxPageLimit){
      pageIncrementEllipses = <li onClick={handleNextClick}>&hellip;</li>
  }
  let pageDecremenEllipses = null;
  if(minPageLimit >=1){
      pageDecremenEllipses = <li onClick={handlePrevClick}>&hellip;</li> 
  }

  const renderData = (data)=>{
    return(
        <ul>
            {data.map((d)=> 
            <li key={d['_id']}> The passenger having id {d['_id'].slice(d['_id'].length-5)} using {d.airline[0].name} airlines</li>)
            }
        </ul>
    )
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