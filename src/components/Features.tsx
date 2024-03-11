import React, { useState, useEffect } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import config from "../config/index.json";

const Features = () => {
  const { features } = config;
  const { title, description } = features;

  // useState hook to manage loading state of icons
  const [iconsLoaded, setIconsLoaded] = useState(false);

  useEffect(() => {
    // Initialize FontAwesome icons
    library.add(faLocationDot, faPhone);
    // Set iconsLoaded to true when icons are loaded
    setIconsLoaded(true);
  }, []);

  return (
    <div className={` bg-background`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-3xl text-primary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap">
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6 w-4/6 round"
              src={features.imgSrc}
              alt={features.imgTitle}
            />
          </div>
          <dl className="space-y-10 w-5/6 sm:w-1/2 p-6 mt-20">
            {iconsLoaded && ( // Conditionally render icons when loaded
              <>
                <div className="relative">
                  <dt>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        aria-hidden="true"
                      />{" "}
                      Adresse
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    <p>1 rue des roseaux - 67130 LUTZELHOUSE</p>
                    <p>
                      Accès à la maison médicale par le parking de l&apos;Ehpad
                      de Lutzelhouse.
                    </p>
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      <FontAwesomeIcon icon={faPhone} aria-hidden="true" />{" "}
                      Téléphone
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    <p>03 88 47 15 04</p>
                  </dd>
                </div>
              </>
            )}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
