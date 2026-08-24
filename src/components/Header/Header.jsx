import { Container, Logo, Logoutbtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from 'react'

function Header() {
  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate();

  const [isMobileMenu, SetIsMobileMenu] = useState(false)

  const handleNavigate = (slug) => {
    navigate(slug);
    SetIsMobileMenu(false)
  }

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "AllBlogs",
      slug: "/allblogs",
      active: authStatus,
    },
    {
      name: 'MyBlogs',
      slug: '/myblogs',
      active: authStatus
    },
    {
      name: "AddBlog",
      slug: "/addblog",
      active: authStatus,
    },
  ];

  return (
    <header className="bg-gray-800 box-border fixed top-0 w-full h-fit z-50">
      <Container>
        <nav className="flex">
          <div className="mr-5">
            <Link to="/">
              <Logo className="w-26 h-16 rounded object-cover" />
            </Link>
          </div>
         {/* desktop nav */}
          <ul className="hidden md:flex gap-4 items-center mx-auto">
            {navItems.map((item) =>
               item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="rounded-md px-5 py-1 inline-block text-white hover:shadow hover:shadow-teal-500 hover:text-teal-500 cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null,
            )}
            {authStatus && (
              <li>
                <Logoutbtn />
              </li>
            )}
          </ul>

          {/* desktop nav end */}

          {/* Mobile Menu icon */}
          <button onClick={() => SetIsMobileMenu((prev) => !prev)}
          className="md:hidden ml-auto text-white p-2 rounded-md hover:text-teal-500 cursor-pointer"
          aria-label="Toggle menu"
          >
            {isMobileMenu ? (
              // X icon
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
            {/* Mobile Menu icon end */}

        </nav>

        {/* Mobile dropdown menu */}
        {isMobileMenu && (
          <div className="md:hidden py-4 ">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigate(item.slug)}
                      className="w-full text-left rounded-md px-5 py-2 text-white hover:bg-gray-700 hover:text-teal-500 cursor-pointer"
                      >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li className="px-5">
                  <Logoutbtn />
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Mobile dropdown menu end */}

      </Container>
    </header>
  );
}

export default Header;
