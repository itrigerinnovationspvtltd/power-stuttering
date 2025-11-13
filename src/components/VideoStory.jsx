import React from "react";

const stories = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/KojUMSUR8oI?si=ZSQSDZLcJBAc8FXB",
    desc:
      "Connor stuttered severely on almost every word before the Stutter-Free Speech program. He now has a new job teaching and training sailing teams in Newport Beach, California.",
    name: "Connor's Story",
    bgColor: "bg-blue-50",
    textColor: "text-blue-900",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/THEa9Z1QVNE?si=J8jMQ0TpmLbf7xOn",
    desc:
      "David came all the way from Uruguay to get help for his stuttering. He was a successful software company CEO, but stuttered during video conference calls with his many employees. Now he presents international workshops to software organizations.",
    name: "David's Story",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-900",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/n-W4xdqPim0?si=ndokFmYWC_1sIQ5i",
    desc:
      "From struggling to speak fluently since kindergarten, to gaining confidence and control over his speech disorder, Adrian’s story shows what’s truly possible with the right support and guidance.",
    name: "Adrian's Story",
    bgColor: "bg-purple-100",
    textColor: "text-purple-900",
  },
];

const VideoStory = () => {
  return (
    <section className=" py-10 sm:py-16 px-6 max-w-7xl mx-auto rounded-md">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8">
        Success Stories
      </h2>
      <p className="max-w-2xl mb-8 text-gray-700 text-base md:text-lg">
        Real people. Real transformation. Watch how Power Stuttering Therapy has helped individuals regain their confidence and speak fluently.
      </p>
      <button
        className="mb-12 bg-white border border-gray-300 text-gray-800 font-semibold py-2 px-6 rounded shadow-xl hover:bg-gray-100 transition max-w-max"
      >
        Explore Client Testimonials
      </button>

      {/* one card per row */}
      <div className="flex flex-col space-y-12 ">
        {stories.map(({ id, videoUrl, desc, name, bgColor, textColor }, index) => (
          <div
            key={id}
            //  Alternate layout (video left, then right)
            className={`${bgColor} flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center  rounded-lg shadow-xl p-4 overflow-hidden gap-5`}
          >
            {/* Embedded YouTube video */}
            <div className="relative shadow-2xl w-full md:w-[400px] aspect-video rounded-2xl md:rounded-2xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl md:rounded-2xl "
                src={videoUrl}
                title={`YouTube video by ${name}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Text section */}
            <div
              className={`p-4 md:p-8 w-full md:w-1/2 text-sm sm:text-baseflex flex-col justify-center rounded-2xl`}
            >
              <h3
                className={`${textColor} font-extrabold text-2xl sm:text-3xl mb-3`}
              >
                {name}
              </h3>
              <p className={`italic ${textColor}`}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoStory;
