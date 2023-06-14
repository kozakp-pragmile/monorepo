export NC='\033[0m'
export YELLOW='\033[0;33m'
export GREEN='\033[0;32m'
export BLUE='\033[0;34m'
export CYAN='\033[0;36m'
export RED='\033[0;31m'
export GRAY='\033[1;30m'

function addSourcingFileToFile() {
  local rcFile=$1
  local loadedFile=$2
  if grep -q "$loadedFile" "$rcFile"; then
    echo -e "${GREEN}$rcFile loads $loadedFile${NC}"
  else
    echo -e "${CYAN}modifying $rcFile to load $loadedFile${NC}"
    {
      echo "if [ -f $loadedFile ]; then"
      echo "  . $loadedFile"
      echo "else"
      echo "  touch $loadedFile"
      echo "fi"
    } >>"$rcFile"
  fi
}

addSourcingFileToFile "$HOME/.zshrc" "$HOME/.aliases"
addSourcingFileToFile "$HOME/.bashrc" "$HOME/.aliases"
addSourcingFileToFile "$HOME/.zshrc" "$HOME/.functions"
addSourcingFileToFile "$HOME/.bashrc" "$HOME/.functions"
