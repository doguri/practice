//
// List files with in c:/temp
//

import groovy.io.FileType

def list = []
new File("c:/temp").eachFile(FileType.FILES) {
  list << it.name
}
list.sort().each {
  println(it)
}
