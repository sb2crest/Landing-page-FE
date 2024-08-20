import { useEffect } from "react";

const GoogleReviews = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.dataset.useServiceCore = "defer";
    script.onload = () => {};
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="google-reviews-widget -mt-12">
        <h2 className="text-3xl text-center font-bold tracking-tight text-orange-900 sm:text-4xl">
          Do not just take our word
        </h2>
        <div
          className="elfsight-app-fb7adff5-6a66-4f9c-9841-99b058ae8956"
          data-elfsight-app-lazy
        ></div>
    </div>
  );
};

export default GoogleReviews;
