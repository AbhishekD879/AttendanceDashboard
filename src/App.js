
import './App.css';
import Login from './components/LoginPage/Login';
import Layout from './Utils/Utils_Components/Layout/Layout';
import BranchPage from './components/BranchPage/BranchPage';
import SubjectPage from './components/SubjectPage/SubjectPage';
import LectureInfo from './components/LectureInfo/LectureInfo';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
function App() {
  return (
    <div className="App">
  <BrowserRouter basename='/AttendanceDashboard'>
    <Routes>
    <Route exact path="/" element={<Login/>} />
    <Route exact path="/branch" element={<Layout cardType={<BranchPage/>} />} />
    {/* <Route path='/' element={<Navigate to={"/branch"} replace/>}/> */}
    <Route path="/subject/:currentClass" element={<Layout cardType={<SubjectPage/>} />}/>
    <Route path="/allSubject/id/:currentClass/:sub" element={<Layout cardType={<LectureInfo/>} />}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
