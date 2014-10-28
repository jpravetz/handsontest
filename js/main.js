$(document).ready(function () {

    var data = [
        ["", "Maserati", "Mazda", "Mercedes", "Mini", "Mitsubishi"],
        ["Here is some really long text that will go here", 0, 2941, 4303, 354, 5814],
        ["2010", 5, 2905, 2867, 412, 5284],
        ["2011", 4, 2517, 4822, 552, 6127],
        ["2012", 2, 2422, 5399, 776, 4151]
    ];

    $('#table-region').handsontable({
        data: data,
        colHeaders: true,
        startRows: 6,
        startCols: 8,
        stretchH: 'all',
        persistentState: true,
        manualColumnResize: true
    });


    function bindDumpButton() {
        $('body').on('click', 'button[name=dump]', function () {
            var dump = $(this).data('dump');
            var $container = $(dump);
            console.log('data of ' + dump, $container.handsontable('getData'));
        });
    }
    bindDumpButton();

});