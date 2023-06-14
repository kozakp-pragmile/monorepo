# git checkout master/main
function gcm() {
  branches=$(git branch)
  if echo "$branches" | grep -E "main$" > /dev/null
  then
    git checkout main
    return
  fi
  if echo "$branches" | grep -E "master$" > /dev/null
  then
    git checkout master
    return
  fi
  echo "There is no main/master branch"
}
