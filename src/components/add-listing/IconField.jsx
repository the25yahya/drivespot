import { FaClipboardList,FaTag,FaMoneyBillAlt,FaMoneyBill,FaCar,
FaCheckCircle,FaChargingStation,
FaIndustry,FaCarSide,
FaCalendarAlt,FaRoad,FaCogs,FaGasPump,FaPallet,FaDoorClosed,FaIdCard,FaTags
 } from "react-icons/fa";


 const iconMap = {
    FaTag: <FaTag />,
    FaClipboardList: <FaClipboardList />,
    FaMoneyBillAlt: <FaMoneyBillAlt />,
    FaMoneyBill: <FaMoneyBill />,
    FaCar: <FaCar />,
    FaCheckCircle: <FaCheckCircle />,
    FaChargingStation: <FaChargingStation />,
    FaIndustry: <FaIndustry />,
    FaCarSide: <FaCarSide />,
    FaCalendarAlt: <FaCalendarAlt />,
    FaRoad: <FaRoad />,
    FaCogs: <FaCogs />,
    FaGasPump: <FaGasPump />,
    FaPallet: <FaPallet />,
    FaDoorClosed: <FaDoorClosed />,
    FaIdCard: <FaIdCard />,
    FaTags: <FaTags />
};

function IconField({icon}){
    return(
        <div>{iconMap[icon]}</div>
    )
}

export default IconField;