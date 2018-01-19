import CONST from '../const';
import  {Utils} from '../utils';
import  axios from 'axios';
import Qs from 'qs'

//通用配置
axios.defaults.baseURL = CONST.host;
// axios.defaults.params = Utils.extend(CONST.params, {
//     _r: Utils.sign(1)
// })


//设置携带跨域cookie
axios.defaults.withCredentials = true;
axios.defaults.responseType = 'json';
//form post  设置
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

var _callback = function (response, success, error) {
    var data = response.data;
    if (data && typeof data.data == 'string') {
        try {
            data.data = response.data.data = JSON.parse(data.data);
        } catch (e) {
        }
    }
    if (data) {
        if (data.success) {
            success && success(data)
        } else {
            error && error(data)
        }
    } else {
        error && error({
            message: response.message
        })
    }

}
var userParams = function (params) {
    params = params || {};
    return Utils.extend({
        _r:sign(1)
    }, params)
}
//请求数据
var get = function (config, success, error) {
    if (typeof config == 'function') {
        success = config;
        error = success
    }
    return axios.get(config.url, {
        params: userParams(config.params)
    }).then(function (response) {
        _callback(response, success, error);
    }).catch(function (response) {
        _callback(response, success, error);
    })
}
//请求数据
var post = function (config, success, error) {
    var params;
    if (typeof config == 'function') {
        success = config;
        error = success
    } else {
        params = config.params;
        params['_r'] =  Utils.sign(1);
        if (!(config.params instanceof FormData)) {
            params = Qs.stringify(params)
        }
    }
    return axios.post(config.url, params).then(function (response) {
        _callback(response, success, error);
    }).catch(function (response) {
        _callback(response, success, error);
    })
}
export {
    get,
    post
}