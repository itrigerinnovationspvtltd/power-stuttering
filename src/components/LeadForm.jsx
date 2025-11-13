import React, { useEffect, useRef } from "react";

const LeadForm = () => {
  const formContainerRef = useRef(null);

  useEffect(() => {
    // Clear existing content (important when re-opening modal)
    if (formContainerRef.current) formContainerRef.current.innerHTML = "";

    // Dynamically load Leadpages script
    const script = document.createElement("script");
    script.src = "//powerstuttering.lpages.co/_/js/free-training/"; // ✅ your Leadpages form script
    script.async = true;
    formContainerRef.current.appendChild(script);

    // Optional cleanup
    return () => {
      if (formContainerRef.current) formContainerRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={formContainerRef}
      className="w-full flex justify-center items-center"
    />
  );
};

export default LeadForm;
