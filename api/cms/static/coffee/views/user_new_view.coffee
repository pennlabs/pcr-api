root = exports ? @

class app.views.UserNewView extends Backbone.View
  # used to do keypress search
  template: app.templates.user_new
  tagName: 'form'
  className: 'form-inline'
  id: 'user-new'

  events:
    "submit" : "add_one"

  render: ->
    @$el.html _.template @template
    return @

  initialize: ->

  add_one: (e) ->
    name = @$el.find('#add-name').val()
    email = @$el.find('#add-email').val()
    specialty = @$el.find('#add-specialty').val()
    e.preventDefault()
    # send ajax request, if success, create, else popup notification error
    $.post '/cms/users', {name, email, specialty, user_type:'WR'}, (data)->
      console.log 'users request'
      console.log data
#TODO: 403 forbidden
      root.create_vent.trigger 'user:create',
        {name, email, specialty}
