import React from "react"
import Profileobj from "./Profileobj"

function App() 
{
  return (
    <div className="profile">
      <Profileobj
        profile={{name: "Dan Bilotto", imgURL: "https://t4.ftcdn.net/jpg/01/75/08/69/360_F_175086988_gYKSBki0ummBMTfuelOEm5WE6hUGlUtI.jpg"}}
        />

        <Profileobj
        profile={{name: "Luke Jacobs", imgURL: "https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg"}}
        />

        <Profileobj
        profile={{name: "John Amico", imgURL: "https://yt3.ggpht.com/ytc/AKedOLSarXZiATL_3Q2j6pz8M4MousshZ2fW4ljVEvHuoA=s900-c-k-c0x00ffffff-no-rj"}}
        />

    </div>
  )
}

export default App