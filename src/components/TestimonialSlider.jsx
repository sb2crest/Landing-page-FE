import { useRef, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";

const testimonials = [
  {
    id: 1,
    quote: "Staying Alive",
    text: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
    author: "Michael Scott",
    rating: 5,
  },
  {
    id: 2,
    quote: "The Office is Great!",
    text: "Absolutely hilarious! The humor is spot on and the characters are very relatable. I love the show and would recommend it to anyone looking for a good laugh.",
    author: "Pam Beesly",
    rating: 4,
  },
  {
    id: 3,
    quote: "Incredible Experience",
    text: "This experience was truly one-of-a-kind. The level of detail and creativity involved was astounding. I would highly recommend it to anyone seeking something extraordinary.",
    author: "Jim Halpert",
    rating: 5,
  },
  // Add more testimonials here
];

const TestimonialSlider = () => {
  const sliderRef = useRef(null);
  const keenSlider = useRef(null);

  useEffect(() => {
    keenSlider.current = new KeenSlider(sliderRef.current, {
      loop: true,
      slides: {
        origin: "center",
        perView: 1.25,
        spacing: 24, // Adjusted spacing
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });

    // Dynamically add the Elfsight script
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.dataset.useServiceCore = "defer";
    script.onload = () => {
      // Elfsight script loaded
      // You can add any additional code to run after script loads if necessary
    };
    document.body.appendChild(script);

    return () => {
      keenSlider.current.destroy();
      document.body.removeChild(script); // Clean up the script tag when the component unmounts
    };
  }, []);

  const handlePrevClick = () => keenSlider.current.prev();
  const handleNextClick = () => keenSlider.current.next();

  return (
    <section className="bg-black">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-orange-900 sm:text-4xl">
              Do not just take our word
            </h2>

            <p className="mt-4 text-gray-700">
              Our clients and partners share their stories and insights about
              their journey with us, and we invite you to explore these
              testimonials.
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                onClick={handlePrevClick}
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                  style={{ color: "#E65100" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                onClick={handleNextClick}
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  className="size-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "#E65100" }}
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} className="keen-slider">
              {testimonials.map(({ id, quote, text, author, rating }) => (
                <div key={id} className="keen-slider__slide">
                  <blockquote className="flex h-full flex-col justify-between bg-white shadow-sm sm:p-8 lg:p-12">
                    <div>
                      <div className="flex gap-0.5 text-green-500">
                        {[...Array(rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: "#E65100" }}
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <div className="mt-4">
                        <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                          {quote}
                        </p>
                        <p className="mt-4 leading-relaxed text-gray-700">
                          {text}
                        </p>
                      </div>
                    </div>

                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                      &mdash; {author}
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Embed Elfsight widget */}
      <div className="elfsight-widget">
        <div
          className="elfsight-app-fb7adff5-6a66-4f9c-9841-99b058ae8956"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
