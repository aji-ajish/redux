import './App.css';
// import Counter from './features/counter/Counter';
import AddPostForm from './features/posts/AddPostForm';
import PostsList from './features/posts/PostsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter/> */}
        <AddPostForm/>
        <PostsList/>
      </header>
    </div>
  );
}

export default App;
