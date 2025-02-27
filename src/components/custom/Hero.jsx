import React from "react"; 
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col items-center gap-9 px-5 sm:px-10 md:px-20 lg:px-32 xl:px-56">
      <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[50px] text-center mt-16">
        <span className="text-[#f56551]">
          Discover Your Next Adventure with AI:
        </span>{" "}
        Personalized Itineraries at Your Fingertips
      </h1>
      <p className="text-lg sm:text-xl text-gray-500 text-center">
        Your personal trip planner and travel curator, creating custom
        itineraries tailored to your interests and budget.
      </p>

      <Link to={"/create-trip"}>
        <Button className="mt-6"> Get Started, It's Free </Button>
      </Link>

      <img 
        src="/placeholder.jpg" 
        className="rounded-md w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/2" 
        alt="Placeholder" 
      />
    </div>
  );
}

export default Hero;

