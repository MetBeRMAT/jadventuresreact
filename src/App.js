import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import { atom } from "jotai"; 
import HomepagePreLogin from "./component/homepage/HomepagePreLogin";
import Login from "./component/login/login";
import HomepagePostLogin from "./component/homepage/HomepagePostLogin";
import MyQuestsPage from "./component/quest/MyQuestsPage";
import QuestDetail from "./component/quest/QuestDetail";
import AllGuildQuests from "./component/quest/AllGuildQuests";
import { useAtom } from "jotai";
import MyQuestsPageForm from "./component/party/MyQuestsPageForm";
import MyQuestAwaitingPage from "./component/party/MyQuestsAwaitingPage";

export const currentGuild = atom(); 
export const currentParty = atom();

function App() 
{ 
  const [guild, setGuild] = useAtom(currentGuild);

  return (
    <>  
      <BrowserRouter>

        <Navbar />    
        <Routes>
          <Route index element={<HomepagePreLogin />} />
          <Route path="login" element={<Login />} />
          <Route path="HomepagePostLogin" element={<HomepagePostLogin />} />
          <Route path="MyQuestsPage" element={<MyQuestsPage />} />
          <Route path="MyQuestPageForm" element={<MyQuestsPageForm />} />
          <Route path="QuestDetail/:id" element={<QuestDetail />} />
          <Route path="AllGuildQuests" element={<AllGuildQuests/>}/>
          <Route path="MyQuestAwaitingPage" element={<MyQuestAwaitingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;