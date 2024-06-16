import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { GoBriefcase } from "react-icons/go";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoIosArrowRoundBack, IoMdArrowDropdown } from "react-icons/io";
import { IoLocationOutline, IoShareSocial } from "react-icons/io5";
import { MdDateRange, MdOutlineRemoveRedEye } from "react-icons/md";
import { RiErrorWarningLine, RiPencilFill } from "react-icons/ri";

const Home = () => {
  const [activeLink, setActiveLink] = useState("");
  const [openDropdowns, setOpenDropdowns] = useState({});

  const links = [
    { path: "/", label: "All Posts (32)" },
    { path: "/articles", label: "Articles" },
    { path: "/event", label: "Event" },
    { path: "/education", label: "Education" },
    { path: "/job", label: "Job" },
  ];

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    setActiveLink(path);
    window.history.pushState(null, "", path);
  };

  const handleDropdownToggle = (id) => {
    setOpenDropdowns(openDropdowns === id ? null : id);
  };

  const posts = [
    {
      id: 1,
      category: "✍️ Article",
      post_photo: "https://i.postimg.cc/pLs5W3Hs/Rectangle-5.png",
      title: "What if famous brands had regular fonts? Meet Regular Brands!",
      description:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      user_photo:
        "https://i.postimg.cc/tTpQ4RH6/f42d73f4b2b7835b4c918c4edcf10f64.jpg",
      user_name: "Sarthak Kamra",
      views: "1.4K",
    },
    {
      id: 2,
      category: "🔬️ Education",
      post_photo: "https://i.postimg.cc/RVdrVJSL/Rectangle-5-1.png",
      title:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      description:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      user_photo:
        "https://i.postimg.cc/3JYRcGfX/15d7211204149d93adda6dfafb5d81f2.jpg",
      user_name: "Sarah West",
      views: "1.4K",
    },
    {
      id: 3,
      category: "🗓️ Meetup",
      post_photo: "https://i.postimg.cc/YqWy9LbG/Rectangle-5-2.png",
      title: "Finance & Investment Elite Social Mixer @Lujiazui",
      description:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      user_photo: "https://i.ibb.co/qMgV6G0/Rectangle-3.png",
      user_name: "Ronal Jones",
      date: "Fri, 12 Oct, 2018",
      location: "Ahmedabad, India",
      views: "1.4K",
    },
    {
      id: 4,
      category: "💼️ Job",
      title: "Software Developer",
      description:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      user_photo: "https://i.ibb.co/tDH0b72/Rectangle-3-1.png",
      user_name: "Joseph Gray",
      date: "Fri, 12 Oct, 2018",
      location: "Noida, India",
      views: "1.4K",
      company: 'Innovaccer Analytics Private Ltd.'
    },
  ];

  return (
    <div className="w-full">
      <div className="bg-main w-full lg:h-[500px] h-[250px] relative">
        <div className="absolute w-full px-5 py-5 text-white flex lg:hidden items-center justify-between">
        <IoIosArrowRoundBack className='text-3xl'/>
        <button className="border border-white p-2 rounded-md text-xs font-medium">Join Group</button>
        </div>
        <div className="flex flex-col items-start gap-2 text-white absolute lg:bottom-28 bottom-10 lg:left-28 left-10">
          <h1 className="text-4xl font-semibold">Computer Engineering</h1>
          <p className="text-sm font-normal">
            142,765 Computer Engineers follow this
          </p>
        </div>
      </div>
      <div className="w-full px-20 mt-10 lg:inline-block hidden sticky top-0 bg-white z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={`text-base ${
                  activeLink === link.path
                    ? "text-[#000000] font-medium underline underline-offset-[24px] decoration-[#000] decoration-2"
                    : "text-[#8A8A8A] font-normal"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <button className="bg-[#EDEEF0] px-4 py-2 rounded-md flex items-center gap-1 font-medium">
              <span>Write Post</span>
              <IoMdArrowDropdown className="text-xl" />
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded-md flex items-center gap-1 font-medium">
              <HiMiniUserGroup className="text-xl" />
              <span>Join Group</span>
            </button>
          </div>
        </div>
        <hr className="mt-3 border-b w-full border-[#E0E0E0]" />
      </div>
      <div className="mt-5 lg:px-20 w-full grid lg:grid-cols-[60%_30%] grid-cols-1 row-auto items-start lg:gap-[5%]">
        <div className="w-full flex lg:hidden items-center justify-between mb-5 px-5">
            <h1 className="font-semibold text-base">Posts (223)</h1>
            <div className="bg-[#F1F3F5] p-2 rounded-md flex items-center gap-2">
                <span>Filter: All</span>
                <IoMdArrowDropdown />
            </div>
        </div>
        <div className="w-full overflow-y-auto grid grid-cols-1 row-auto items-center gap-y-10 no-scrollbar">
          {posts.map((post) => (
            <div
              key={post.id}
              className="w-full rounded-lg border border-[#E0E0E0] flex flex-col items-start"
            >
              {post.category !== '💼️ Job' && (
                <img src={post?.post_photo} alt="" className="w-full h-[150px] lg:h-[250px] object-cover"/>
              )}
              <div className="w-full p-5 flex flex-col items-start gap-3">
                <h1 className="font-medium text-base">{post?.category}</h1>
                <div className="w-full flex items-center justify-between relative">
                  <h1 className="lg:text-xl text-lg font-semibold w-[80%]">{post?.title}</h1>
                  <button
                    onClick={() => handleDropdownToggle(post.id)}
                    className="p-2 focus:bg-[#BFBFC0] focus:rounded-md"
                  >
                    <BsThreeDots className="text-2xl" />
                  </button>
                  {openDropdowns === post.id && (
                    <div className="absolute bg-white px-10 py-5 flex flex-col items-start gap-5 right-0 top-8 shadow-lg border border-[#E0E0E0] rounded-md no-scrollbar">
                      <h1>Edit</h1>
                      <h1>Report</h1>
                      <h1>Option 3</h1>
                    </div>
                  )}
                </div>
                {post.category === "🗓️ Meetup" && (
                  <>
                    <div className="flex items-center gap-10">
                      <div className="flex items-center gap-2">
                        <MdDateRange />
                        <h1 className="lg:text-lg text-sm font-medium">{post?.date}</h1>
                      </div>
                      <div className="flex items-center gap-2">
                        <IoLocationOutline />
                        <h1 className="lg:text-lg text-sm font-medium">{post?.location}</h1>
                      </div>
                    </div>
                    <button className="w-full flex items-center justify-center py-2 border border-[#A9AEB8] font-medium rounded-md text-red-500">
                      Visit Website
                    </button>
                  </>
                )}
                {post.category === "💼️ Job" && (
                  <>
                    <div className="flex items-center gap-10">
                      <div className="flex items-center gap-2">
                        <GoBriefcase />
                        <h1 className="lg:text-lg text-sm font-medium text-balance ...">{post?.company}</h1>
                      </div>
                      <div className="flex items-center gap-2">
                        <IoLocationOutline />
                        <h1 className="lg:text-lg text-sm font-medium">{post?.location}</h1>
                      </div>
                    </div>
                    <button className="w-full flex items-center justify-center py-2 border border-[#A9AEB8] font-medium rounded-md text-green-500">
                      Apply on Timesjobs
                    </button>
                  </>
                )}
                {post.category !== "🗓️ Meetup" && post.category !== "💼️ Job" && (
                  <p className="lg:text-lg text-base text-[#5C5C5C]">{post?.description}</p>
                )}
                <div className="w-full flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={post?.user_photo}
                      alt="user.png"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <h1 className="lg:text-lg text-base font-medium">{post?.user_name}</h1>
                  </div>
                  <div className="lg:flex hidden items-center gap-5">
                    <div className="flex items-center gap-2">
                      <MdOutlineRemoveRedEye />
                      <span className="text-sm">{post?.views} Views</span>
                    </div>
                    <div className="p-3 rounded-md bg-[#EDEEF0]">
                      <IoShareSocial className="text-xl" />
                    </div>
                  </div>
                  <div className="p-2 text-sm rounded-md bg-[#EDEEF0] flex lg:hidden items-center gap-1">
                      <IoShareSocial className="text-lg" />
                      <span>Share</span>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:flex hidden flex-col items-start gap-1 mt-5 sticky top-20">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <IoLocationOutline className="text-xl" />
              <input
                type="text"
                placeholder="Enter Location"
                className="focus:outline-none w-full"
              />
            </div>
            <RiPencilFill className="text-xl" />
          </div>
          <hr className="w-full border-b border-[#B8B8B8] mb-10" />
          <div className="flex items-center gap-3 text-[#000000] opacity-50 w-full">
            <RiErrorWarningLine className="text-4xl" />
            <span className="text-xs">
              Your location will help us serve better and extend a personalised
              experience.
            </span>
          </div>
          <div className="flex items-center gap-2 mt-10">
            <AiOutlineLike className="text-2xl" />
            <span className="uppercase font-normal">Recommended Groups</span>
          </div>
          <div className="w-full flex flex-col items-center mt-10 gap-y-5">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="https://i.ibb.co/x5vTNfD/7ffa8afe7647578af2381ac9090c32e2.jpg"
                  alt="group.png"
                  className="w-10 h-10 object-cover rounded-full"
                />
                <span>Leisure</span>
              </div>
              <button className="rounded-full px-4 py-2 bg-[#EDEEF0] text-[#000]">
                Follow
              </button>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="https://i.ibb.co/mBRSLqv/Rectangle-6.png"
                  alt="group.png"
                  className="w-10 h-10 object-cover rounded-full"
                />
                <span>Activism</span>
              </div>
              <button className="rounded-full px-4 py-2 bg-[#EDEEF0] text-[#000]">
                Follow
              </button>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="https://i.ibb.co/G5QgMxd/Rectangle-6-1.png"
                  alt="group.png"
                  className="w-10 h-10 object-cover rounded-full"
                />
                <span>MBA</span>
              </div>
              <button className="rounded-full px-4 py-2 bg-[#EDEEF0] text-[#000]">
                Follow
              </button>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="https://i.ibb.co/mzfn9Cz/Rectangle-6-2.png"
                  alt="group.png"
                  className="w-10 h-10 object-cover rounded-full"
                />
                <span>Philosophy</span>
              </div>
              <button className="rounded-full px-4 py-2 bg-[#EDEEF0] text-[#000]">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
