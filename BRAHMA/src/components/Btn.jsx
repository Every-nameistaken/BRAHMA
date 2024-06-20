import propTypes from "prop-types"
export default function Btn(props){
    return(
<a href={props.href}><button className="ring-1 px-4 mb-3 rounded-bl-xl rounded-tr-xl  py-2 font-bold text-blue-700 text-lg hover:bg-purple-100 active:bg-purple-50 transition-all">{props.name}</button></a>
    );
}
Btn.propTypes ={
    name : propTypes.string,
    href : propTypes.string
}
Btn.defaultProps ={
    name : "btn",
    href : "*"
}