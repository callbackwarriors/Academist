export interface ICourses {
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

  export interface users {
          map(arg0: (ur: any) => JSX.Element): string | number | boolean | {} | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | import("react").ReactNodeArray | import("react").ReactPortal | null | undefined;
          name: string;
          _id: string;
          email: string;
          password:string;
          isAdmin:Boolean;
  }