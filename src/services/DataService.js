import {http} from "../http-common"
class OpinionDataService {
create(data) {
    return http.post("/project", data)
}
}
export default new OpinionDataService()