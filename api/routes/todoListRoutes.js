'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/categories/getCategories')
    .get(todoList.list_all_categories);

  app.route('/categories/getCategory/:categoryId')
    .get(todoList.read_a_category);

  app.route('/categories/addCategory')
   .post(todoList.create_a_category);

  app.route('/categories/updateCategory/:categoryId')
    .put(todoList.update_a_category);
   
  app.route('/categories/deleteCategory/:categoryId')
    .delete(todoList.delete_a_category);
};