var page = require('webpage').create();

// pdf generation needs paperSize definition:
page.paperSize = {
  width: '210mm',
  height: '297mm',
  margin: {
    top: '10mm',
    right: '10mm',
    bottom: '10mm',
    left: '10mm'
  },
  header: {
    height: '10mm',
    contents: phantom.callback(function(pageNum, numPages) {
      if (pageNum == 1) {
        return "<p>ENTETE <span style='float:right'> TATA </span></p>";
      }
      return "";
    })
  },
  footer: {
    height: '10mm',
    contents: phantom.callback(function(pageNum, numPages) {
      return "<h1>PiedDePage <span style='float:right'>" + pageNum + " / " + numPages + "</span></h1>";
    })
  }
};

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
