export const BASE_URL = "https://europe-central2-western-storm-322812.cloudfunctions.net/store-dsl-strapi"; //"http://46.101.236.251:1337";

//Fetch Store main data
export async function fetchStoreMainData() {
  // console.log("Fetching data for the store main page");
  // console.log(`${BASE_URL}/store-main`);
  const response = await fetch(`${BASE_URL}/store-main`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const mainData = await response.json();
  return mainData;
}

//Fetch card collection details
export async function fetchCardGroupItemsData({ groupingId }) {
  // console.log("Fetching data for a product group");
  // console.log(`${BASE_URL}/groupings/${groupingId}`);
  const response = await fetch(`${BASE_URL}/groupings/${groupingId}`);
  //console.log(response);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const groupItemsData = await response.json();
  //console.log(groupItemsData);
  return groupItemsData;
}

//Fetch group-details page data
export async function fetchGroupDetailsPageData(targetPage) {
  // console.log("Fetching data for a detail page");
  // console.log(`${BASE_URL}/${targetPage}`);
  const response = await fetch(`${BASE_URL}/${targetPage}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const groupDetailsData = await response.json();
  return groupDetailsData;
}
