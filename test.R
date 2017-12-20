test_template <- function() {
  rmarkdown::render("test_template.Rmd", encoding = "UTF-8")
  webshot::webshot("test_template.html", "test_template.pdf")
  system('open test_template.pdf')
}

test_template2 <- function() {
  rmarkdown::render("test_template.Rmd", encoding = "UTF-8")
  system2(file.path(Sys.getenv("PHANTOM_DIR"), "phantomjs"), args = "test.js")
  system('open test_template.pdf')
}


test_template()

test_template2()
