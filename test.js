var page = require('webpage').create();

page.open("test_template.html", function (status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
        phantom.exit();
    } else {
        window.setTimeout(function () {
            page.render('test_template.pdf');
            phantom.exit();
        }, 1000); // Change timeout as required to allow sufficient time 
    }
});
