export const BASE_URL = "https://europe-central2-western-storm-322812.cloudfunctions.net/store-dsl-strapi"; //"http://46.101.236.251:1337";

//Fetch Store main data
export async function fetchStoreMainData() {
  const response = await fetch(`${BASE_URL}/store-main`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const mainData = await response.json();
  return mainData;
}

//Fetch card collection details
export async function fetchCardGroupItemsData() {
  const response = await fetch(`${BASE_URL}/groupings}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const groupItemsData = await response.json();
  return groupItemsData;
}

//Fetch group-details page data
export async function fetchGroupDetailsPageData(targetPage) {
  const response = await fetch(`${BASE_URL}${targetPage}`);
  console.log(`${BASE_URL}${targetPage}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const groupDetailsData = await response.json();
  return groupDetailsData;
}
