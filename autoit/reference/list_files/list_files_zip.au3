;
; List zip files in c:\
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
    If ($itemname[0] > 1) Then
      If ($itemname[2] == "zip") Then
        $out &= $itemname[1] & "|"
      EndIf
    EndIf
  EndIf
WEnd
$arr = StringSplit($out, "|")
_ArrayPop($arr)
_ArrayDisplay($arr)
