"use strict";

var Dispather = require('../dispather/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
    createAuthor: function(author) {
        var newAuthor = AuthorApi.saveAuthor(author);

        Dispather.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },
    updateAuthor: function(author) {
        var updatedAuthor = AuthorApi.saveAuthor(author);

        Dispather.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    },
    deleteAuthor: function(id) {
        debugger;
        var updatedAuthor = AuthorApi.deleteAuthor(id);

        Dispather.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            id: id
        });
    }

};

module.exports = AuthorActions;
