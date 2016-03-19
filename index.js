var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var sessions = require('express-sessions');
var mongoose = require('mongoose');
var passport = require('passport');

var app = express();

app.use(bodyParser.json());
