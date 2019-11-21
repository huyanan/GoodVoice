#!/bin/bash

ReadKey() {
  if read -sn1 KEY; then
    while read -sn1 -t 0.001 ; do
      KEY+="${REPLY}"
    done
  fi
}

while ReadKey; do
  case "${KEY}" in
    $'\eOP')   echo 'F1';;
    $'\e[24~') echo 'F12';;
    *) echo    "Keys pressed: ${KEY}";;
  esac
done
