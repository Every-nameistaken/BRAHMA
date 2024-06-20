import HeaderImg from "../assets/handShake1.png"
import Logo from "./Logo";

export default function Header(){
    let sideNav =  document.getElementById('sideNav');
    // let secondTopNav = document.getElementById('secondTopNav');
    // let firstTopNav = document.getElementById('firstTopNav');

    
    function hideNav(){
        sideNav.style.display ='none';
    }
    function showNav(){
        sideNav.style.display = 'block';
    }
    return(
    <>
    <div id="firstTopNav" className="fixed  left-0 right-0 top-0 font-serif justify-between  hidden md:flex select-none z-10 bg-white">
        <div className="flex justify-evenly p-6 text-lg w-[100%]">
            <div className=""><a href="buy">Buy</a></div>
            <div className=""><a href="rent">Rent</a></div>
            <div className=""><a href="sell">Sell</a></div>
            <div className=""><a href="*">Loans</a></div>
            <div className=""><a href="*">Agents</a></div>
        </div>

        <Logo/>
       
        <div className="flex justify-evenly p-6 text-lg w-[100%]">
            <div className=""><a href="*">Rentals</a></div>
            <div className=""><a href="*">Advertise</a></div>
            <div className=""><a href="*">Help</a></div>
            <div className=" text-nowrap"><a href="*">Sign In</a></div>
        </div>
    </div>

    

    <div style={{backgroundImage:`url(${HeaderImg})`}} className=" bg-no-repeat bg-cover relative filter blur-[2px] h-[450px] md:h-[400px] md:mt-20 p-4 box-border font-serif">  
    </div>

    <div className=" md:mt-24 h-80 right-0 left-0   absolute top-0 font-serif ">

    <div className="flex justify-between select-none  md:hidden">
        <div onClick={showNav} className="cursor-pointer"><i  className="fa-solid fa-bars text-2xl mt-5 text-white w-full ml-5"></i></div>
        <Logo />
        <div><a className="fa-solid text-xl mt-5 w-full mr-5 -ml-5"  href="signin">Sign in</a></div>
    </div>

    <div id="sideNav" className="bg-white -mt-20 select-none hidden fixed right-0 left-0 font-serif">
            <div className="flex justify-between w-full">
                <div className="cursor-pointer w-3/4">
                    <i onClick={hideNav} className="fa-solid fa-xmark  px-2 hover:ring-2 rounded-lg text-blue-600 text-2xl mt-5 ml-3"></i>
                </div>
                <div className=" w-full  ">
                    <Logo />
                </div>
            </div>
            <ul>
                <li className="border-t border-b p-3"><a className="block" href="buy">Buy</a></li>
                <li className="border-b p-3"><a className="block" href="sell">Sell</a></li>
                <li className="border-b p-3"><a className="block"href="rent">Rent</a></li>
                <li className="border-b p-3" ><a className="block"href="*">Loans</a></li>
                <li className="border-b p-3"><a className="block"href="*">Agents</a></li>
                <li className="border-b p-3"><a className="block"href="*">Rentals</a></li>
                <li className="border-b p-3"><a className="block"href="*">Advertise</a></li>
                <li className="border-b p-3"><a className="block"href="*">Help</a></li>
            </ul>
        </div>

            <div className=" mx-auto md:mx-0 p-4 w-[460px] select-none ">
                <h1 className="text-5xl font-extrabold text-white py-4">Agents. Tours.</h1>
                <h1 className="text-5xl font-extrabold text-white py-4">Loans. Homes.</h1>
                <div className=" p-4 my-4 box-border rounded-xl bg-white focus-within:shadow-md
                focus-within:shadow-purple-700 ">
                    <input className="w-[350px] h-10 outline-none  " type="text" placeholder="Enter an addrress, neigborhood,city, or ZIP code" />
                    <i className="fa-solid fa-magnifying-glass text-lg h-10 text-blue-900  px-3" ></i>
                </div>
            </div>

        </div>

        
    </>
    );
}