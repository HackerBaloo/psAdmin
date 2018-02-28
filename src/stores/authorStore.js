"use strict";

var Dispather = require('../dispather/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events');
var assign = require('object-assign');
var CHANGE_EVENT = 'change';
var _ = require('lodash');

var _authors = [];


var AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    getAllAuthors: function() {
        return _authors;
    },
    getAuthorById: function(id) {
        return _.find(_authors, {id: id});
    }
});

Dispather.register(function(action) {
    switch(action.actionType) {
        case ActionTypes.CREATE_AUTHOR:
        _authors.push(action.author);
        AuthorStore.emitChange();
        break;
    }
});

module.exports = AuthorStore;