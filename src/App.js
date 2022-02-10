import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
import { ListSessionsContextProvider } from "./contexts/ListSessions";
import Messagerie from './pages/Messagerie';
import News from './pages/News';
import Sessions from "./pages/Sessions";
import { ListNewsContextProvider } from "./contexts/ListNews";
import Profile from "./pages/Profile";
import Mail from './pages/Mail';
import Faq from "./pages/Faq";
import Login from './pages/Login'
import Signup from './pages/Signup'
import { VolunteerContextProvider } from './contexts/Volunteer';
import Calendar from "./pages/Calendar";

const App = () => {
  return (
    <BrowserRouter>
      <ListSessionsContextProvider>
        <ListNewsContextProvider>
          <VolunteerContextProvider>
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/messagerie" element={<Messagerie />} />
              <Route path="/mail" element={<Mail />} />
              <Route path="/news" element={<News />} />
              <Route path="/sessions" element={<Sessions />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/sessions/:id_session" element={<Calendar />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </VolunteerContextProvider>
        </ListNewsContextProvider>
      </ListSessionsContextProvider>
    </BrowserRouter>
  );
};

export default App;
