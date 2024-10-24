
const MyAbout = () => {
  return (
    <div
      className="my-5 rounded-xl p-4 px-9 "
      
    >
      <h1 className="text-4xl font-medium text-primary mt-4  md:text-4xl">About us</h1>
      <div className="md:flex items-center justify-center">
        <div className="md:w-3/4">
          <p className="text-white text-2xl md:text-3xl mt-5 mb-4 ">Welcome to <span className="text-red-700 font-medium">DEX N DEVS</span> a one stop Solutions</p>
          <p className="text-white text-sm md:text-xl tracking-tight">
            At dexNdevs Solutions, we turn ideas into beautifully crafted
            websites. Our mission is to deliver innovative web solutions that
            elevate your online presence and drive results. Our vision is to be
            the leading web development partner known for transforming digital
            dreams into reality through creativity and cutting-edge technology.
          </p>
        </div>
        <div className="right w-[90%] md:w-4/12">
          <img src={"https://s3-alpha-sig.figma.com/img/2527/1f89/b420648cc0ce460437a0da116c04e1a5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h3YXoiZrd7KOdOsXZDKawjSBLnZ9kxhvAnTmylHA4d~p-g~eClTh5O4XAnil7F7WAlAa5qD5M9BaXgiYtIcnPFu6j~KXmF0RBYbslp~uzKZKqYQygru0A6ECrLzri3-XrTahRFZvWRZm~7I2U4nfbOw0Gffe4Ob-47EvoTxrwZiZcHoia385mDh6yLeLjrJdh31gY23E-FEacJKl4y0QAIxfA5Zju17Fllw1fqenKJ6w7wnahtrOHxPdK2DrPSRoH6PKSfblHAfoZCPE6TJUILwnNmC8c0Tx4qzNM5ZYaHBMFb5nwhHdUuTfOL-v4nA79aLOMKvU-mvZ6ky3RhiOFg__"} className="w-full animate-pulse"  alt="Loading img..." />
        </div>
      </div>
    </div>
  );
};

export default MyAbout;
