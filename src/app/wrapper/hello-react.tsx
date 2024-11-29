import {PropsWithChildren} from 'react'
export const MyReactComponent = ({children}: PropsWithChildren) => {
  return <div className="text-gray-500 m-10">Hello from React!
    {children}
    <hello-angular></hello-angular>
  </div>;
};
