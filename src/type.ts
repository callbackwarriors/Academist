export interface ICourses {
  map(
    arg0: (course: ICourses) => JSX.Element
  ):
    | string
    | number
    | boolean
    | {}
    | import("react").ReactElement<
        any,
        string | import("react").JSXElementConstructor<any>
      >
    | import("react").ReactNodeArray
    | import("react").ReactPortal
    | null
    | undefined;
  title: string;
  _id: number;
  slug: string;
  shortDesc: string;
  categories: string;
  level: string;
  price: number;
  inputList: [
    {
      title: string;
      link: string;
    }
  ];
  videoUrl: string;
  img: string;
  desc: string;
}

export interface IOrders {
  filter(
    arg0: (order: { userInfo: string }) => boolean
  ): import("react").ReactNode;
  map(arg0: (order: IOrders) => JSX.Element): import("react").ReactNode;
  _id: string;
  address: string;
  phone: string;
  paymentInfo: {
    brand: string;
    country: string;
    last4: string;
  };
  userInfo: {
    name: string;
    email: string;
    isAdmin: boolean;
    token: string;
    _id: string;
  };
  cartItems: [
    {
      title: string;
      slug: string;
      shortDesc: string;
      categories: string;
      level: string;
      price: number;
      quantity: number;
      // courseProvider: { type: String, required: true },
      videoUrl: string;
      img: string;
      desc: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
      _id: string;
    }
  ];
}

export interface IUser {
  name: string;
  email: string;
  isAdmin: boolean;
  _id: string;
}
