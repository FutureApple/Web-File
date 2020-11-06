@echo off

set a=1

setlocal EnableDelayedExpansion

for %%n in (*.jpg) do (

set /A a+=1

ren "%%n" "tt!a!.jpg"

)