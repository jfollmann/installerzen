
sudo apt install -y curl;
curl https://brave-browser-apt-release.s3.brave.com/brave-core.asc | sudo apt-key add -;
echo "deb [arch=amd64] https://brave-browser-apt-release.s3.brave.com/ `lsb_release -sc` main" | sudo tee -a /etc/apt/sources.list.d/brave-browser-release-`lsb_release -sc`.list;
sudo apt update -y;
sudo apt install brave-browser -y;
