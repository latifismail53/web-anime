const Header = ({ title, description }) => {
  return (
    <>
      <h1 className="text-2xl m-3 md:text-3xl font-bold my-5 text-white text-left">
        {title} <span className="text-sky-500">{description}</span>
      </h1>
    </>
  );
};

export default Header;
