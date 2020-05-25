wget http://www.scootersoftware.com/bcompare-4.3.4.24657_amd64.deb
sudo apt-get update
sudo apt-get install gdebi-core -y
sudo gdebi bcompare-4.3.4.24657_amd64.deb

rm -rf bcompare-4.3.4.24657_amd64.deb
