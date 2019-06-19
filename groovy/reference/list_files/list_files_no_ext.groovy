//
// List files files without extension in c:/temp
//

import groovy.io.FileType

def list = []
new File("c:/temp").eachFile(FileType.FILES) {
  list << it.name.replaceAll(/.[a-zA-Z0-9]*$/,"")
}
list.sort().each {
  println(it)
}
