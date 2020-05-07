sudo apt-get remove docker docker-engine docker.io -y;
sudo apt install docker.io -y -f;
sudo systemctl enable --now docker;
sudo usermod -aG docker ${USER};
sudo systemctl start docker;
sudo systemctl enable docker;
docker --version;

sudo chmod 777 /var/run/docker.sock;
