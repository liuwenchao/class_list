$.getJSON("http://42.121.35.233:9001/school/api/v1/class/my/?format=jsonp&username=super&api_key=123456&callback=?", function(data) { 
    var class_list = [];
    $.each(data.objects, function(index, item){
        class_list.push({
            id: item.id, 
            name: item.name, 
            teachers: item.teacher_list, 
            students: item.student_list
        });
    });
    var viewModel = function() {
        this.classes = class_list;
        this.chosen_class = ko.observable(class_list[0]);
        this.switch_class = function(selected_class) {
            this.chosen_class(selected_class);
        }.bind(this);
    };

    ko.applyBindings(new viewModel());
});