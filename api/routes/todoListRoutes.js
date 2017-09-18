'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/GET/categories') 
    .get(todoList.list_all_categories);

  app.route('/GET/categories/:categoryId')
    .get(todoList.read_a_category);

  app.route('/POST/categories')
   .post(todoList.create_a_category);

  app.route('/PUT/categories/:categoryId')
    .put(todoList.update_a_category);
   
  app.route('/DELETE/categories/:categoryId')
    .delete(todoList.delete_a_category);
};