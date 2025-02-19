
import { Routes, Route } from 'react-router-dom';
import Homepage from './homepage';
import Adminhome from './adminhome';
import Register from './register';
import RegisterAdmin from './RegisterAdmin';
import Signin from './Signin';
// First component: App
export default function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/RegisterAdmin" element={<RegisterAdmin />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/adminhome" element={<Adminhome />} />
      <Route path="/" element={<Signin />} />
    </Routes>
  );
}
