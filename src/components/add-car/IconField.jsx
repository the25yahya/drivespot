import { FaClipboardList,FaTag,FaMoneyBillAlt,FaMoneyBill,FaCar,
FaCarSide,
FaCalendarAlt,FaRoad,FaCogs,FaGasPump,FaPallet,FaDoorClosed,FaIdCard,FaTags,FaQuestion 
 } from "react-icons/fa";
 import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
 import { GiSteeringWheel } from "react-icons/gi";
 import { SiCoronaengine } from "react-icons/si";
 import { BiSolidCylinder } from "react-icons/bi";
 import { IoIosStats } from "react-icons/io";
 import { BsCardHeading } from "react-icons/bs";

 const iconMap = {
    FaTag: <FaTag />,
    FaClipboardList: <FaClipboardList />,
    FaMoneyBillAlt: <FaMoneyBillAlt />,
    FaMoneyBill: <FaMoneyBill />,
    FaCar: <FaCar />,
    FaQuestion : <FaQuestion  />,
    FaCarSide: <FaCarSide />,
    FaCalendarAlt: <FaCalendarAlt />,
    FaRoad: <FaRoad />,
    FaCogs: <FaCogs />,
    FaGasPump: <FaGasPump />,
    FaPallet: <FaPallet />,
    FaDoorClosed: <FaDoorClosed />,
    FaIdCard: <FaIdCard />,
    FaTags: <FaTags />,
    MdOutlineDriveFileRenameOutline : <MdOutlineDriveFileRenameOutline />,
    GiSteeringWheel : <GiSteeringWheel />,
    SiCoronaengine : <SiCoronaengine />,
    BiSolidCylinder : <BiSolidCylinder />,
    IoIosStats : <IoIosStats />,
    BsCardHeading: <BsCardHeading />
    
};

function IconField({icon}){
    return(
        <div>{iconMap[icon]}</div>
    )
}

export default IconField;