import ProductCard from "../components/ProductCard/ProductCard";
import PluginCard from "../components/PluginCard/PluginCard";
import FunctionCard from "../components/FunctionCard/FunctionCard";

const GetCardComponent = ({ cardType, bgColor, item }) => {
  const cardComponentData = { ...item };
  switch (cardType) {
    case "productCard":
      return <ProductCard item={cardComponentData} key={cardComponentData.id} bgColor={bgColor} />;
    case "pluginCard":
      return <PluginCard item={cardComponentData} key={cardComponentData.id} bgColor={bgColor} />;
    case "functionCard":
      return <FunctionCard item={cardComponentData} key={cardComponentData.id} />;
    default:
      return null;
  }
};

export default GetCardComponent;
