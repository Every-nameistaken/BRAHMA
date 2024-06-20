import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeRecImg from "../assets/homeRec.webp"
import Btn from "../components/Btn";
import IndexCard from "../components/IndexCard";
import RentAHome from "../assets/rentAHome.webp";
import BuyAHome from "../assets/buyAHome.webp";
import SellAHome from "../assets/sellAHome.webp";


export default function Homepage(){
    return(
        <>
        <Header />
        <div className="flex md:flex-row flex-col mt-10 select-none">
            <div className="w-full  mx-auto md:mt-36 mb-3 text-center">
                
                <h1 className="font-bold text-2xl py-3">Get home recommendations</h1>
                <p className="text-gray-400 pb-3">Sign in for a more personalized experience</p>
                <Btn name='Sign up' href='*' />
                

            </div>
            <div className="w-full mx-auto">
                <img src={HomeRecImg} alt="home rec" />
            </div>
        </div>

        <div className="flex flex-col md:flex-row bg-gray-100 p-5 select-none">
           <IndexCard img ={RentAHome} name = "Rent a home" infoMsg = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium" btnName = 'Available space' btnHref = 'rent' />
           <IndexCard name = "Buy a home" img ={BuyAHome} infoMsg = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium" btnName = "See your options" btnHref = "buy"  />
           <IndexCard  name = "Sell a home" img ={SellAHome} infoMsg = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium" btnName = "Make public" btnHref = "sell"/>
        </div>
        
        



        <Footer />
        </>
    );
}