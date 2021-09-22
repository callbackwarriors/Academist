const LatestCourses = () => {
  return (
    <section className="latest__courses">
      <div className="latest__courses--top">
        <h1 className="latest__courses--top--heading">Our Latest Courses</h1>
        <button className="latest__courses--top--button">View All</button>
      </div>
      <div className="card">
        <div className="card__container--main">
          <div className="card__container--main--section">
            <div className="p-4 md:w-1/3">
              <div className="card__container--main--section--contextBX">
                <img src="https://i.ibb.co/9V1Xq8s/crd-img.webp" alt="" />
                <div className="p-6">
                  <h5>Learn Python Programming Beginner</h5>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="card__container--main--section--contextBX">
                <img src="https://i.ibb.co/9V1Xq8s/crd-img.webp" alt="" />
                <div className="p-6">
                  <h5>Learn Python Programming Beginner</h5>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="card__container--main--section--contextBX">
                <img src="https://i.ibb.co/9V1Xq8s/crd-img.webp" alt="" />
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
