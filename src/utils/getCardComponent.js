import ProductCard from "../components/ProductCard/ProductCard";
import PluginCard from "../components/PluginCard/PluginCard";

const GetCardComponent = ({ cardType, bgColor, item }) => {
  const cardComponentData = { ...item };
  //console.log(cardComponentData);
  switch (cardType) {
    case "productCard":
      return <ProductCard item={cardComponentData} key={cardComponentData.id} bgColor={bgColor} />;
    case "pluginCard":
      return <PluginCard item={cardComponentData} key={cardComponentData.id} bgColor={bgColor} />;
    default:
      return null;
  }
};

export default GetCardComponent;
