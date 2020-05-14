sudo apt install -y git

apt-get -y install make g++ gawk automake pkg-config libevent-dev ncurses-dev
git clone https://github.com/tmux/tmux.git
cd tmux/ && sh autogen.sh && ./configure && make && make install
ln -sf /usr/local/bin/tmux /usr/bin/tmux
