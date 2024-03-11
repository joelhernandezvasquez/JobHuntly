import { ReactNode } from "react";
import { IoAlarmOutline, IoLaptopOutline, IoReaderOutline } from "react-icons/io5";


interface FeaturesIcon {
    id: number,
    icon: ReactNode
}

const useFeaturesIcon = () => {
    const featuresIcon: FeaturesIcon[] = [
        {
            id: 0,
            icon: <IoLaptopOutline size={30} color={'#515b6f'} />
        },
        {
            id: 1,
            icon: <IoAlarmOutline size={30}  color={'#515b6f'}/>
        },
        {
            id: 2,
            icon: <IoReaderOutline size={30}  color={'#515b6f'} />
        },

    ]

    return {
        featuresIcon
    }
}

export default useFeaturesIcon