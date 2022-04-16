# Server

## Team Members

| Name             | Student Number |
| ---------------- | -------------- |
| Bhoi, Shaan      | 300037516      |
| Proulx, Justin   | 300060172      |
| Shwan, Daniel    | 300013694      |
| Bhuyan, Arunasva | 300055811      |
| Dahamna, Lilia   | 300208267      |

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
		"/": ["POST"],
		"patient/:patientId": ["GET"],
		"employee/:employeeId": ["GET"]
	},
	"/employees": {
		"/branch/:employeeId": ["GET"],
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
		"/:branchId": ["GET"]
	},
	"/branches": {
		"/employees/:branchId": ["GET"]
	}
}
```
