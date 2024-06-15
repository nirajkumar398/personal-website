import bannerBackground from "../assets/images/banner_wallpaper.svg";
const Expertise = () => {
  const expertizeData = [
    "ReactJs",
    "Java Script",
    "React Native",
    "Data Sctructures",
    "Algorithms",
    "C++/C",
    "AWS",
  ];
  return (
    <>
      <div className="mt-2">
        <h1 className=" mb-16 text-4xl font-bold underline  text-center">
          My Expertise
        </h1>
        {/* box section */}

        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-8"
        >
          <div className="flex text-white justify-center text-center w-full">
            {/* text container */}
            <div className="w-2/3 text-center space-y-4 space-x-4">
              <h1 className="text-4xl font-bold">I love these technologies</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                autem facere molestias libero eaque praesentium, dignissimos
                dolores, cum nisi rerum, modi corporis eligendi harum. Ut
                provident saepe in et ipsum.
              </p>
              <button className=" text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg">
                Hire Me
              </button>
            </div>
          </div>
          <div className="flex justify-center w-full">
            {/* skills container */}
            <div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap">
              {expertizeData.map((data) => (
                <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">
                  {data}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
