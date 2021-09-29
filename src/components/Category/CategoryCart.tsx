

const CategoryCart = ({fd}:any) => {
  return (
    <div>
      <div className="p-2 container w-full">
        <div className="h-full bg-white-100 shadow-lg p-8 rounded hover:bg-green-500 ">
          <h6>{fd.title}</h6>  
          <p className="mb-6">{fd.description}</p>

        </div>
      </div>
    </div>
  );
};

export default CategoryCart;
