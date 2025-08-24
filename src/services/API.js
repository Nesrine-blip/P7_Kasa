//#region - /* ===== CHECK FETCH SUPPORT ===== */
if (!window.fetch) {
  alert(
    "Your browser does not support the Fetch API. Please update your browser."
  );
}
//#endregion

//================ GET ALL LOGEMENTS ================
async function logementsGetAll() {
  try {
    const response = await fetch("/logements.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching logements:", error);
  }
}

export { logementsGetAll };

//================ GET LOGEMENT BY ID ================
async function logementsGetById(id) {
  try {
    const logs = await logementsGetAll();
    return logs.find(log => log.id === id);
  } catch (error) {
    console.error("Error fetching logement by ID:", error);
  }
}

export { logementsGetById };
