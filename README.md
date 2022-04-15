# Server

## Get Started

### Prerequisite

Docker is recommended (but not mandatory) for this project. If you wish to use docker, please download Docker Desktop from their website.

### Command

#### Start server

To start the server, run any of the following command.

```
docker-compose up
```

or

```
npm install && npm run dev
```

## Server API Map

```json
{
	"/patients": ["GET", "POST"],
	"/appointments": {
		"patient/:patientId": ["GET"],
		"employee/:employeeId": ["GET"]
	},
	"/employees": {
		"/:branchId": ["GET"],
		"/:patientId": ["GET"]
	},
	"/procedures": ["GET"],
	"/users": {
		"/": ["POST"],
		"/exists": ["POST"],
		"/login": ["POST"]
	},
	"/reviews": {
		"/": ["GET"],
		"/branchId": ["GET"]
	}
}
```
