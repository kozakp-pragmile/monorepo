cat > "$HOME/.aliases" <<EOL
alias docker-stop-all='docker ps -q | xargs docker stop'
alias docker-remove-all='docker ps -a -q | xargs docker rm'
alias docker-service-remove-all='docker service ls -q | xargs docker service rm'
alias docker-image-remove-all='docker images -q | xargs docker rmi -f'
alias docker-image-snapshots-remove-all='docker images | grep SNAPSHOT | awk '\''{print \$3}'\'' | xargs docker rmi -f'
alias dc='docker-compose'
alias dcu='docker-compose up'
alias dcud='docker-compose up -d'
alias dcd='docker-compose down'
alias use-maven-wrapper='mvn -U -N io.takari:maven:wrapper'
alias ssh-nexus='ssh pkk82.pl -p 57185'
alias ssh-apps='ssh apps.pkk82.pl -p 57185'
alias gp='git pull'
alias gpo='git push origin \$(git rev-parse --abbrev-ref HEAD)'
alias gppo='git pull && git push origin \$(git rev-parse --abbrev-ref HEAD)'
alias gcm='git checkout master'
alias gcb='git checkout -b'
alias gbv='git branch -v'
alias gbd='git branch -D'
alias v='vagrant'
alias vssh='vagrant ssh'
alias vdf='vagrant destroy -f'
alias vh='vagrant halt'
alias vu='vagrant up'
alias w='cd $HOME/workspace'
alias prv='cd $HOME/workspace/prv'
alias c='cd $HOME/workspace/courses'
alias d='cd $HOME/workspace/documentations'
alias software='cd $CLOUD_SOFTWARE_DIR'
alias da='direnv allow'
alias woc='cd $HOME/w-corp'
alias kb='cd $HOME/w-corp/kestrel.backend'
alias kf='cd $HOME/w-corp/kestrel.frontend'
alias dush='du -sh *'
alias pn='pnpm'
alias cclip='pbcopy'
EOL
