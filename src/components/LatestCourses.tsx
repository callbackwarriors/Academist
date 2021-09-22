const LatestCourses = () => {
  return (
    <section className="latest__courses">
      <div className="latest__courses--top">
        <h1 className="latest__courses--top--heading">Our Latest Courses</h1>
        <div className="p-2 w-full">
          <button className="latest__courses--top--button">View All</button>
        </div>
      </div>
      <div className="card">
        <div className="card__container--main">
          <div className="card__container--main--section">
            <div className="p-4 md:w-1/3">
              <div className="card__container--main--section--contextBX">
                <img src="https://i.ibb.co/9V1Xq8s/crd-img.webp" alt="" />

                <div className="icon">
                    <span className="icon__spanOne">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>1.2K
                    </span>
                    <span className="icon__spanTwo">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>6
                    </span>
                </div>              
                <div className="p-6">
                  <h5>Learn Python Programming Beginner</h5>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="card__container--main--section--contextBX">
                <img src="https://i.ibb.co/Z1RXDLh/crd-img2.webp" alt="" />
                <div className="p-6">
                  <h5>Learn Python Programming Beginner</h5>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="card__container--main--section--contextBX">
                <img src="https://i.ibb.co/G5M8RPY/crd-img3.webp" alt="" />
                <div className="p-6">
                  <h5>Learn Python Programming Beginner</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestCourses;