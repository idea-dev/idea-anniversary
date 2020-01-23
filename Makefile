.PHONY: start

start:
	npm start

test:
	npm test

component:
	npm run mc -- ${NAME} -d ${DIR}

deploy:
	rm -rf dist
	npm run build-prod
	surge ./dist https://idea-anniversary.surge.sh

