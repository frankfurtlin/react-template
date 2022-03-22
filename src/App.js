import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* 路由精确匹配"/home"，跳转Home页面 */}
        <Route exact path='/home' element={<Home />}></Route>
        {/* 路由精确匹配"/login"，跳转Login页面 */}
        <Route exact path='/login' element={<Login />}></Route>
        {/* 未匹配，则跳转Login页面 */}
        <Route path='*' element={<Navigate to="/login" />}></Route>
      </Routes>

    </HashRouter>
  );
}

export default App;
