root = exports ? this
root.app = if root.app then root.app else
  models: {}
  collections: {}
  views: {}
  templates: {}

app.templates.user_table = """
          <table class="table" id="user-table">
            <thead>
              <tr>
                <% _.each(headers, function(header) { %>
                <th <% if (selected === header) { %>class='selected'<% } %> data-by='<%= header %>'><%= header.capitalize() %></th>
                <% }) %>
              </tr>
            </thead>
            <tbody id="editor-table">
            </tbody>
          </table>
  """

app.templates.user_table = """
          <table class="table" id="user-table">
            <thead>
              <tr>
                <% _.each(headers, function(header) { %>
                <th <% if (selected === header) { %>class='selected'<% } %> data-by='<%= header %>'><%= header.capitalize() %></th>
                <% }) %>
              </tr>
            </thead>
            <tbody id="editor-table">
            </tbody>
          </table>
  """

app.templates.user = """

    <% _.each(headers, function(key) { %>

    <td data-category='<%= key %>'>
      <% // if equal to user, read it from the model %>
      <% if (key === 'profile' && attributes[key] !== undefined) { %>

        <button onclick="window.location = '<%= attributes[key] %>'"> <i class="icon-share-alt"></i> </button>
      <% } else %>
      <%= attributes[key] %>
    </td>
    <% }) %>

  """

app.templates.user_new = """
      <input class="input-small" placeholder="Name" type="text" id="add-name"/>
      <input class="input-small" placeholder="Email" type="email" id="add-email"/>
      <input class="input-small" placeholder="Specialty" type="text" id="add-specialty"/>
      <input type="submit" id="add-user" value="Add Writer"/>
    """

app.templates.search_form = """

      <form class="form-inline">
        <select id="course-search-by">
          <% _.each(options, function(option) { %>
            <option><%= option %></option>
          <% }) %>
        </select>

        <input id="course-search" type="text" class="input-medium" placeholder="Search Courses">
        <label class="checkbox">
          <input type="checkbox"> Show Assigned
        </label>

      </form>

"""

app.templates.course_table = """
  <table class="table " id="course-table">
    <thead>
      <tr>
        <th>?</th>
        <% _.each(headers, function(header) {  %>
        <th <% if (selected === header) { %>class='selected'<% } %> data-by='<%= header %>'><%= header.capitalize() %></th>
        <% }) %>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  """
app.templates.course = """
  <td><input type='checkbox'></td>
  <% _.each(headers, function(key) { %>

  <td data-category='<%= key %>'>
    <% // if equal to user, read it from the model %>
    <% if (key === 'user' && attributes[key] ) { %>
    <%= attributes[key].get('name') %>
    <% } else %>
    <%= attributes[key] %>
  </td>
  <% }) %>
  """



##########################################
# Edit View
##########################################

app.templates.review = """
  <p><%= review_text %> </p>
  """


app.templates.review_table = """
  <table class="table" id="review-table">
    <tbody>
    </tbody>
  </table>
  """

app.templates.review_summary = """
  <textarea id="review-summary-text"></textarea>
  <button class="btn" type="button">Submit</button>
  <button class="btn" type="button">Save</button>
  <button class="btn" type="button">Approve</button>
  """

app.templates.review_filter = """
  <select id="review_filter">
    <option data-id="">
      All Reviews
    </option>
    <% collection.each(function(model) { %>
      <option data-id="<%= model.attributes.course_id %>">
        <%= model.attributes.department + ' ' + model.attributes.section + ' ' + model.attributes.name %>
      </option>
    <% }) %>
  </select>
  """


app.templates.stat_view = """
  <p> Statistics </p>

  <ul>
    <li id="stats-courses">
      <table class="table">
        <thead>
          <td>Statistic</td>
          <td>Number of Courses</td>
        </thead>
        <% _.each(course_stats.categories, function(value, key) { %>
        <tr>
          <td><%= key %> courses</td>
          <td><%= value %></td>
        </tr>
        <% })%>
        <% _.each(course_stats.statuses, function(value, key) { %>
        <tr>
          <td><%= key %> courses</td>
          <td><%= value %></td>
        </tr>
        <% })%>


      </table>
    </li>
    <li id="stats-users">
      <table class="table">
        <thead>
          <td>Statistic</td>
          <td>Number of Users</td>
        </thead>
        <% _.each(user_stats, function(value, key) { %>
        <tr>
          <td><%= key %> writers</td>
          <td><%= value %></td>
        </tr>
        <% })%>

      </table>
    </li>
    <li id="stats-summary">
      <table class="table">
        <thead>
          <td>Statistic</td>
          <td>Number of Users</td>
        </thead>

        <!-- ratios -->
        <% _.each(course_stats.categories, function(value, key) { %>
        <tr>
          <td><%= key %> W:C</td>
          <td><%= user_stats[key] / value || 0 %></td>
        </tr>
        <% })%>



      </table>
    </li>
  </ul>

      <p>Total number of reviews: </p>
      percent completion
      </p>

      <i class="toggle-stats icon-chevron-down"></i>
  """
