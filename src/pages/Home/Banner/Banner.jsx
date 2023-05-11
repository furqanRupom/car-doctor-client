import bannerImages1 from '../../../../assets/images/banner/1.jpg'
import bannerImages2 from '../../../../assets/images/banner/2.jpg'
import bannerImages3 from '../../../../assets/images/banner/3.jpg'
import bannerImages4 from '../../../../assets/images/banner/4.jpg'
import bannerImages5 from '../../../../assets/images/banner/5.jpg'
import bannerImages6 from '../../../../assets/images/banner/6.jpg'



const Banner = () => {
  return (
    <div className="carousel w-full ">
    <div id="slide1" className="carousel-item relative w-full ">
      <img src={bannerImages1} className="w-full" />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-slate-900">
      <div className=" text-white absolute   top-1/3  md:top-[50%] left-8 font-bold ">
          <h2 className=" md:text-7xl">the doctor car</h2>
          <p className=" md:text-5xl leading-relaxed">
            we works  simultaneously to repair our cars...
          </p>
          <div className="flex space-x-5 items-center mt-5">
          <button className="btn btn-outline btn-error">show more</button>
          <button className="btn btn-outline btn-success mr-3">Explore more</button>
          </div>
        </div>
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-3">

        <a href="#slide4" className="btn btn-circle">❮</a>
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
      <img src={bannerImages2} className="w-full" />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-slate-900">
      <div className=" text-white absolute   top-1/3  md:top-[50%] left-8 font-bold ">
          <h2 className=" md:text-7xl">the doctor car</h2>
          <p className=" md:text-5xl leading-relaxed">
            we works  simultaneously to repair our cars...
          </p>
          <div className="flex space-x-5 items-center mt-5">
          <button className="btn btn-outline btn-error">show more</button>
          <button className="btn btn-outline btn-success mr-3">Explore more</button>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-3">
        <a href="#slide4" className="btn btn-circle">❮</a>
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
      <img src={bannerImages3} className="w-full" />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-slate-900">
      <div className=" text-white absolute   top-1/3  md:top-[50%] left-8 font-bold ">
          <h2 className=" md:text-7xl">the doctor car</h2>
          <p className=" md:text-5xl leading-relaxed">
            we works  simultaneously to repair our cars...
          </p>
          <div className="flex space-x-5 items-center mt-5">
          <button className="btn btn-outline btn-error">show more</button>
          <button className="btn btn-outline btn-success mr-3">Explore more</button>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-3">
        <a href="#slide4" className="btn btn-circle">❮</a>
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full">
      <img src={bannerImages4} className="w-full" />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-slate-900">
      <div className=" text-white absolute   top-1/3  md:top-[50%] left-8 font-bold ">
          <h2 className=" md:text-7xl">the doctor car</h2>
          <p className=" md:text-5xl leading-relaxed">
            we works  simultaneously to repair our cars...
          </p>
          <div className="flex space-x-5 items-center mt-5">
          <button className="btn btn-outline btn-error">show more</button>
          <button className="btn btn-outline btn-success mr-3">Explore more</button>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-3 ">
        <a href="#slide3" className="btn btn-circle">❮</a>
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
  );
};

export default Banner;
