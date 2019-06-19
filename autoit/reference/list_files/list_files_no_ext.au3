;
; List files in c:\ without extension
;

#include <Array.au3>

$foldername = "C:\"
$folder = FileFindFirstFile($foldername & "\*.*")
If $folder = -1 Then Exit

$out = ""
While 1
  $item = FileFindNextFile($folder)
  If @error Then ExitLoop
  If Not StringInStr(FileGetAttrib($foldername & "\" & $item), "D") Then
    $itemname=StringSplit($item, ".")
    $out &= $itemname[1] & "|"
  EndIf
WEnd
$arr = StringSplit($out, "|")
_ArrayPop($arr)
_ArrayDisplay($arr)
