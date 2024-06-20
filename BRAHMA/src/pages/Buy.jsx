import Header from "../components/Header";
import Card from "../components/Card";
import img from "../assets/imTheKey.png"

export default function BuyPage(){
    return(
        <>
        <Header />
        <div className="px-auto mx-auto flex flex-wrap justify-around">
        <Card img={img} price={250.501} rooms={3} bathrooms={2} land={3291} state="Rent" address="Behind F.O.G Supermarket, Bawa" />
        <Card img={img} price={250.501} rooms={3} bathrooms={2} land={3291} state="Rent" address="Behind F.O.G Supermarket, Bawa" />
       
        </div>
       
        
        </>
    );
}