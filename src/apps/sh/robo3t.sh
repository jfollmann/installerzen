wget -c https://download-test.robomongo.org/linux/robo3t-1.3.1-linux-x86_64-7419c406.tar.gz
sudo tar -xvzf robo3t-1.3.1-linux-x86_64-7419c406.tar.gz
mkdir /usr/local/bin/robo3t
sudo mv robo3t-1.3.1-linux-x86_64-7419c406/*  /usr/local/bin/robo3t
rm -rf robo3t-1.3.1-linux-x86_64-7419c406.tar.gz
rm -rf robo3t-1.3.1-linux-x86_64-7419c406
sudo chmod +x -R /usr/local/bin/robo3t
cd /usr/local/bin/robo3t/bin

echo "########## <creating robo3t shortcut> ##########"
wget -c https://dashboard.snapcraft.io/site_media/appmedia/2018/09/logo-256x256.png -O icon.png
touch robo3t.desktop
sudo echo "[Desktop Entry]
Encoding=UTF-8
Type=Application
Name=Robo3t
Icon=/usr/local/bin/robo3t/bin/icon.png
Exec=\"/usr/local/bin/robo3t/bin/robo3t\"
Comment=Robo3t
Categories=Development;
Terminal=false
StartupNotify=true" >> robo3t.desktop
sudo mv robo3t.desktop /usr/share/applications/robo3t.desktop
