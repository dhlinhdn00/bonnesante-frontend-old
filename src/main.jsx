import App from './App.jsx'
import './Index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Welcome from './pages/Welcome/Welcome.jsx'
import Login from './pages/Login/Login.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'
import AddData from './pages/AddData/AddData.jsx'
import LoadResult from './pages/LoadResult/LoadResult.jsx'
import ListResult from './pages/Result/History.jsx'
import Home from './pages/Home/Home.jsx'
import InferenceGraph from './pages/Result/Chart.jsx'
import Chart from './pages/Result/Chart.jsx'
import ResultPage from './pages/Result/ResultPage.jsx'
import { PieChart } from './pages/Result/PieChart.jsx'
import VideoCallPage from './pages/Patient/VideoCallPage.jsx'
import ProtectedRoutes from './utils/ProtectedRoutes.jsx'
import CheckScheduled from './pages/Doctors/CheckScheduled/CheckScheduled.jsx'
import VideoCall from './pages/Doctors/VideoCall/VideoCall.jsx'
import CheckUser from './utils/CheckUser.jsx'

const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    // <React.StrictMode>
    <HashRouter>
      <App>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/add-data' element={
            <ProtectedRoutes>
              <CheckUser user={<AddData />} doctor={<><h1>You are doctor</h1></>} />
            </ProtectedRoutes>
          } />
          <Route path='/load-result' element={
            <ProtectedRoutes>
              <CheckUser user={<LoadResult />} doctor={<><h1>You are doctor</h1></>} />
            </ProtectedRoutes>
          } />
          <Route path='/history' element={
            <ProtectedRoutes>
              <CheckUser user={<ListResult />} doctor={<><h1>You are doctor</h1></>} />
            </ProtectedRoutes>
          } />
          <Route path='/result' element={
            <ProtectedRoutes>
              <ResultPage />
            </ProtectedRoutes>
          } />
          <Route path='/chart' element={
            <ProtectedRoutes>
              <PieChart />
            </ProtectedRoutes>} />
          <Route path='/home' element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>} />

          <Route path='/videoCall' element={
            <ProtectedRoutes>
              <CheckUser user={<VideoCallPage />} doctor={<><h1>You are doctor</h1></>} />
            </ProtectedRoutes>} />

          <Route path='/doctor/videoCall' element={
            <ProtectedRoutes>
              <CheckUser user={<><h1>You are patient</h1></>} doctor={<VideoCall />} />
            </ProtectedRoutes>} />

          <Route path='/checkScheduled' element={
            <ProtectedRoutes>
              <CheckUser user={<><h1>You are patient</h1></>} doctor={<CheckScheduled />} />
            </ProtectedRoutes>
          } />
        </Routes>
      </App>
    </HashRouter>
    // </React.StrictMode>
  )
}
