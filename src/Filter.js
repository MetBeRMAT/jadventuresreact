// import axios from "axios";
// import { useEffect, useRef, useState } from "react";

// export default function Filter()
// {
//     const [quests, setQuests] = useState([]);
    
//     const searchType = useRef(null);
//     const searchMax = useRef(null);
//     const searchMin = useRef(null);
//     const searchMinRew = useRef(null);
//     const searchArea = useRef(null);
//     const searchStatus = useRef(null);

    

//     function filter()
//     {
//         let newQuests = [...quests];
        
//         let keyType = searchType.current.value; 
//         let keyMin = searchMin.current.value;
//         let keyMax = searchMax.current.value;
//         let keyArea = searchArea.current.value;
//         let keyStatus = searchStatus.current.value;
//         let keyReward = searchMinRew.current.value;
        
//         let questRank = ["D","C","B","A","S"];
//         let minArray = 0; 
//         let maxArray = questRank.length;

//         for(let i = 0; i < questRank.length; i++)
//         {
//             if(questRank[i] == keyMin)
//             minArray = i;
//             if(questRank[i] == keyMax)
//             maxArray = i;
//         }

//         let rankFiltered = [...quests];
//         for(let i = minArray; i < maxArray; i++)
//             for(let k = 0; i < newQuests.length; k++)
//                 if(newQuests[k].rank.equals(questRank[i]))
//                     rankFiltered.push(newQuests[k]);

//         newQuests = rankFiltered.filter(
//                     q =>
//                     q.type.includes(keyType)     &&
//                     q.status.equals(keyStatus)   &&
//                     q.reward >= keyReward        &&
//                     q.area.equals(keyArea)       
//                             );
        
//         setQuests(newQuests);

//     }

//     return(
//         <>
//         <div class="container text-center">
//             <div class="row">
//                 <input name="type" ref={searchType} type="text" placeholder="Type"/>
//             </div>

//             <div class="row">
//                 <input name="max" ref={searchMax} type="number" placeholder="MAX Rank"/>
//                 <input name="min" ref={searchMin} type="number" placeholder="MIN Rank"/>
//             </div>

//             <div class="row">
//                 <input name="rew" ref={searchMinRew} type="number" placeholder="MIN Reward"/>
//             </div>

//             <div class="row">
//                 <input name="area" ref={searchArea} type="text" placeholder="Area"/>
//             </div>

//             <div class="row">
//                 <input name="status" ref={searchStatus} type="text" placeholder="Status"/>
//             </div>

//             <div class="row">
//                 <button onClick={filter}> Filter </button>
//             </div>

//         </div>
//         </>
//     )
// }