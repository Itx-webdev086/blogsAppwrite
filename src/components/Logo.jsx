 
import storiqoLogo from "../assets/storiqo-logo.png";


function Logo({ className ='' }) {
  return <img 
  src={storiqoLogo} 
  alt="Logo"
  
  className={className}
  />;
}

export default Logo;
