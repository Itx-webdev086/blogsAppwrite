 



function Logo({ className ='' }) {
  return (
    <div className={`flex flex-col p-1 border border-teal-500 rounded ${className}`}>
         <h1 className="text-2xl text-teal-500 font-semibold font-mono">storiqo</h1>
         <span className="text-white font-light font-mono">where stories begin</span>
    </div>
  );
}

export default Logo;
