// Generated by CoffeeScript 1.6.3
(function() {
  var random_color, random_id, root, _ref, _ref1,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  random_color = function() {
    return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
  };

  random_id = function() {
    return Math.ceil(Math.random() * 10000);
  };

  app.models.User = (function(_super) {
    __extends(User, _super);

    function User() {
      _ref = User.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    User.prototype.urlRoot = '/cms/user/';

    User.prototype.idAttribute = '_id';

    User.prototype.relations = [
      {
        type: Backbone.HasMany,
        key: 'courses',
        relatedModel: 'app.models.Course',
        includeInJSON: ['color', '_id'],
        collectionType: 'app.collections.Courses',
        reverseRelation: {
          key: 'user',
          type: Backbone.HasOne,
          includeInJson: false
        }
      }
    ];

    User.prototype.defaults = {
      id: random_id(),
      name: 'Default Name',
      permission: '0',
      email: 'default@default.com',
      color: '#000000',
      reviews: '0',
      profile: '/user/<%= id %>',
      specialty: 'Wharton'
    };

    User.prototype.initialize = function() {
      var _this = this;
      this.set('color', random_color());
      this.set('id', random_id());
      return _.map(this.defaults, function(val, key) {
        if (!_this.get(key)) {
          return _this.set(key, _this.defaults.key);
        }
      });
    };

    User.prototype.activate = function() {};

    User.prototype.clear = function() {
      this.destroy();
      return this.view.remove();
    };

    return User;

  })(Backbone.RelationalModel);

  app.models.User.setup();

  app.collections.Users = (function(_super) {
    __extends(Users, _super);

    function Users() {
      _ref1 = Users.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    Users.prototype.model = app.models.User;

    Users.prototype.comparator = function(model) {
      return model.get(this.by);
    };

    Users.prototype.initialize = function() {
      var a;
      this.by = "name";
      a = new this.model;
      return this.headers = _.filter(_.keys(a.attributes), function(item) {
        return item !== 'id' && item !== 'color' && item !== 'permission' && item !== 'courses';
      });
    };

    return Users;

  })(Backbone.Collection);

}).call(this);
