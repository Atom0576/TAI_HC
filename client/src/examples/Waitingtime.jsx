import React from "react";
import humanImage from "../components/humanImage.png";
import AIImage from "../components/AIImage.png";

export function Waitingtime() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "0", margin: "0" }}>
     <p style={{ fontSize: "24px", fontWeight: "bold", margin: "20px 0" }}> 
       Please wait while your manager selects the best player.
     </p>
     <p style={{ fontSize: "18px", fontWeight: "normal", margin: "20px 0", textAlign: "left", maxWidth: "600px" }}>
       As a reminder of the style of your AI manager, "The manager demonstrates strong problem-solving abilities, confidently tackles challenges, assertively advocates for ideas against opposition, and takes initiative without guidance."
     </p>          
    </div>
  );
}

//<img src={humanImage} alt="Human Manager" style={{ width: "150px", height: "150px", margin: "20px 0" }} />
//<p style={{ fontSize: "24px", fontWeight: "bold", margin: "20px 0" }}> Human manager</p>
//<p> {"Please wait while the best player is selected based on everyone's ratings."} </p>

//Please wait while your manager selects the best player.