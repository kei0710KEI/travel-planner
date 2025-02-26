import { Button } from "@/components/ui/button";
import React from "react";
import { FiSend } from "react-icons/fi";

function InfoSection({ trip }) {
  return (
    <div>
      <img
        src="/vite.svg"
        className="h-[340px] w-full object-cover rounded-xl"
      />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {trip?.userSelection?.location?.label}
          </h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500">
              📅{trip.userSelection?.noOfDays} Day
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500">
              💰{trip.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500">
              🥂No. Of Traveler: {trip.userSelection?.traveler}
            </h2>
          </div>
        </div>
        <Button>
          <FiSend />
        </Button>
      </div>
    </div>
  );
}

export default InfoSection;
