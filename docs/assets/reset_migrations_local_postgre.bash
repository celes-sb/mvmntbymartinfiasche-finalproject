rm -R -f ./migrations &&
pipenv run init &&
psql -U david -c 'DROP DATABASE mac;' || true &&
psql -U david -c 'CREATE DATABASE mac;' &&
psql -U david -c 'CREATE EXTENSION unaccent;' -d mac &&
pipenv run migrate &&
pipenv run upgrade
