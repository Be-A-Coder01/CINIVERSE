const Menu = () => {
  return (
    <div
      className="flex justify-between  px-6 py-4  sm:border-none sm:px-10 sm:py-5 md:px-20 md:py-5 lg:px-20 lg:py-5 bg-[#0F1016] z-50"
      id="navbar"
    >
      <p className="text-red-600 text-sm sm:text-lg sm:font-semibold md:text-2xl md:font-bold lg:text-4xl lg:font-bold">
        CINIVERSE
      </p>

      <input
        type="text"
        placeholder="search your favourite..."
        className="text-xs rounded-md h-5 px-5 sm:text-xs sm:w-5/12 sm:px-5  sm:h-7 sm:py-1  md:text-base md:w-4/12 md:px-5 md:h-9 md:py-3 lg:w-4/12 lg:px-5 lg:h-9 lg:py-3 sm:rounded-md bg-[#323038]  text-white"
      />
    </div>
  );
};

export default Menu;
