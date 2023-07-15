# d2 -w file.d2 file.svg
function dtwo() {
  basename=$(basename "$1")
  d2 -w "$1" "${basename}.svg"
}
