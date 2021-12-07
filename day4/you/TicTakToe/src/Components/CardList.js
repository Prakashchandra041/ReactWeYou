import { useState } from "react"
import { CardDetail } from "./CardDetail";


export const CardList = () => {
    // const [card, setCard] = useState({
    //     Amazon: ["28/10/2020", "Amazon", "Pay", "/amazonlogo.png", "Desktop", "rgb(235, 157, 13)"],
    //     Apple: ["17 Sep 2020", "Apple","Payment","/applelogo.svg", "MacOS","rgb(202, 191, 191)"]
    // });

  const card = {
     Amazon: ["28/10/2020", "Amazon", "Pay", "/amazonlogo.png", "Desktop", "rgb(235, 157, 13)"],
        Apple: ["17 Sep 2020", "Apple","Payment","/applelogo.svg", "MacOS","rgb(202, 191, 191)"]
    
  }
    const [flage, setFlage] = useState(false);
    function toggleFlage() {
        setFlage(!flage)
    }


    return (
      <div>
        <CardDetail prop={flage?card.Amazon:card.Apple} toggleProp={toggleFlage} ></CardDetail>
      </div>
    );
}


















// import { useState } from "react";
// import { CardDetail } from "./CardDetail";

// export const CardList = () => {
//   const [card, setCard] = useState({
//     Amazon: [
//       "28/10/2020",
//       "Amazon",
//       "Pay",
//       "/amazonlogo.png",
//       "Desktop",
//       "rgb(235, 157, 13)",
//     ],
//     Apple: [
//       "12 Sep 2020",
//       "Apple",
//       "Payment",
//       "/applelogo.svg",
//       "MacOS",
//       "rgb(202, 191, 191)",
//     ],
//   });

//   const [flag, setFlag] = useState(true);

//   const flagSet = () => {
//     setFlag(!flag);
//   };

//   return (
//     <>
//       <CardDetail props={flag ? card.Amazon : card.Apple} flagProp={flagSet} />
//     </>
//   );
// };
