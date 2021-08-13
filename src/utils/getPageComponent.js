import Stripe from "../components/Stripe/Stripe";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import ProductCard from "../components/ProductCard/ProductCard";
import PluginCard from "../components/PluginCard/PluginCard";
import OverviewCardGroup from "../containers/OverviewCardGroup/OverviewCardGroup";

const GetPageComponent = ({ componentType, componentId, cardType = null, groupingId }) => {
  switch (componentType) {
    case "ui-components.stripe":
      return <Stripe id={componentId} key={componentId} />;
    case "ui-components.product-card":
      if (cardType === "featureCard") {
        return <FeatureCard id={componentId} key={componentId} />;
      } else if (cardType === "productCard") {
        return <ProductCard id={componentId} key={componentId} />;
      } else if (cardType === "pluginCard") {
        return <PluginCard id={componentId} key={componentId} />;
      } else {
        return null;
      }
    case "ui-components.product-card-collection":
      return <OverviewCardGroup id={componentId} groupingId={groupingId} key={componentId} />;
    default:
      return null;
  }
};

export default GetPageComponent;
