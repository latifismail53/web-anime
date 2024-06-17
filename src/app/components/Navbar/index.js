import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <nav className="bg-slate-800">
      <div className="container mx-auto px-4 sm:px-8 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-3">
              <img
                className="h-8 w-8 mr-5"
                // react logo
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="Workflow"
              />
            </div>
            <a
              href="/"
              className="bg-slate-700 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <Searchbar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
