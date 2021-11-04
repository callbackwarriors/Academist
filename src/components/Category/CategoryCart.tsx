import Link from 'next/link';
const CategoryCart = ({fd}:any) => {
  return (
<Link href={fd.link}>
<a>
        <div className="h-full  bg-white-100 shadow-lg p-8 rounded hover:bg-green-500 hover:text-white ">
          <img className="p-1 shadow w-36 h-36 object-cover rounded-full mb-4" src={fd.logo} alt="" />
          <h6>{fd.title}</h6>  
          <p>{fd.description}</p>
        </div>
        </a>
        </Link>
  );
};

export default CategoryCart;
