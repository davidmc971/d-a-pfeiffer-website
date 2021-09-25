import React, { useEffect } from "react";

export default function Badge() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="badge-base LI-profile-badge"
      data-locale="de_DE"
      data-size="large"
      data-theme="dark"
      data-type="HORIZONTAL"
      data-vanity="david-alexander-pfeiffer"
      data-version="v1"
    >
      <a
        className="badge-base__link LI-simple-link"
        href="https://de.linkedin.com/in/david-alexander-pfeiffer?trk=profile-badge"
      >
      </a>
    </div>
  );
}
