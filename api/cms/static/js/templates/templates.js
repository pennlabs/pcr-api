// Generated by CoffeeScript 1.6.3
(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.app = root.app ? root.app : {
    models: {},
    collections: {},
    views: {},
    templates: {}
  };

  app.templates.user_table = "<table class=\"table\" id=\"user-table\">\n  <thead>\n    <tr>\n      <% _.each(headers, function(header) { %>\n      <th <% if (selected === header) { %>class='selected'<% } %> data-by='<%= header %>'><%= header.capitalize() %></th>\n      <% }) %>\n    </tr>\n  </thead>\n  <tbody id=\"editor-table\">\n  </tbody>\n</table>";

  app.templates.user_table = "<table class=\"table\" id=\"user-table\">\n  <thead>\n    <tr>\n      <% _.each(headers, function(header) { %>\n      <th <% if (selected === header) { %>class='selected'<% } %> data-by='<%= header %>'><%= header.capitalize() %></th>\n      <% }) %>\n    </tr>\n  </thead>\n  <tbody id=\"editor-table\">\n  </tbody>\n</table>";

  app.templates.user = "\n<% _.each(headers, function(key) { %>\n\n<td data-category='<%= key %>'>\n  <% // if equal to user, read it from the model %>\n  <% if (key === 'profile' && attributes[key] !== undefined) { %>\n\n    <button onclick=\"window.location = '<%= attributes[key] %>'\"> <i class=\"icon-share-alt\"></i> </button>\n  <% } else %>\n  <%= attributes[key] %>\n</td>\n<% }) %>\n";

  app.templates.user_new = "<input class=\"input-small\" placeholder=\"Name\" type=\"text\" id=\"add-name\"/>\n<input class=\"input-small\" placeholder=\"Email\" type=\"email\" id=\"add-email\"/>\n<input class=\"input-small\" placeholder=\"Specialty\" type=\"text\" id=\"add-specialty\"/>\n<input type=\"submit\" id=\"add-user\" value=\"Add Writer\"/>";

  app.templates.search_form = "\n<form class=\"form-inline\">\n  <select id=\"course-search-by\">\n    <% _.each(options, function(option) { %>\n      <option><%= option %></option>\n    <% }) %>\n  </select>\n\n  <input id=\"course-search\" type=\"text\" class=\"input-medium\" placeholder=\"Search Courses\">\n  <label class=\"checkbox\">\n    <input type=\"checkbox\"> Show Assigned\n  </label>\n\n</form>\n";

  app.templates.course_table = "<table class=\"table \" id=\"course-table\">\n  <thead>\n    <tr>\n      <th>?</th>\n      <% _.each(headers, function(header) {  %>\n      <th <% if (selected === header) { %>class='selected'<% } %> data-by='<%= header %>'><%= header.capitalize() %></th>\n      <% }) %>\n    </tr>\n  </thead>\n  <tbody>\n  </tbody>\n</table>";

  app.templates.course = "<td><input type='checkbox'></td>\n<% _.each(headers, function(key) { %>\n\n<td data-category='<%= key %>'>\n  <% // if equal to user, read it from the model %>\n  <% if (key === 'user' && attributes[key] ) { %>\n  <%= attributes[key].get('name') %>\n  <% } else %>\n  <%= attributes[key] %>\n</td>\n<% }) %>";

  app.templates.review = "<p><%= review_text %> </p>";

  app.templates.review_table = "<table class=\"table\" id=\"review-table\">\n  <tbody>\n  </tbody>\n</table>";

  app.templates.review_summary = "<textarea id=\"review-summary-text\"></textarea>\n<button class=\"btn\" type=\"button\">Submit</button>\n<button class=\"btn\" type=\"button\">Save</button>\n<button class=\"btn\" type=\"button\">Approve</button>";

  app.templates.review_filter = "<select id=\"review_filter\">\n  <option data-id=\"\">\n    All Reviews\n  </option>\n  <% collection.each(function(model) { %>\n    <option data-id=\"<%= model.attributes.course_id %>\">\n      <%= model.attributes.department + ' ' + model.attributes.section + ' ' + model.attributes.name %>\n    </option>\n  <% }) %>\n</select>";

  app.templates.stat_view = "<p> Statistics </p>\n\n<ul>\n  <li id=\"stats-courses\">\n    <table class=\"table\">\n      <thead>\n        <td>Statistic</td>\n        <td>Number of Courses</td>\n      </thead>\n      <% _.each(course_stats.categories, function(value, key) { %>\n      <tr>\n        <td><%= key %> courses</td>\n        <td><%= value %></td>\n      </tr>\n      <% })%>\n      <% _.each(course_stats.statuses, function(value, key) { %>\n      <tr>\n        <td><%= key %> courses</td>\n        <td><%= value %></td>\n      </tr>\n      <% })%>\n\n\n    </table>\n  </li>\n  <li id=\"stats-users\">\n    <table class=\"table\">\n      <thead>\n        <td>Statistic</td>\n        <td>Number of Users</td>\n      </thead>\n      <% _.each(user_stats, function(value, key) { %>\n      <tr>\n        <td><%= key %> writers</td>\n        <td><%= value %></td>\n      </tr>\n      <% })%>\n\n    </table>\n  </li>\n  <li id=\"stats-summary\">\n    <table class=\"table\">\n      <thead>\n        <td>Statistic</td>\n        <td>Number of Users</td>\n      </thead>\n\n      <!-- ratios -->\n      <% _.each(course_stats.categories, function(value, key) { %>\n      <tr>\n        <td><%= key %> W:C</td>\n        <td><%= user_stats[key] / value || 0 %></td>\n      </tr>\n      <% })%>\n\n\n\n    </table>\n  </li>\n</ul>\n\n    <p>Total number of reviews: </p>\n    percent completion\n    </p>\n\n    <i class=\"toggle-stats icon-chevron-down\"></i>";

}).call(this);