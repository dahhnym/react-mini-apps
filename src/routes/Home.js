import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>React Mini Apps</h1>
      <ul>
        <Link to="/todo">
          <li>ToDoList</li>
        </Link>
        <Link to="/cointracker">
          <li>CoinTracker</li>
        </Link>
      </ul>
    </div>
  );
};

export default Home;
