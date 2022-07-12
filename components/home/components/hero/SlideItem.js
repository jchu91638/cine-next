import React from "react";

/* Components */
import { Button } from "@mui/material";

const SlideItem = ({
  id,
  index,
  backdrop_path,
  poster_path,
  title,
  overview,
  name,
  media_type,
}) => {
  return (
    <>
      {/* Laptops */}
      <div
        className="hidden md:block h-full w-full bg-top bg-no-repeat bg-cover relative"
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/original/${backdrop_path})`,
        }}
      >
        <div className="slide--hero-wrapper px-6 lg:px-16 flex items-center justify-start absolute w-full left-0 text-wah">
          <div className="max-w-[90rem] space-y-4">
            <p className="font-writing text-cfs-4">
              Top{" "}
              <span className="inline-flex justify-center items-center font-heading font-extrabold h-8 w-8 text-light bg-[#071e3d80] rounded-full">
                {index + 1}
              </span>{" "}
              on board
            </p>
            <h1 className="font-heading font-extrabold text-3xl lg:text-4xl drop-shadow-text">
              {title ? title : name}
            </h1>

            <p className="w-full md:w-[55%] lg:w-[45%] drop-shadow-text">
              {overview}
            </p>

            {/* <Link onClick={getItemInfo} to={`/${route_type}/${id}`}> */}
            <Button variant="contained" className="btn-primary">
              View Detail
            </Button>
            {/* </Link> */}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="block md:hidden h-full w-full bg-top bg-no-repeat bg-cover relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      >
        <div className="slide--hero-wrapper px-6 lg:px-16 flex items-center justify-start absolute w-full left-0 text-wah">
          <div className="max-w-[90rem] space-y-4">
            <p className="font-writing text-cfs-4">
              Top{" "}
              <span className="inline-flex justify-center items-center font-heading font-extrabold h-8 w-8 text-light bg-[#071e3d80] rounded-full">
                {index + 1}
              </span>{" "}
              on board
            </p>
            <h1 className="font-heading font-extrabold text-3xl lg:text-4xl drop-shadow-text">
              {title ? title : name}
            </h1>

            <p className="w-full md:w-[55%] lg:w-[45%] drop-shadow-text">
              {overview}
            </p>

            {/* <Link onClick={getItemInfo} to={`/${route_type}/${id}`}> */}
            <Button variant="contained" className="btn-primary">
              View Detail
            </Button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideItem;
