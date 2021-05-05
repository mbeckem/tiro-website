---
title: tiro/error.h
summary: Basic error handling facilities. 

---

# tiro/error.h

Basic error handling facilities. ## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[tiro_errc_t](/docs/api/files/error_8h#enum-tiro_errc_t)** { TIRO_OK = 0, TIRO_ERROR_OUT_OF_BOUNDS = 9, TIRO_ERROR_MODULE_NOT_FOUND = 7, TIRO_ERROR_MODULE_EXISTS = 6, TIRO_ERROR_INTERNAL = 1000, TIRO_ERROR_EXPORT_NOT_FOUND = 8, TIRO_ERROR_BAD_TYPE = 4, TIRO_ERROR_BAD_STATE = 1, TIRO_ERROR_BAD_SOURCE = 3, TIRO_ERROR_BAD_KEY = 5, TIRO_ERROR_BAD_ARG = 2, TIRO_ERROR_ALLOC = 10}<br>Defines all possible error codes.  |
| typedef enum [tiro_errc_t](/docs/api/files/error_8h#enum-tiro_errc_t) | **[tiro_errc_t](/docs/api/files/error_8h#typedef-tiro_errc_t)** <br>Defines all possible error codes.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| const char * | **[tiro_error_name](/docs/api/files/error_8h#function-tiro_error_name)**([tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) err)<br>Returns the name of the error code in the given error.  |
| const char * | **[tiro_error_message](/docs/api/files/error_8h#function-tiro_error_message)**([tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) err)<br>Returns the human readable message of the error code in the given error.  |
| void | **[tiro_error_free](/docs/api/files/error_8h#function-tiro_error_free)**([tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) err)<br>Frees the given error instance.  |
| [tiro_errc_t](/docs/api/files/error_8h#enum-tiro_errc_t) | **[tiro_error_errc](/docs/api/files/error_8h#function-tiro_error_errc)**([tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) err)<br>Returns the error code stored in the given error.  |
| const char * | **[tiro_error_details](/docs/api/files/error_8h#function-tiro_error_details)**([tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) err)<br>Returns detailed error information as a human readable string.  |
| const char * | **[tiro_errc_name](/docs/api/files/error_8h#function-tiro_errc_name)**([tiro_errc_t](/docs/api/files/error_8h#enum-tiro_errc_t) e)<br>Returns the name of the given error code.  |
| const char * | **[tiro_errc_message](/docs/api/files/error_8h#function-tiro_errc_message)**([tiro_errc_t](/docs/api/files/error_8h#enum-tiro_errc_t) e)<br>Returns a human readable description of the given error code.  |

## Types Documentation

### enum tiro_errc_t

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| TIRO_OK | 0|   |
| TIRO_ERROR_OUT_OF_BOUNDS | 9| Argument was out of bounds.   |
| TIRO_ERROR_MODULE_NOT_FOUND | 7| Requested module does not exist.   |
| TIRO_ERROR_MODULE_EXISTS | 6| Module name defined more than once.   |
| TIRO_ERROR_INTERNAL | 1000| Internal error.   |
| TIRO_ERROR_EXPORT_NOT_FOUND | 8| Requested export does not exist.   |
| TIRO_ERROR_BAD_TYPE | 4| Operation not supported on type.   |
| TIRO_ERROR_BAD_STATE | 1| Instance is not in the correct state.   |
| TIRO_ERROR_BAD_SOURCE | 3| Invalid source code.   |
| TIRO_ERROR_BAD_KEY | 5| Key does not exist on object.   |
| TIRO_ERROR_BAD_ARG | 2| Invalid argument.   |
| TIRO_ERROR_ALLOC | 10| Allocation failure.   |



Defines all possible error codes. 

TODO: Better numbering scheme 


### typedef tiro_errc_t

```cpp
typedef enum tiro_errc_t tiro_errc_t;
```

Defines all possible error codes. 

TODO: Better numbering scheme 



## Functions Documentation

### function tiro_error_name

```cpp
const char * tiro_error_name(
    tiro_error_t err
)
```

Returns the name of the error code in the given error. 

### function tiro_error_message

```cpp
const char * tiro_error_message(
    tiro_error_t err
)
```

Returns the human readable message of the error code in the given error. 

### function tiro_error_free

```cpp
void tiro_error_free(
    tiro_error_t err
)
```

Frees the given error instance. 

Does nothing if `err` is NULL. 


### function tiro_error_errc

```cpp
tiro_errc_t tiro_error_errc(
    tiro_error_t err
)
```

Returns the error code stored in the given error. 

Returns `TIRO_OK` if `err` is NULL. 


### function tiro_error_details

```cpp
const char * tiro_error_details(
    tiro_error_t err
)
```

Returns detailed error information as a human readable string. 

The string will never be null, but it may be empty if detailed information are not available.

The returned string is managed by the error and will remain valid for as long as the error is not modified or freed. 


### function tiro_errc_name

```cpp
const char * tiro_errc_name(
    tiro_errc_t e
)
```

Returns the name of the given error code. 

The string points into static storage and must not be freed. 


### function tiro_errc_message

```cpp
const char * tiro_errc_message(
    tiro_errc_t e
)
```

Returns a human readable description of the given error code. 

The string points into static storage and must not be freed. 






-------------------------------

Updated on  5 May 2021 at 11:21:35 CEST
