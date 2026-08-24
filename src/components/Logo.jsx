 
function Logo({ className = "" }) {
  return (
    <div
      className={`relative flex items-center justify-center w-48 h-28
      shadow-md shadow-teal-500 rounded ${className}`}
    >
      {/* Curved text */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 120"
      >
        <defs>
          <path
            id="bottomCurve"
            d="M 25,65 A 75,75 0 0,0 175,65"
            fill="none"
          />
        </defs>

        <text
          fill="white"
          fontSize="9"
          fontWeight="300"
          letterSpacing="1"
        >
          <textPath
            href="#bottomCurve"
            startOffset="50%"
            textAnchor="middle"
          >
            where stories begin
          </textPath>
        </text>
      </svg>

      {/* Center logo */}
      <h1 className="text-2xl text-teal-500 font-extrabold font-mono z-10">
        storiqo
      </h1>
    </div>
  );
}

export default Logo;



// function Logo({ className ='' }) {
//   return (
//     <div className={`flex flex-col py-1 px-3 shadow-md shadow-teal-500 rounded ${className}`}>
//          <h1 className="text-2xl text-teal-500 font-extrabold font-mono">storiqo</h1>
//          <span className="text-white font-thin -mt-1">where stories begin</span>
//     </div>
//   );
// }

// export default Logo;
