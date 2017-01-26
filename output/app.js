'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Let and Const
function fire(bool) {
    var foo = 'bar';
    if (bool) {
        console.log(foo);
    } else {
        console.log(foo);
    }
}

fire(false);

// Arrows

var TaskCollection = function () {
    function TaskCollection() {
        var tasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, TaskCollection);

        this.tasks = tasks;
    }

    _createClass(TaskCollection, [{
        key: 'prepare',
        value: function prepare() {
            var _this = this;

            this.tasks.forEach(function (task) {
                console.log(_this);
            });
        }
    }]);

    return TaskCollection;
}();

var Task = function () {
    function Task() {
        _classCallCheck(this, Task);
    }

    _createClass(Task, [{
        key: 'toGulp',
        value: function toGulp() {
            console.log('converting to gulp');
        }
    }]);

    return Task;
}();

new TaskCollection([new Task(), new Task(), new Task()]).prepare();

// return not needed example
var names = ["Jeffrey", "Taylor", "Frank"];

// old way 
names = names.map(function (name) {
    return name + ' is cool.';
});

console.log(names);

// new
names = names.map(function (name) {
    return name + ' is cool.';
});

console.log(names);
