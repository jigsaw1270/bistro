import { Parallax } from 'react-parallax';

const Cover = ({img, title, subtitle}) => {
    return (
        <Parallax
        blur={{ min: -70, max: 70 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
         <div className="h-[450px]  hero" >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{subtitle}</p>
          
          </div>
        </div>
      </div>
    </Parallax>
      
    );
};

export default Cover;