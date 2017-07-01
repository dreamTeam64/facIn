//ajout du framework Express
var express = require('express');
var app = express();

//ajout du framework handlebars
var handlebars = require('express3-handlebars').create({
  //layout par def = views/layouts/main.handlebars
  defaultLayout:'main',
  //partie obscure pris sur le livre de ref
  helpers: {
    section: function(name, options){
      if(!this._sections){
        this._sections = {};
      }
      this._sections[name] = options.fn(this);
      return null;
    }
  }
});

app.engine('handlebars', handlebars.engine);//Def du View Engine
app.set('port',process.env.PORT || 3000);//Def du port d'écoute du serveur
app.set('view engine', 'handlebars');

app.use(require('body-parser')());//interessant pour découper des urls
