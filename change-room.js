AFRAME.registerComponent('change-room', {
    schema: { type: "string" },
    init: changeRoom,
});


function changeRoom() {
    var self = this;
    this.el.addEventListener("click", function() {
        window.location.href = self.data;
    });
}
