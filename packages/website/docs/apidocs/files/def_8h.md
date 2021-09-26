---
title: tiro/def.h
summary: Contains basic type and macro definitions. 

---

# tiro/def.h

Contains basic type and macro definitions.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[tiro_string](/docs/api/classes/structtiro__string)** <br>Represents a string that is not necessarily zero terminated.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct tiro_error * | **[tiro_error_t](/docs/api/files/def_8h#typedef-tiro-error-t)**  |
| typedef struct tiro_vm * | **[tiro_vm_t](/docs/api/files/def_8h#typedef-tiro-vm-t)**  |
| typedef struct tiro_compiler * | **[tiro_compiler_t](/docs/api/files/def_8h#typedef-tiro-compiler-t)**  |
| typedef struct tiro_module * | **[tiro_module_t](/docs/api/files/def_8h#typedef-tiro-module-t)**  |
| typedef struct tiro_value * | **[tiro_handle_t](/docs/api/files/def_8h#typedef-tiro-handle-t)**  |
| typedef struct tiro_sync_frame * | **[tiro_sync_frame_t](/docs/api/files/def_8h#typedef-tiro-sync-frame-t)**  |
| typedef struct tiro_async_frame * | **[tiro_async_frame_t](/docs/api/files/def_8h#typedef-tiro-async-frame-t)**  |
| typedef struct [tiro_string](/docs/api/classes/structtiro__string) | **[tiro_string_t](/docs/api/files/def_8h#typedef-tiro-string-t)** <br>Represents a string that is not necessarily zero terminated.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [tiro_string_t](/docs/api/files/def_8h#typedef-tiro-string-t) | **[tiro_cstr](/docs/api/files/def_8h#function-tiro-cstr)**(const char * data)<br>Helper function to construct a tiro_string_t from a zero terminated string.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TIRO_API](/docs/api/files/def_8h#define-tiro-api)**  |
|  | **[TIRO_WARN_UNUSED](/docs/api/files/def_8h#define-tiro-warn-unused)**  |

## Detailed Description

Contains basic type and macro definitions. 

This file is included by all other api headers. 

## Types Documentation

### typedef tiro_error_t

```cpp
typedef struct tiro_error* tiro_error_t;
```


### typedef tiro_vm_t

```cpp
typedef struct tiro_vm* tiro_vm_t;
```


### typedef tiro_compiler_t

```cpp
typedef struct tiro_compiler* tiro_compiler_t;
```


### typedef tiro_module_t

```cpp
typedef struct tiro_module* tiro_module_t;
```


### typedef tiro_handle_t

```cpp
typedef struct tiro_value* tiro_handle_t;
```


### typedef tiro_sync_frame_t

```cpp
typedef struct tiro_sync_frame* tiro_sync_frame_t;
```


### typedef tiro_async_frame_t

```cpp
typedef struct tiro_async_frame* tiro_async_frame_t;
```


### typedef tiro_string_t

```cpp
typedef struct tiro_string tiro_string_t;
```

Represents a string that is not necessarily zero terminated. 

`data` must have `length` readable bytes. `data` is allowed to be NULL (or any other invalid pointer) if and only if `length` is 0. 



## Functions Documentation

### function tiro_cstr

```cpp
inline tiro_string_t tiro_cstr(
    const char * data
)
```

Helper function to construct a tiro_string_t from a zero terminated string. 

**Parameters**: 

  * **data** a zero terminated string, or NULL. 


Internally calls strlen on non-NULL inputs to determine their length.




## Macros Documentation

### define TIRO_API

```cpp
#define TIRO_API 
```


### define TIRO_WARN_UNUSED

```cpp
#define TIRO_WARN_UNUSED 
```




-------------------------------

Updated on 26 September 2021 at 09:32:12 CEST
