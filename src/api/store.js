import * as Api from './api';
var update = function (params, success, error) {
    Api.get({
        url: '/update',
        params: params
    }, success, error)
}

var insert = function (params, success, error) {
    Api.post({
        url: '/insert',
        params: params
    }, success, error)
}
export {
    update,
    insert
}