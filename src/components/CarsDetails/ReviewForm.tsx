"use client";

const ReviewForm = () => {
  return (
    <>
      <div className="stay-comment-replay box-style">
        <div className="d-sm-flex align-items-end justify-content-between mb-5">
          <div className="box-title border-0 mb-0 pb-0">
            <h4>Add Your Review</h4>
            <p>Your ratings for this property</p>

            <div className="d-flex align-items-center">
              <svg
                className="me-2"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clipPath="url(#clip0_3720_460)">
                  <path
                    d="M15.9583 6.13754C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13348L8.78208 0.859327C8.64744 0.546087 8.34079 0.343323 8.00008 0.343323C7.65938 0.343323 7.35273 0.546087 7.21808 0.86006L5.39198 5.13348L0.773211 5.55281C0.433847 5.58418 0.147219 5.81356 0.0418692 6.13754C-0.0634802 6.46152 0.0338123 6.81688 0.290533 7.04088L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.04149C15.9656 6.81688 16.0636 6.46213 15.9583 6.13754Z"
                    fill="#FFC107"
                  />
                </g>
              </svg>
              <svg
                className="me-2"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clipPath="url(#clip0_3720_460)">
                  <path
                    d="M15.9583 6.13754C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13348L8.78208 0.859327C8.64744 0.546087 8.34079 0.343323 8.00008 0.343323C7.65938 0.343323 7.35273 0.546087 7.21808 0.86006L5.39198 5.13348L0.773211 5.55281C0.433847 5.58418 0.147219 5.81356 0.0418692 6.13754C-0.0634802 6.46152 0.0338123 6.81688 0.290533 7.04088L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.04149C15.9656 6.81688 16.0636 6.46213 15.9583 6.13754Z"
                    fill="#FFC107"
                  />
                </g>
              </svg>
              <svg
                className="me-2"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clipPath="url(#clip0_3720_460)">
                  <path
                    d="M15.9583 6.13754C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13348L8.78208 0.859327C8.64744 0.546087 8.34079 0.343323 8.00008 0.343323C7.65938 0.343323 7.35273 0.546087 7.21808 0.86006L5.39198 5.13348L0.773211 5.55281C0.433847 5.58418 0.147219 5.81356 0.0418692 6.13754C-0.0634802 6.46152 0.0338123 6.81688 0.290533 7.04088L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.04149C15.9656 6.81688 16.0636 6.46213 15.9583 6.13754Z"
                    fill="#FFC107"
                  />
                </g>
              </svg>
              <svg
                className="me-2"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clipPath="url(#clip0_3720_460)">
                  <path
                    d="M15.9583 6.13754C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13348L8.78208 0.859327C8.64744 0.546087 8.34079 0.343323 8.00008 0.343323C7.65938 0.343323 7.35273 0.546087 7.21808 0.86006L5.39198 5.13348L0.773211 5.55281C0.433847 5.58418 0.147219 5.81356 0.0418692 6.13754C-0.0634802 6.46152 0.0338123 6.81688 0.290533 7.04088L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.04149C15.9656 6.81688 16.0636 6.46213 15.9583 6.13754Z"
                    fill="#FFC107"
                  />
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clipPath="url(#clip0_3720_460)">
                  <path
                    d="M15.9583 6.13754C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13348L8.78208 0.859327C8.64744 0.546087 8.34079 0.343323 8.00008 0.343323C7.65938 0.343323 7.35273 0.546087 7.21808 0.86006L5.39198 5.13348L0.773211 5.55281C0.433847 5.58418 0.147219 5.81356 0.0418692 6.13754C-0.0634802 6.46152 0.0338123 6.81688 0.290533 7.04088L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.04149C15.9656 6.81688 16.0636 6.46213 15.9583 6.13754Z"
                    fill="#FFC107"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        
        <form>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group mb-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group mb-4">
              <textarea
                className="form-control"
                placeholder="Write a review"
                cols={30}
                rows={10}
              ></textarea>
            </div>
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="default-btn active rounded-10 border-0"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;