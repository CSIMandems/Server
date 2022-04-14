# Server

## Server API Map

```json
{
	"/patients": {
		"/": ["GET"]
	},
	"/appointments": {
		"/:patientId": {
			"/": ["GET"]
		}
	},
	"/dentists": {
		"/:branchId": {
			"/": ["GET"]
		}
	},
	"/procedures": {
		"/": ["GET"]
	}
}
```
