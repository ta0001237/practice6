function init() {
    function addPercent(percent) {
        currentProgress = currentProgress + percent;
        if (currentProgress > 100) {
            currentProgress = 100;
        }
        $('#my-progress-bar').attr("style", "width: " + currentProgress + "%");
    }
    let currentProgress = 0;
    
    $('#onePercent').click(function(){
        addPercent(1);
    });
    $('#threePercent').click(function () {
        addPercent(3);
    });
    $('#sevenPercent').click(function () {
        addPercent(7);
    });
}
$(document).ready(init);