const LatestCourses = () => {
  return (
    <div className="latest__courses">
      <div className="latest__courses--top">
        <h1 className="latest__courses--top--heading">Our Latest Courses</h1>
        <button className="latest__courses--top--button">View All</button>
      </div>
      <div className="card__container">
        <div className="card__container--section">
          <div className="card__container--section--imgBX">
            <img src="https://i.ibb.co/9V1Xq8s/crd-img.webp" alt="" />
          </div>
          <div className="card__container--section--content">
              <h5>Learn Python Programming Beginner</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor tempora beatae quod ipsa molestias iste voluptates, asperiores eos excepturi quae?</p>
          </div>
        </div>

        <div className="card__container--section">
          <div className="card__container--section--imgBX">
            <img src="https://i.ibb.co/9V1Xq8s/crd-img.webp" alt="" />
          </div>
          <div className="card__container--section--content">
              <h5>Learn Python Programming Beginner</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor tempora beatae quod ipsa molestias iste voluptates, asperiores eos excepturi quae?</p>
          </div>
        </div>

        <div className="card__container--section">
          <div className="card__container--section--imgBX">
            <img src="https://i.ibb.co/9V1Xq8s/crd-img.webp" alt="" />
          </div>
          <div className="card__container--section--content">
              <h5>Learn Python Programming Beginner</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor tempora beatae quod ipsa molestias iste voluptates, asperiores eos excepturi quae?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCourses;
