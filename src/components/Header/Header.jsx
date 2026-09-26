import { Container, Logo, Logoutbtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useId } from "react";
import {  FaBell, FaFileAlt, FaSearch } from "react-icons/fa";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate();

  const id = useId();

  const [search, setSearch] = useState("");

  const [isMobileMenu, SetIsMobileMenu] = useState(false);

  const handleNavigate = (slug) => {
    navigate(slug);
    SetIsMobileMenu(false);
  };

  const sidebarItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Stories",
      slug: "/myblogs",
      active: authStatus,
    },
  ];


  return (
    <header className="bg-gray-800 box-border fixed top-0 w-full h-fit z-50">
      <Container>
        <nav className="flex">
          {/* Mobile Menu icon */}

          {authStatus && (
            <button
              onClick={() => SetIsMobileMenu((prev) => !prev)}
              className="text-white p-2 rounded-md hover:text-teal-500 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenu ? (
                // X icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          )}
          {/* Mobile Menu icon end */}

          <div className="ml-5">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          {/* search bar */}
          {authStatus && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!search.trim()) return;
                navigate(`/?search=${encodeURIComponent(search.trim())}`);
              }}
              className="ml-5 hidden sm:flex items-center gap-.5 flex-1 max-w-sm"
            >
              <FaSearch className="text-white font-light" />
              <input
                type="text"
                placeholder="Search stories..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-3 py-1 rounded-md text-white font-light focus:outline-none focus:ring-0"
              />
            </form>
          )}
          {/* search bar end */}

          {/* desktop nav */}
          <ul className="hidden md:flex gap-4 items-center ml-auto">
            {authStatus ? (
              <>
                  <li key={id}>
                    <button
                      onClick={() => navigate('/addblog')}
                      className="rounded-md px-3 py-1 flex flex-row items-center gap-2 font-light text-white hover:shadow hover:shadow-teal-500 hover:text-teal-500 cursor-pointer"
                    >
                      <FaFileAlt className="text-xl" />
                      Write
                    </button>
                  </li>

                  <li key={id}>
                    <button
                      onClick={() => navigate()}
                      className="rounded-md px-3 py-1 font-light text-white hover:shadow hover:shadow-teal-500 hover:text-teal-500 cursor-pointer"
                    >
                      <FaBell className="text-xl" />
                    </button>
                  </li>
                  </>
                
              ) : (
              <li>
                <button
                  onClick={() => navigate("/signup")}
                  className="rounded-md py-1 px-3 float-end font-semibold bg-white text-gray-800 active:scale-95 cursor-pointer"
                >
                  Get started
                </button>
              </li>
            )}
            {authStatus && (
              <li>
                <Logoutbtn />
              </li>
            )}
          </ul>

          {/* desktop nav end */}
        </nav>

        {/* Mobile dropdown menu */}
        {authStatus ? (
          <div
            className={`py-4 px-5 absolute top-16 left-0 h-screen w-64 bg-gray-800 z-50 transition duration-1000 ${isMobileMenu ? "translate-x-0" : "-translate-x-full"}`}
          >
            <ul className="flex flex-col gap-2">
              {sidebarItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigate(item.slug)}
                      className="w-full text-left rounded-md px-5 py-2 text-white hover:bg-gray-700 hover:text-teal-500 cursor-pointer"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null,
              )}
              {authStatus && (
                <li className="px-5">
                  <Logoutbtn />
                </li>
              )}
            </ul>
          </div>
        ) : null}

        {/* Mobile dropdown menu end */}
      </Container>
    </header>
  );
}

export default Header;
