# Server

## Get Started

### Prerequisite

Docker is required for this project, please download Docker Desktop from their website.

### Command

#### Start server

To start the server, run the following command.

```
docker-compose up
```

## Server API Map

```json
{
	"/patients": ["GET", "POST"],
	"/appointments": {
		"/:patientId": ["GET"]
	},
	"/dentists": {
		"/:branchId": {
			"/": ["GET"]
		}
	},
	"/procedures": ["GET"],
	"/users": ["POST"]
}
```
