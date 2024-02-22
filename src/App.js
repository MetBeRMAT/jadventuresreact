import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import { atom } from "jotai"; 
import HomepagePreLogin from "./component/homepage/HomepagePreLogin";
import Login from "./component/login/login";
import HomepagePostLogin from "./component/homepage/HomepagePostLogin";
import MyQuestsPage from "./component/quest/MyQuestsPage";
import QuestDetail from "./component/quest/QuestDetail";

//Variabile di contesto globale
//è STATE dell'intera applicazione
export const valoreGlobale = atom("ciao sono il valore globale");

function App() {
  return (
    <>  
      <BrowserRouter>

        <Navbar />    
        <Routes>
          <Route index element={<HomepagePreLogin />} />
          <Route path="login" element={<Login />} />
          <Route path="HomepagePostLogin" element={<HomepagePostLogin />} />
          <Route path="MyQuestsPage" element={<MyQuestsPage />} />
          <Route path="QuestDetail" element={<QuestDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
