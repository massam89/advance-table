import ReactDom from 'react-dom'
import Table from "./components/Table";
import SearchAndFilter from './components/SearchAndFilter'
import Header from "./components/Header";
import NewUsers from "./components/NewUsers";

function App() {

  return (
    <div className="container">
      <Header />
      <SearchAndFilter />
      <Table />
      {ReactDom.createPortal(<NewUsers />, document.getElementById('fixed-button'))}  
    </div>
  );
}

export default App;
