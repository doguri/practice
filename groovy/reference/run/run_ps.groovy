//
// Run PowerShell
//

def proc = "powershell -command dir c:/".execute().text
println proc

