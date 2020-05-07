sudo apt install -y wget;

echo "deb http://apt.postgresql.org/pub/repos/apt/ ${version_name}-pgdg main" > /etc/apt/sources.list.d/pgdg.list;
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -;
aptitude -y update;
aptitude -y install postgresql-9.4 pgadmin3;
