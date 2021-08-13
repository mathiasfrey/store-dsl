import ProductCard from "../components/ProductCard/ProductCard";
import PluginCard from "../components/PluginCard/PluginCard";

const GetCardComponent = ({ cardType, cardComponentId, bgColor, icon, title, subtitle }) => {
  switch (cardType) {
    case "productCard":
      return <ProductCard id={cardComponentId} key={cardComponentId} icon={icon} title={title} subtitle={subtitle} bgColor={bgColor} />;
    case "pluginCard":
      return <PluginCard id={cardComponentId} key={cardComponentId} icon={icon} title={title} subtitle={subtitle} bgColor={bgColor} />;
    default:
      return null;
  }
};

export default GetCardComponent;
