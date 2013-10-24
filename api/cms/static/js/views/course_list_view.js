// Generated by CoffeeScript 1.6.2
(function() {
  var root, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  app.views.CourseListView = (function(_super) {
    __extends(CourseListView, _super);

    function CourseListView() {
      _ref = CourseListView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    CourseListView.prototype.template = app.templates.course_table;

    CourseListView.prototype.tagName = 'div';

    CourseListView.prototype.className = 'course-list';

    CourseListView.prototype.selectedUser = void 0;

    CourseListView.prototype.events = {
      "click th": "sort_reviews"
    };

    CourseListView.prototype.render = function(search_data) {
      var course_list, course_list_els, data, push_courses, search_query, search_results,
        _this = this;

      if (search_data == null) {
        search_data = {};
      }
      console.log(search_data);
      data = this.selectedUser ? this.collection.where({
        user: this.selectedUser
      }) : [];
      this.$el.html(_.template(this.template, {
        headers: this.collection.headers,
        selected: this.collection.by
      }));
      course_list = [];
      push_courses = function(course) {
        var course_view;

        course_view = new app.views.CourseView({
          model: course,
          selected_user: _this.selectedUser
        });
        return course_list.push(course_view.render());
      };
      search_query = $('#course-search').val();
      search_results = this.collection.search_by_type(search_query, search_data.search_type);
      _(_.intersection(data, search_results)).each(function(item) {
        return push_courses(item);
      });
      _(_.difference(search_results, data)).each(function(item) {
        return push_courses(item);
      });
      course_list_els = _.pluck(course_list, 'el');
      this.$el.find('tbody').html(course_list_els);
      return this;
    };

    CourseListView.prototype.initialize = function() {
      this.listenTo(this.collection, 'add', this.render);
      this.listenTo(this.collection, 'sort', this.render);
      this.listenTo(root.match_vent, 'select_user', this.filter_by_user);
      return this.listenTo(root.search_vent, 'course:search_by', this.render);
    };

    CourseListView.prototype.sort_reviews = function(e) {
      e.preventDefault();
      this.collection.by = $(e.target).attr('data-by');
      return this.collection.sort();
    };

    CourseListView.prototype.filter_by_user = function(data) {
      this.selectedUser = data.user;
      return this.render();
    };

    return CourseListView;

  })(Backbone.View);

}).call(this);
