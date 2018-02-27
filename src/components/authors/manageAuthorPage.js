"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');

var ManageAuthorPage = React.createClass({
    render: function() {
        console.log("render ManageAuthorPage");
        return ( 
            <div>
                <h1>Manage Author</h1>
                <AuthorForm />
            </div>
        );
    }
});

module.exports = ManageAuthorPage;