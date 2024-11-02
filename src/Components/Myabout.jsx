
const MyAbout = () => {
  return (
    <div
      className="my-5 rounded-xl p-4 px-9 "
      
    >
      <h1 className="text-4xl font-medium text-primary mt-4  md:text-4xl">About us</h1>
      <div className="md:flex items-center justify-center">
        <div className="md:w-3/4">
          <p className="text-white text-2xl md:text-3xl mt-5 mb-4 ">Welcome to <span className="text-primary font-medium">DEX N DEVS</span> a one stop Solutions</p>
          <p className="text-white text-sm md:text-xl tracking-tight">
            At dexNdevs Solutions, we turn ideas into beautifully crafted
            websites. Our mission is to deliver innovative web solutions that
            elevate your online presence and drive results. Our vision is to be
            the leading web development partner known for transforming digital
            dreams into reality through creativity and cutting-edge technology.
          </p>
        </div>
        <div className="right w-[90%] md:w-4/12">
          <img src={"https://s3-alpha-sig.figma.com/img/2527/1f89/b420648cc0ce460437a0da116c04e1a5?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LwUEtKYk3xDO~3VpEBhFgChJ5xbf0Xdk75omE24FlTz~T0UWNSUIB~6-WvAWq61nKCo08nc3aEdV5~Aslv5RcqciPf2n~gvLnAJ21Vw~Mzu9gyLrvVm6lJ15Pmno82zDOyAOktC8uQ5V5EbWRmuRWLcO3A4HO1Hvy5JvtgpyrQV~5nr7iDXajEctbUpITlz4213i5PPzK2PomiwdO0-2aDgffv7OsT~v-Xhg9EZ-n0OnvV02~TESqK-wfoG7QVWZS1ziTBS2wvLej9wAp-7ZeWzKRRxa7NStRbdgIT-j8xVmiIzVliYm0sWFyJvC7LGU60q~DvNhEisDlHOvhv1NIw__"} className="w-full animate-pulse"  alt="Loading img..." />
        </div>
      </div>
    </div>
  );
};

export default MyAbout;
