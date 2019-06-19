//
// List files with zip extension in c:/temp
//

import groovy.io.FileType

def list = []
new File("c:/temp").eachFile(FileType.FILES) {
  if (it.name.endsWith(".zip")) {
    list << it.name
  }
}
list.sort().reverse().each {
  println(it)
}
