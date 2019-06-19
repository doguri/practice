//
// Reverse list of files in c:/temp
//

import groovy.io.FileType

def list = []
new File("c:/temp").eachFile(FileType.FILES) {
  list << it.name
}
list.sort().reverse().each {
  println(it)
}
