# API Documentation

## Base URL
`http://localhost:3000/api`

## Authentication
All endpoints (except `/health` and `/auth/register`) require JWT token in header:
```
Authorization: Bearer {jwt_token}
```

## Endpoints

### Health Check
```
GET /health
```
Returns: `{ status: "healthy", timestamp: "..." }`

### Marketplace - Demand Radar
```
GET /marketplace/gaps
Query: ?limit=10&offset=0
```
Returns: Array of market gaps

### Workflows
```
POST /workflows
GET /workflows
GET /workflows/:id
PUT /workflows/:id
DELETE /workflows/:id
```

### Optimization
```
POST /workflows/:id/optimize
```
Analyze and optimize workflow prompts

### Localization
```
POST /workflows/:id/localize
Body: { languages: ["es", "fr", "de"] }
```

### Analytics
```
GET /workflows/:id/analytics
```
Get performance metrics and predictions

### Marketing
```
POST /workflows/:id/marketing/generate
Body: { platforms: ["twitter", "linkedin"] }
```

### Modules
```
GET /modules
POST /modules
GET /modules/:id
```

## Response Format
All responses follow this format:
```json
{
  "success": true,
  "data": {...},
  "error": null
}
```

## Error Handling
Errors return appropriate HTTP status codes with message:
```json
{
  "success": false,
  "data": null,
  "error": "Error message"
}
```