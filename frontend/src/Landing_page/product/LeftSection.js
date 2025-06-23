 import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,  // fixed typo
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Image Column */}
        <div className="col-6">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>

        {/* Text & Links Column */}
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          {/* Optional Demo and Learn More links */}
          <div>
            {tryDemo && (
              <a href=""style={{ textDecoration: "none" }} >
                Try Demo{" "}
                 <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
            {learnMore && (
              <a
                href=""style={{ textDecoration: "none" }}
                className="btn btn-link ml-4"
              >
                Learn More{" "}
                 <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
          </div>

          {/* Optional badges */}
          <div className="mt-3">
            {googlePlay && (
              <a href={googlePlay}>
                <img
                  src="/Media/googlePlayBadge.svg"
                  alt="Get it on Google Play"
                  className="app-badge"
                />
              </a>
            )}
            {appStore && (
              <a href={appStore} className="ml-4">
                <img
                  src="/Media/appstoreBadge.svg"
                  alt="Download on the App Store"
                  className="app-badge"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
