# Stress Test Summary

## GET Request

### Artillery Configuration
```yml
config:
  target: 'http://localhost:3000'
  phases:
    - duration: 60
      arrivalRate: 5
      rampTo: 250
    - duration: 60
      arrivalRate: 250
scenarios:
  - flow:
    - get:
        url: "/api/related/{{ $randomNumber(1, 10000000) }}"
```

### Stress Test Results
```
All virtual users finished
Summary report @ 20:27:21(-0700) 2019-03-10
  Scenarios launched:  22759
  Scenarios completed: 22725
  Requests completed:  22725
  RPS sent: 153.67
  Request latency:
    min: 3.9
    max: 38016.6
    median: 35.7
    p95: 15690.9
    p99: 22690
  Scenario counts:
    0: 22759 (100%)
  Codes:
    200: 22724
    504: 1
  Errors:
    ECONNREFUSED: 2
    ETIMEDOUT: 32
```

## POST Request
### Artillery Configuration
```yml
config:
  target: 'http://localhost:3000'
  phases:
    - duration: 60
      arrivalRate: 5
      rampTo: 200
    - duration: 60
      arrivalRate: 200
scenarios:
  - flow:
    - post:
        url: "/api/related/{{ $randomNumber(1, 10000000) }}"
        json:
          relId: "{{ $randomNumber(1, 10000000) }}"
          prodName: "{{ $randomString() }}"
          avgReview: "{{ $randomNumber(1, 5) }}"
          price: "{{ $randomString() }}"
          isPrime: false
          reviewCount: "{{ $randomNumber(1, 250) }}"
          thumbnailImage: "{{ $randomString() }}"

```

### Stress Test Results
```
All virtual users finished
Summary report @ 20:33:41(-0700) 2019-03-10
  Scenarios launched:  18281
  Scenarios completed: 18281
  Requests completed:  18281
  RPS sent: 151.13
  Request latency:
    min: 3.3
    max: 783
    median: 4.8
    p95: 18.3
    p99: 184.4
  Scenario counts:
    0: 18281 (100%)
  Codes:
    201: 18281
```