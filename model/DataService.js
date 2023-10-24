class DataService{
    constructor(){

    }
    getData(vegpont, callback, hibaCallback){
        axios.get(vegpont, callback)
            .then(function (response) {
            // handle success
            console.log("response",response);
            console.log("data",response.data.nevek);
            console.log("status",response.status);
            console.log("text",response.text);
            callback(response.data.nevek)
        })
        .catch(function (error) {
            // handle error
            hibaCallback(error);
        })
        .finally(function () {
            // always executed
        });
    }
}
export default DataService