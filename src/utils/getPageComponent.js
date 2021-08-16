import Stripe from "../components/Stripe/Stripe";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import ProductCard from "../components/ProductCard/ProductCard";
import PluginCard from "../components/PluginCard/PluginCard";
import OverviewCardGroup from "../containers/OverviewCardGroup/OverviewCardGroup";

const GetPageComponent = ({ item, order }) => {
  switch (item.__component) {
    case "ui-components.stripe":
      return <Stripe item={item} key={item.id} />;
    case "ui-components.product-card":
      if (item.cardType.cardTypes === "featureCard") {
        return <FeatureCard item={item} order={order} key={item.id} />;
      } else if (item.cardType.cardTypes === "productCard") {
        return <ProductCard item={item} key={item.id} />;
      } else if (item.cardType.cardTypes === "pluginCard") {
        return <PluginCard item={item} key={item.id} />;
      } else if (item.cardType.cardTypes === "functionCard") {
        return <PluginCard item={item} key={item.id} />;
      } else {
        return null;
      }
    case "ui-components.product-card-collection":
      return <OverviewCardGroup item={item} key={item.id} />;
    default:
      return null;
  }
};

export default GetPageComponent;
