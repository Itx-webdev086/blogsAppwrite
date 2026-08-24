 
import logo from "../assets/storiqo-logo.png";


function Logo({ className ='' }) {
  return <img 
  src={logo} 
  alt="Logo"
  
  className={className}
  />;
}

export default Logo;
