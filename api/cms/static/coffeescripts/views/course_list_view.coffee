root = exports ? this

class app.views.CourseListView extends Backbone.View
  template: app.templates.course_table
  tagName: 'div'
  className:'course-list'

  events:
    "click th": "sort_reviews"

  render: (data) ->

    @$el.html _.template @template,
      {headers: @collection.headers, selected: @collection.by}

    course_list = []

    # if a search query exists, filter the collection results
    push_courses = (course) ->
      console.log course
      course_view = new app.views.CourseView(model: course)
      course_list.push course_view.render()

    search_query = $('#search').val()
    search_results = @collection.search_by_name(search_query)
    console.log(search_results)
    _(_.intersection(data, search_results)).each push_courses
    console.log(_.difference(search_results, data))
    _(_.difference(search_results, data)).each push_courses
    # _(data).each push_courses 
    # @collection.search_by_name(search_query, data).each push_courses
    # _(_.difference(@collection.models, data)).each push_courses
    course_list_els = _.pluck course_list, 'el'
    @$el.find('tbody').html course_list_els
    return @

  initialize: ->
    @listenTo @collection, 'add', @render
    @listenTo @collection, 'sort', @render
    @listenTo root.search_vent, 'search:by_name', @render
    @listenTo root.match_vent, 'select_user', @filter_by_user

  sort_reviews: (e) ->
    e.preventDefault()
    @collection.by = $(e.target).attr 'data-by'
    @collection.sort()

  filter_by_user: (data) ->
    result = @collection.where({user:data.name});
    @render result

