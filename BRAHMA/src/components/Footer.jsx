export default function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer className="text-center mt-20 font-thin">
            <h1 className="font-normal">CONTACT CVS</h1>
            <li className="fa-brands fa-twitter p-2 bg-slate-800 rounded-full mx-3 my-5 text-white"></li>
            <a href="https://wa.link/47ysd6"><li className="fa-brands fa-whatsapp p-2 text-white bg-slate-800 rounded-full mx-3 my-5"></li></a>
            <p className="text-sm font-semibold my-2">IWOROKO ROAD</p>
            <p className="text-sm font-semibold my-2">AYEDUN QUATERS</p>
            <p className="text-sm font-semibold my-2">NOVA</p>
            <p className="text-sm font-semibold my-2">ADO EKITI</p>
            <p className="text-sm font-semibold"></p>
            <p className="text-sm font-semibold mt-10">t. 906 978 3939</p>
            <p className="font-semibold text-sm mt-2">e. ayorkunle.dada@gmail.com</p>
            <p className="font-semibold text-sm mt-2">&copy; {year} BRAHMA </p>
            <h1 className="my-5 font-normal">NAVIGATION</h1>

        </footer>
    );
}