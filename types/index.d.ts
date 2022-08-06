declare module "*&img" {
  // const value: any;
  const value: imageObject;
  export default value;
}

declare module "*.svg" {
  const component: React.FC<React.SVGProps<SVGSVGElement>> | string;

  export default component;
}

declare module "*.png" {
  const value: any; // eslint-disable-line  @typescript-eslint/no-explicit-any
  export default value;
}

declare module "*.jpg" {
  const value: any; // eslint-disable-line  @typescript-eslint/no-explicit-any
  export default value;
}

declare module "*.jpeg" {
  const value: any; // eslint-disable-line  @typescript-eslint/no-explicit-any
  export default value;
}

declare module "@react-icons" {
  export * from "react-icons/all";
}

interface imageObject {
  src: string;
  srcSet?: string;
  placeholder?: string;
  width: number;
  height: number;
  images?: {
    path: string;
    width: number;
    height: number;
  }[];
}

// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
