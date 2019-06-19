//
// Run CMD
//

def proc = "cmd /c dir c:\" ".execute().text
println proc
