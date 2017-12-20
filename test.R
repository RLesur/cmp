test_template <- function() {
  rmarkdown::render("test_template.Rmd", encoding = "UTF-8")
  webshot::webshot("test_template.html", "test_template.pdf", delay = 2)
  system('open test_template.pdf')
}

test_template()

