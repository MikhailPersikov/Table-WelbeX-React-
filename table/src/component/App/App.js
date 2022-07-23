import {useState, useEffect} from 'react'
import Table from '../Table/Table';
import Search from '../Search/Search';
import Pagination from '../Pagination/Pagination';
import axios from 'axios';
import './App.scss';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  
  //Если хочешь изменить количество лишек на странице поменяй значение в postsPerPage
  //example const [postsPerPage] = useState(20); (будет 20 лишек)
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:3001/data");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  //Why two rerenders? 

  //rewrite to function
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setcurrentPage(pageNumber);

  return (
    <div className="App">
      <Search/>
      <Table posts={currentPosts} loading={loading}/>
      <Pagination 
        postsPerPage={postsPerPage} 
        totalPosts={posts.length}
        paginate={paginate}/>
    </div>
  );
}

export default App;
