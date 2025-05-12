import {Metadata} from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "CarsLayout Metadata",
  description: "All Cars from http://185.69.152.209/carsAPI/v1/cars",
};

type Props = { children: ReactNode }
const NameLayout = ({children}: Props) => {
    return (
        <div>
            <hr/>
            Cars content
            {children}
            <hr/>
        </div>
    );
};
export default NameLayout;