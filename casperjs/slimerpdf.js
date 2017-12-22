var webpage = require('webpage').create();
webpage
  .open('test_template.html') // loads a page
  .then(function() {
    webpage.viewportSize = { width: 1240, height: 1754 };
    webpage.render('slimertest.pdf'/*, { 
                      format:'pdf',
                      onlyViewport:true 
                    }*/);
    slimer.exit();
  });
