const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://latifismailadjie.netlify.app/"
            className="hover:underline"
          >
            Latifismailadjie
          </a>
          . Build with ❤️
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
