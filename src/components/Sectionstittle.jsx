
const Sectionstittle = ({heading , subHeading}) => {
    return (
        <div className="mx-auto my-16 text-center md:w-4/12 text">
            <p className="text-yellow-400">---{subHeading}---</p>
            <h1 className="py-4 text-4xl uppercase border-t-4 border-b-4 border-slate-400">{heading}</h1>
        </div>
    );
};

export default Sectionstittle;