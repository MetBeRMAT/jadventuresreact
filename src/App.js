import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import HomepagePreLogin from "./component/homepage/HomepagePreLogin";
// import AllPeople from "./components/people/AllPeople";
// import PersonDetail from "./components/people/PersonDetail";
import { atom } from "jotai";
import Login from "./component/login/login";

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
          {/* <Route path="allpeople" element={<AllPeople />} />
          <Route path="persondetail/:id" element={<PersonDetail />}/> */}
          {/* in spring facciamo con url/{id} */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
