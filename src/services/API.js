 /* ===== CHECK FETCH SUPPORT ===== */
if (!window.fetch) {
  alert(
    "Votre navigateur ne prend pas en charge l'API Fetch. Veuillez mettre à jour votre navigateur."
  );
}

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



//================ GET LOGEMENT BY ID ================
async function logementsGetById(id) {
  try {
    const logs = await logementsGetAll();
    return logs.find(log => log.id === id);
  } catch (error) {
    console.error("Error fetching logement by ID:", error);
  }
}

export { logementsGetAll, logementsGetById };
