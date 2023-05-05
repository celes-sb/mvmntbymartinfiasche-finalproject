rm -R -f ./migrations &&
pipenv run init &&
psql -U soledadceleste -c 'DROP DATABASE celestesoledad;' || true &&
psql -U soledadceleste -c 'CREATE DATABASE celestesoledad;' &&
psql -U soledadceleste -c 'CREATE EXTENSION unaccent;' -d celestesoledad &&
pipenv run migrate &&
pipenv run upgrade[]
