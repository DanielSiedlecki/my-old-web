import {http} from "../http-common"
class OpinionDataService {
create(data) {
    return http.post("/project", data)
}}

class SendMailService {
    create(data) {
        return http.post("/project/sendmail", data)
    }
}

class RecaptchaValidService {
    create(data){
        return http.post("/project/recaptcha", data)
    }
}
export { OpinionDataService, SendMailService, RecaptchaValidService };