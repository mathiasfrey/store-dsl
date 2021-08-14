import { AiFillCar } from "react-icons/ai";
import { FaRegSave } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import { SiProducthunt } from "react-icons/si";
import { BsGift } from "react-icons/bs";
import { MdWallpaper } from "react-icons/md";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaRegFileArchive } from "react-icons/fa";
import { GiBrokenBone } from "react-icons/gi";
import { ImHome3 } from "react-icons/im";
import { FaTachometerAlt } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { FaUmbrella } from "react-icons/fa";
import { CgUnavailable } from "react-icons/cg";

let icons = {
  AiFillCar,
  FaRegSave,
  FaCcMastercard,
  FaCreditCard,
  BsCreditCard,
  SiProducthunt,
  BsGift,
  MdWallpaper,
  FaMoneyBillWaveAlt,
  FaCcVisa,
  FaRegFileArchive,
  GiBrokenBone,
  ImHome3,
  IoUmbrella: FaUmbrella,
  FaTachometerAlt,
  GiMoneyStack,
  GiPayMoney,
  CgUnavailable,
};

export function getIconComponent({ icon, color, fontSize }) {
  let TagName = icons[icon] ? icons[icon] : CgUnavailable;
  return <TagName style={{ fontSize: `${fontSize}`, color: `${color}`, margin: "0 auto" }} />;
}
