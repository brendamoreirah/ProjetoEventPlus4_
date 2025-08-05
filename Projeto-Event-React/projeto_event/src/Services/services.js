import axios from "axios";

const apiPorta = "5289"

const apiLocal = `http://localhost:${apiPorta}/api/`;
const apiAzure = "https://apieventbrenda-bvhbf5czgugaceck.brazilsouth-01.azurewebsites.net";
const apiAzureRikelme = "https://github.com/Rikelme03/Projeto-Event-React.git";

const api = axios.create({

    baseURL: apiAzureRikelme

}); 





export default api;