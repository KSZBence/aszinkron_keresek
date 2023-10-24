import { urlapleiro } from "./urlapLeiro.js";
class UrlapModel{
    #leiro={}
    constructor() {
        this.#leiro = urlapleiro
    }
    getLeiro() {
        return {...this.#leiro};
    }
}
export default UrlapModel