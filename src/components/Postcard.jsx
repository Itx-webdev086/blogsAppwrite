import databaseService from "../appwrite/database";
import { Link } from "react-router-dom";

function Postcard({ $id, title, image }) {
  return (
    <Link to={`/post/${$id}`} >
      <div className="w-full rounded-lg group overflow-hidden">
        <div className="w-full h-46 flex justify-center items-center rounded-lg overflow-hidden">
          <img
            src={databaseService.getFilePreview(image)}
            alt={title}
            className="rounded-lg w-full h-full group-hover:scale-105 transition duration-500"
          />
        </div>
        <h2 className="text-2xl font-semibold mt-5">{title}</h2>
      </div>
    </Link>
  );
}

export default Postcard;
