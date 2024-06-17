import bannerBackground from "../assets/images/banner_wallpaper.svg";
const Expertise = () => {
  const expertizeData = [
    "C++/C",
    "Data Structures",
    "Algorithms",
    "Design Principles",
    "Object Oriented Programming(Oops)",
    "JavaScript(proficient with ES6+)",
    "ReactJs",
    "React Native",
    "HTML",
    "CSS",
    "Webpack",
    "RestApi",
    "AWS",
    "Agile Methodologies",
    "Database Management System",
    "Operating System",
    "Computer Network",
    "Git",
    "Problem Solving",
    "Debuging Skills",
    "Communication Skills",
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
            // backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
            background: "linear-gradient(135deg, rgb(68 173 243), rgb(142, 68, 173))",
          }}
          className="box-container items-center flex py-8"
        >
          <div className="flex text-white justify-center text-center w-full">
            {/* text container */}
            <div className="w-2/3 text-center space-y-4 space-x-4">
              <h1 className="text-4xl font-bold">I love these technologies</h1>
              <p>
                I'm really passionate about technology! I enjoy working with
                cool stuff like ReactJs and React Native to create awesome apps.
                I also love solving problems and making things work smoothly. In
                my free time, you can usually find me tinkering with new coding
                projects or exploring the latest tech trends. I believe that
                technology has the power to make our lives better and I'm
                excited to be a part of that journey. Let's work together to
                build something amazing! Hire me and let's make great things
                happen!
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
