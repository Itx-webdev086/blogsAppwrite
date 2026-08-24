 



function Logo({ className ='' }) {
  return (
    <div className={`flex flex-col py-1 px-3 shadow-md shadow-teal-500 rounded ${className}`}>
         <h1 className="text-2xl text-teal-500 font-bold font-mono">storiqo</h1>
         <span className="text-white font-thin">where stories begin</span>
    </div>
  );
}

export default Logo;
