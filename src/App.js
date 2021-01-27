import Header from "./component/header";
import SubHeader from "./component/sub-header";
import MainContent from "./component/main-content";
import Footer from "./component/footer";
import './App.css';

function App() {
  return (
    <div className="container">
      <SubHeader/>
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
