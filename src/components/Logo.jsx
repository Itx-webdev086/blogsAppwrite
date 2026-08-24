 



function Logo({ className ='' }) {
  return (
    <div className={`flex flex-col gap-y-1 p-1 ${className}`}>
         <h1 className="text-2xl text-teal-500 font-semibold font-mono">storiqo</h1>
         <span className="text-white font-light">where stories begin</span>
    </div>
  );
}

export default Logo;
