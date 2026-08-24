 
import storiqologo from "../assets/storiqo-logo.png";


function Logo({ className ='' }) {
  return <img 
  src={storiqologo} 
  alt="Logo"
  
  className={className}
  />;
}

export default Logo;
