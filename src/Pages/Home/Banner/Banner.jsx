import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import "./banner.css";

const Banner = () => {
  return (
    <div className="carousel w-full md:h-[600px]">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute  flex items-center h-full w-full  bg-gradient-to-r bg-color rounded-xl">
          <div className="space-y-7 w-3/4 md:w-1/2 lg:w-1/3 pl-12 text-white">
            <h2 className="text-3xl md:text-6xl font-bold">
              Affordable price for car servicing
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique optio inventore, nostrum quae eum nam? Soluta assumenda
              accusamus voluptate dolorem.
            </p>
            <div className="flex gap-4 ">
              <button className="btn btn-error font-extrabold text-white ">
                Discover More
              </button>
              <button className="btn btn-outline btn-warning font-extrabold text-white">
                Latest project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute transform -translate-y-1/2 left-5 right-5 bottom-0 flex justify-end">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle ml-8">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute  flex items-center h-full w-full  bg-gradient-to-r bg-color rounded-xl">
          <div className="space-y-7 w-3/4 md:w-1/2 lg:w-1/3 pl-12 text-white">
            <h2 className="text-3xl md:text-6xl font-bold">
              Affordable price for car servicing
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique optio inventore, nostrum quae eum nam? Soluta assumenda
              accusamus voluptate dolorem.
            </p>
            <div className="flex gap-4 ">
              <button className="btn btn-error font-extrabold text-white ">
                Discover More
              </button>
              <button className="btn btn-outline btn-warning font-extrabold text-white">
                Latest project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle ml-8">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute  flex items-center h-full w-full  bg-gradient-to-r bg-color rounded-xl">
          <div className="space-y-7 w-3/4 md:w-1/2 lg:w-1/3 pl-12 text-white">
            <h2 className="text-3xl md:text-6xl font-bold">
              Affordable price for car servicing
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique optio inventore, nostrum quae eum nam? Soluta assumenda
              accusamus voluptate dolorem.
            </p>
            <div className="flex gap-4 ">
              <button className="btn btn-error font-extrabold text-white ">
                Discover More
              </button>
              <button className="btn btn-outline btn-warning font-extrabold text-white">
                Latest project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5  right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle ml-8">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute  flex items-center h-full w-full  bg-gradient-to-r bg-color rounded-xl">
          <div className="space-y-7 w-3/4 md:w-1/2 lg:w-1/3 pl-12 text-white">
            <h2 className="text-3xl md:text-6xl font-bold">
              Affordable price for car servicing
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique optio inventore, nostrum quae eum nam? Soluta assumenda
              accusamus voluptate dolorem.
            </p>
            <div className="flex gap-4 ">
              <button className="btn btn-error font-extrabold text-white ">
                Discover More
              </button>
              <button className="btn btn-outline btn-warning font-extrabold text-white">
                Latest project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5  right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle ml-8">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full rounded-xl" />
        <div className="absolute  flex items-center h-full w-full  bg-gradient-to-r bg-color rounded-xl">
          <div className="space-y-7 w-3/4 md:w-1/2 lg:w-1/3 pl-12 text-white">
            <h2 className="text-3xl md:text-6xl font-bold">
              Affordable price for car servicing
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique optio inventore, nostrum quae eum nam? Soluta assumenda
              accusamus voluptate dolorem.
            </p>
            <div className="flex gap-4 ">
              <button className="btn btn-error font-extrabold text-white ">
                Discover More
              </button>
              <button className="btn btn-outline btn-warning font-extrabold text-white">
                Latest project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5  right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle ml-8">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full rounded-xl" />
        <div className="absolute  flex items-center h-full w-full  bg-gradient-to-r bg-color rounded-xl">
          <div className="space-y-7 w-3/4 md:w-1/2 lg:w-1/3 pl-12 text-white">
            <h2 className="text-3xl md:text-6xl font-bold">
              Affordable price for car servicing
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique optio inventore, nostrum quae eum nam? Soluta assumenda
              accusamus voluptate dolorem.
            </p>
            <div className="flex gap-4 ">
              <button className="btn btn-error font-extrabold text-white ">
                Discover More
              </button>
              <button className="btn btn-outline btn-warning font-extrabold text-white">
                Latest project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5  right-5 bottom-0">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle ml-8">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
