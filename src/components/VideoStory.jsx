import React from "react";

const VideoStory = () => {
  return (
    <section id="story" className="py-16 sm:py-32 bg-gray-50">
      {/* Main Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-5xl font-bold text-red-600 mb-3">
          Inspiring Stuttering Success Stories
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
          Real people. Real transformation. Watch how Power Stuttering Therapy has helped
          individuals regain their confidence and speak fluently.
        </p>
      </div>

      {/* Section 1 - Video Left / Text Right */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-10 sm:gap-0 mb-10">
        {/* Video */}
        <div className="flex justify-center md:justify-start">
          <div
            className="relative w-full max-w-[350px]"
            style={{ aspectRatio: "1 / 1" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/KojUMSUR8oI?si=1TAAGQTcSTzR9NiE"
              title="Stuttering Success Story 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Text Content */}
        <div>
          <h3 className="text-2xl sm:text-4xl font-bold sm:font-extrabold text-red-600 mb-3">
           Conor's Story  
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-xl">
            Connor stuttered severely on almost every word before the Stutter-Free Speech program. He now has a new job teaching and training sailing teams in Newport Beach, California.
          </p>
        </div>
      </div>

      {/* Section 2 - Text Left / Video Right */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-10 sm:gap-0">
        {/* Text Content */}
        <div>
          <h3 className="text-2xl sm:text-4xl font-bold sm:font-extrabold text-red-600 mb-3">
            David's Story  
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-xl">
            David came all the way from Uruguay to get help for his stuttering. He was a successful software company CEO, but stuttered during video conference calls with his many employees.
Now he presents international workshops to software organizations.
          </p>
        </div>

        {/* Video */}
        <div className="flex justify-center md:justify-end">
          <div
            className="relative w-full max-w-[350px]"
            style={{ aspectRatio: "1 / 1" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/THEa9Z1QVNE?si=SUXWRLbkzwNsR423"
              title="Stuttering Success Story 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoStory;
