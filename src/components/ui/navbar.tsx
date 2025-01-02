import { Link } from "react-router-dom";
import { Button } from "./button";

const Navbar = () => {
    return (
        <div>
            <div className=" w-full mx-auto">
              <div className=" py-3 flex justify-center gap-20 border items-center">
                <img src="https://i.ibb.co.com/jkwmMHv/download-1.jpg" className="w-14" alt="" />
                <div className=" flex justify-center items-center gap-4 font-serif text-xl">
                   <Link to="/"> <Button className=" bg-blue-400">Home</Button></Link>
                   <Link to="/about"><Button className=" bg-blue-400">About</Button></Link>
                    <Button className=" bg-blue-400">Login</Button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Navbar;