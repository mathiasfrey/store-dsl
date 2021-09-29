export const BASE_URL =
  "https://europe-central2-western-storm-322812.cloudfunctions.net/store-dsl-strapi"; //"http://46.101.236.251:1337";
const TIMEOUT = 3000;

//Fetch Store main data
export async function fetchStoreMainData() {
  let ctrl = new AbortController();
  let signal = ctrl.signal;
  console.log("Fetching data for the store main page");
  console.log(`${BASE_URL}/store-main`);
  let fetchData = fetch(`${BASE_URL}/store-main`, { signal })
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => {
      throw err;
    });

  let timeOut = new Promise((resolve) => {
    setTimeout(async () => {
      ctrl.abort(); // abort fetch request
      resolve("TIME_OUT");
    }, TIMEOUT);
  });

  let mainData = await Promise.race([fetchData, timeOut]);
  return mainData;
}

//Fetch card collection details
export async function fetchCardGroupItemsData({ groupingId }) {
  let ctrl = new AbortController();
  let signal = ctrl.signal;
  console.log("Fetching data for a product group");
  console.log(`${BASE_URL}/groupings/${groupingId}`);
  const fetchData = fetch(`${BASE_URL}/groupings/${groupingId}`, { signal })
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => {
      throw err;
    });

  let timeOut = new Promise((resolve) => {
    setTimeout(async () => {
      ctrl.abort(); // abort fetch request
      resolve("TIME_OUT");
    }, TIMEOUT);
  });

  let groupItemsData = await Promise.race([fetchData, timeOut]);
  return groupItemsData;
}

//Fetch group-details page data
export async function fetchGroupDetailsPageData(targetPage) {
  let ctrl = new AbortController();
  let signal = ctrl.signal;
  console.log("Fetching data for a detail page");
  console.log(`${BASE_URL}/${targetPage}`);
  const fetchData = fetch(`${BASE_URL}/${targetPage}`, { signal })
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => {
      throw err;
    });

  let timeOut = new Promise((resolve) => {
    setTimeout(async () => {
      ctrl.abort(); // abort fetch request
      resolve("TIME_OUT");
    }, TIMEOUT);
  });

  let groupDetailsData = await Promise.race([fetchData, timeOut]);
  return groupDetailsData;
}
