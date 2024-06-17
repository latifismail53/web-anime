const Footer = () => {
  return (
    <footer className="bg-white rounded-sm shadow dark:bg-gray-800 mt-5">
      <div className="w-full mx-auto p-2 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()} Anime Next . Build with ❤️{" "}
          <a
            href="https://linkedin.com/in/latifismailadjie/"
            className="hover:underline"
            target="_blank"
          >
            Latifismailadjie
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <p>
              Thanks To{" "}
              <a
                className="text-bold text-blue-200"
                href="https://api.jikan.moe"
              >
                Jikan (時間) API
              </a>
            </p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
