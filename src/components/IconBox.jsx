import { TbMail } from "react-icons/tb";

const IconBox = ({ icon }) => {
  return (
    <a
      href="#"
      className="p-2 border border-gray-400 rounded-md cursor-pointer"
    >
      {icon}
    </a>
  );
};

export default IconBox;
