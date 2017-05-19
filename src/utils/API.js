import request from 'superagent';
let requestNumber = 0;

class API {
    static get(url, params, callback) {
        const rqNumber = requestNumber++;
        console.log('[' + rqNumber + '] Get Url: ' + url);
        request
          .get(url)
          .query(params)
          .end(function(err, res) {
            if (err) {
                console.log('[' + rqNumber + '] get: Error: ' + err);
            } else {
                if (!callback) return res.text;
                callback(res.text, params)
            }
        });
    }

}

export default API;
