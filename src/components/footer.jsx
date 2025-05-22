const Footer=()=>{
    return (
       <footer className=" text-gray-400 py-3 mt-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Kanishka Pandey. All rights reserved.</p>
        
        <div className="flex space-x-1 mt-2 md:mt-0 p-1">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
    )
};
export default Footer;