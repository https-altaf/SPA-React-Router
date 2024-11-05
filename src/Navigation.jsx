import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
      
         <nav className='bg-green-300 p-3'>
           <div>
             <h1></h1>
           </div>
            <ul className='flex  '>
                <li className='px-3'>
                    <Link to={"/"}>Home</Link>
                </li>
                <li className='px-3'>
                    <Link to={"/about"}>About</Link>
                </li>
                <li className='px-3'>
                    <Link to={"/contact"}>Contact Us</Link>
                </li>
                 
            </ul>
        </nav>
    
  );
}

export default Navigation
