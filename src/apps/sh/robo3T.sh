wget -c https://download-test.robomongo.org/linux/robo3t-1.3.1-linux-x86_64-7419c406.tar.gz
sudo tar -xvzf robo3t-1.3.1-linux-x86_64-7419c406.tar.gz
mkdir /usr/local/bin/robo3t
sudo mv robo3t-1.3.1-linux-x86_64-7419c406/*  /usr/local/bin/robo3t
rm -rf robo3t-1.3.1-linux-x86_64-7419c406.tar.gz
rm -rf robo3t-1.3.1-linux-x86_64-7419c406
sudo chmod +x -R /usr/local/bin/robo3t
cd /usr/local/bin/robo3t/bin
