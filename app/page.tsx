import Image from "next/image";
import Navbar from "./component/navbar/Navbar";
import Main from "./component/main/Main";
import Third from "./component/third/Third"
import Fourth from "./component/fourth/Fourth";
import Fifth from './component/fifth/Fifth'
import Sixth from "./component/sixth/Sixth";





export default function Home() {
  return (
    <div><Navbar/>
    <Main/>
    <Third/>
    <Fourth/>
    <Fifth/>
    <Sixth/>
    
    </div>
  );
}
