import propTypes from "prop-types"
export default function Card(props){

    return(
        <>
        <div className="w-56 inline-block  rounded-lg shadow-2xl my-4 mx-2 box-border font-serif">
            <div>
                <img className="w-full h-36 rounded-t-lg" src={props.img} alt="Images" />
            </div> 
            <div className="font-serif">
                <p className="font-bold p-2">N{props.price}</p>
                <div className="flex justify-between text-gray-500 p-1">
                    <span className="">{props.rooms} bd</span> &#183;
                    <span className="">{props.bathrooms} ba</span> &#183;
                    <span className="">{props.land} sqft</span> &#183;
                    <span className=" ">{props.state}</span>
                </div>
                <p className="px-2 text-gray-500">{props.address}</p>
            </div>
        </div>

        </>
    );
}
Card.propTypes ={
    price : propTypes.number,
    rooms : propTypes.number,
    land : propTypes.number,
    bathrooms :  propTypes.number,
    state : propTypes.string,
    address : propTypes.string
}
Card.defaultProps = {
    price : 0.00,
    rooms : 0,
    bathrooms : 0,
    land : 0,
    state : "state",
    address : 'address'


}