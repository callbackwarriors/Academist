export interface ICourses {
    map(arg0: (course: ICourses) => JSX.Element): string | number | boolean | {} | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | import("react").ReactNodeArray | import("react").ReactPortal | null | undefined;
    title: string;
    _id: number;
    slug: string;
    shortDesc: string;
    categories: string;
    level: string;
    price: number;
    courseProvider: string;
    videoUrl: string;
    img: string;
    desc: string;
  }