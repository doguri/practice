;
; List folders in c:\
;

#include <Array.au3>

$foldername = "C:\"
$folder = FileFindFirstFile($foldername & "\*.*")
If $folder = -1 Then Exit

$out = ""
While 1
  $item = FileFindNextFile($folder)
  If @error Then ExitLoop
  If StringInStr(FileGetAttrib($foldername & "\" & $item), "D") Then
    $out &= $item & "|"
  EndIf
WEnd
$arr = StringSplit($out, "|")
_ArrayPop($arr)
_ArrayDisplay($arr)
