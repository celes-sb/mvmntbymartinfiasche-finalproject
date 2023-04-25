rm -R -f ./migrations &&
pipenv run init &&
psql -U postgres -c 'DROP DATABASE mac;' || true &&
psql -U postgres -c 'CREATE DATABASE mac;' &&
psql -U postgres -c 'CREATE EXTENSION unaccent;' -d mac &&
pipenv run migrate &&
pipenv run upgrade