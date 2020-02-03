/* eslint-disable */
import { grpc } from
import { FaqShowRequest } from "../protos/faq_pb"
import { FaqGatewayClient } from '../protos/faq_grpc_web_pb'
/* eslint-enable */

class ApiService {
    constructor(){
        this.
    }
}



export const apiPlugin = {
    install: function(Vue){
        Vue.prototype.$api = apiService;
    }
}

export default apiService;
