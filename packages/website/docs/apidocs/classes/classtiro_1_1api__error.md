---
title: tiro::api_error
summary: Represents an error thrown by the tiro c library. 

---

# tiro::api_error



Represents an error thrown by the tiro c library. 


`#include "tiropp/error.hpp"`

Inherits from [error](/docs/api/classes/classtiro_1_1error), exception

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[api_error](/docs/api/classes/classtiro_1_1api__error#function-api_error)**([tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) raw_error)<br>Constructs a new error from the given raw error.  |
| [api_errc](/docs/api/namespaces/namespacetiro#enum-api_errc) | **[code](/docs/api/classes/classtiro_1_1api__error#function-code)**() const<br>Returns the error code represented by this error.  |
| [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) | **[raw_error](/docs/api/classes/classtiro_1_1api__error#function-raw_error)**() const<br>Returns the wrapped tiro_error_t instance.  |
| const char * | **[name](/docs/api/classes/classtiro_1_1api__error#function-name)**() const<br>Returns the name of the error (never null).  |
| virtual const char * | **[message](/docs/api/classes/classtiro_1_1api__error#function-message)**() const override<br>Returns the human readable error message (never null).  |
| virtual const char * | **[details](/docs/api/classes/classtiro_1_1api__error#function-details)**() const override<br>Returns detailed error information (may be the empty string, but never null).  |
| const char * | **[what](/docs/api/classes/classtiro_1_1api__error#function-what)**() const override |

## Public Functions Documentation

### function api_error

```cpp
inline explicit api_error(
    tiro_error_t raw_error
)
```

Constructs a new error from the given raw error. 

The error takes ownership of the raw error. 


### function code

```cpp
inline api_errc code() const
```

Returns the error code represented by this error. 

### function raw_error

```cpp
inline tiro_error_t raw_error() const
```

Returns the wrapped tiro_error_t instance. 

### function name

```cpp
inline const char * name() const
```

Returns the name of the error (never null). 

### function message

```cpp
inline virtual const char * message() const override
```

Returns the human readable error message (never null). 

**Reimplements**: [tiro::error::message](/docs/api/classes/classtiro_1_1error#function-message)


### function details

```cpp
inline virtual const char * details() const override
```

Returns detailed error information (may be the empty string, but never null). 

**Reimplements**: [tiro::error::details](/docs/api/classes/classtiro_1_1error#function-details)


### function what

```cpp
inline const char * what() const override
```


-------------------------------

Updated on 24 July 2021 at 15:41:20 CEST