const Navbar = () => {
  // const router = useRouter();

  const handleFeatures = () => {
    // Handle the features functionality or navigation here
  };

  const handleDocumentation = () => {
    // Handle the documentation functionality or navigation here
  };

  return (
    <nav className="fixed top-0 flex h-24 w-full items-center justify-between bg-main-white pl-20 pr-16">
      <div className="flex">
        {/*
          <img
          src="assets/images/KnoWitz-logo.svg"
          alt="KnoWitz Logo"
          className="w-10 pr-1"
          />
          LOGO HERE
          */}
        <button
          type="button"
          className="font-Inter text-2xl font-medium text-main-black"
          onClick={handleFeatures}
        >
          Crafty
        </button>
      </div>

      <div className="space-x-20">
        <button
          type="button"
          className="font-Inter font-normal text-main-black"
          onClick={handleFeatures}
        >
          Features
        </button>

        <button
          type="button"
          className="pr-6 font-Inter font-normal text-main-black"
          onClick={handleDocumentation}
        >
          Documentation
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
