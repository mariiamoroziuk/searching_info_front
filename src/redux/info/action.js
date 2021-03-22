import api from "../../utils/api";

const getInfoByOneId = (id) => (dispatch) => {
    dispatch({type: "GET_ONE_INFO_REQUEST"});
    api.get(`structureInfo/${id}`)
        .then((data) => {
            dispatch({type: "GET_ONE_INFO_SUCCESS", payload: data});
        })
        .catch(err => {
            dispatch({type: "SHOW_ERROR", payload: err.message});
            dispatch({type: "GET_ONE_INFO_ERROR"});
        });
};

const getInfoByManyIds = (ids) => (dispatch) => {
    dispatch({type: "GET_MANY_INFO_REQUEST"});
    api.post('structureInfo', ids)
        .then((data) => {
            dispatch({type: "GET_MANY_INFO_SUCCESS", payload: data});
        })
        .catch(err => {
            dispatch({type: "SHOW_ERROR", payload: err.message});
            dispatch({type: "GET_MANY_INFO_ERROR"});
        });
};

export const INFO_ACTIONS = {
    getInfoByOneId,
    getInfoByManyIds
};