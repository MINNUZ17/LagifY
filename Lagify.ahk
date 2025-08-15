; Lagify AutoHotkey Script (Fixed for Audio)
; Ctrl + Alt + L → Trigger Lag Me
; Ctrl + Alt + S → Stop Lagify / stop audio

#Persistent
#NoEnv
SendMode Input

; Path to your glitch audio
glitchAudio := A_ScriptDir . "\glitchfreeze.wav"

; --- Start Lagify ---
^!L::
    MsgBox, 64, Lagify, Your network connection is unstable!`n(Webcam frozen & audio glitch simulated
    ; Play glitch audio asynchronously
    SoundPlay, %glitchAudio%, wait
Return

; --- Stop Lagify ---
^!S::
    ; Stop any playing audio (works in all AHK versions)
    SoundPlay, *64  ; stops previous sound
    MsgBox, 64, Lagify, Lagify stopped.
Return