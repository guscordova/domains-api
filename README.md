# Domains API

This API indexes a domain, and stores additional data to it.

Methods
- POST /domains
    *Stores the JSON object as a domain, index is domain.name* 
- GET /domains/{domain-name}
    *Returns domain object if exists*

### Running the Application

### Testing the Application

**POST /domains**
```
$ curl -H "Content-Type: application/json" -X POST -d '{"name":"google.com","data":"more details"}' http://localhost:3000/domains
```

**GET /domain/google.com**
```
$ curl -H "Content-Type: application/json" -X GET http://localhost:3000/domains/google.com
```