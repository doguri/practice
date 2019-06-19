//
// List first 3 files in c:/temp
//

import groovy.io.FileType

def list = []
new File("c:/temp").eachFile(FileType.FILES) {
  list << it.name
}
list.sort().take(3).each {
  println(it)
}
