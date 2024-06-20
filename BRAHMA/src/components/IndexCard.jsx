
import propTypes from "prop-types"
import Btn from "./Btn";
export default function IndexCard(props){
    return(
      <div className="flex md:flex-col shadow-xl rounded-lg bg-white w-10/12 mx-auto mt-10 p-4 md:mx-4">
      <div>
          <img src={props.img} alt="Rent a Home" />
      </div>
      <div className="text-center">
          <h1 className="font-extrabold text-2xl mb-3 ">{props.name}</h1>
          <p className="mb-3">{props.infoMsg}</p>
          <a href={props.btnHref}><button className="ring-1 px-4 mb-3 rounded-lg py-2 font-bold text-blue-700 text-lg hover:bg-purple-100 active:bg-purple-50 transition-all">{props.btnName}</button></a>
      </div>
  </div>
    );
}