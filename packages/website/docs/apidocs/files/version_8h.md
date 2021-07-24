---
title: tiro/version.h
summary: Contains version information both at compile time and runtime. 

---

# tiro/version.h

Contains version information both at compile time and runtime. 

## Functions

|                | Name           |
| -------------- | -------------- |
| uint32_t | **[tiro_version_number](/docs/api/files/version_8h#function-tiro_version_number)**()<br>Returns the value of `TIRO_VERSION_NUMBER` at the time the library was built.  |
| const char * | **[tiro_version](/docs/api/files/version_8h#function-tiro_version)**()<br>The value of `TIRO_VERSION` at the time the library was built.  |
| const char * | **[tiro_source_id](/docs/api/files/version_8h#function-tiro_source_id)**()<br>The value of `TIRO_SOURCE_ID` at the time the library was built.  |
| const char * | **[tiro_full_version](/docs/api/files/version_8h#function-tiro_full_version)**()<br>The value of `TIRO_FULL_VERSION` at the time the library was built.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TIRO_MAKE_VERSION](/docs/api/files/version_8h#define-tiro_make_version)**(major, minor, patch) <br>Tiro uses semantic versioning.  |
|  | **[TIRO_VERSION_NUMBER](/docs/api/files/version_8h#define-tiro_version_number)** <br>The library's version number as a build-time constant.  |
|  | **[TIRO_VERSION](/docs/api/files/version_8h#define-tiro_version)** <br>The library's version string as a build-time constant.  |
|  | **[TIRO_SOURCE_ID](/docs/api/files/version_8h#define-tiro_source_id)** <br>The full source id (from version control) as a build-time constant.  |
|  | **[TIRO_FULL_VERSION](/docs/api/files/version_8h#define-tiro_full_version)** <br>The full version string as a build-time constant.  |


## Functions Documentation

### function tiro_version_number

```cpp
uint32_t tiro_version_number()
```

Returns the value of `TIRO_VERSION_NUMBER` at the time the library was built. 

This may be different than the value observed in `TIRO_VERSION_NUMBER` if the application uses a different library version than it was originally compiled with. 


### function tiro_version

```cpp
const char * tiro_version()
```

The value of `TIRO_VERSION` at the time the library was built. 

The returned string points into static storage and must not be modified. 


### function tiro_source_id

```cpp
const char * tiro_source_id()
```

The value of `TIRO_SOURCE_ID` at the time the library was built. 

The returned string points into static storage and must not be modified. 


### function tiro_full_version

```cpp
const char * tiro_full_version()
```

The value of `TIRO_FULL_VERSION` at the time the library was built. 

The returned string points into static storage and must not be modified. 




## Macros Documentation

### define TIRO_MAKE_VERSION

```cpp
#define TIRO_MAKE_VERSION(
    major,
    minor,
    patch
)
    (uint32_t)((major) * 1000000 + (minor) * 1000 + (patch))
```

Tiro uses semantic versioning. 

The version number is incremented for every api change. The following macro constructs a single version number by combining the major, minor and patch version parts. The final version number supports comparison through relational operators.

Note that the individual version number parts must be smaller than 1000. 


### define TIRO_VERSION_NUMBER

```cpp
#define TIRO_VERSION_NUMBER [TIRO_MAKE_VERSION](/docs/api/files/version_8h#define-tiro_make_version)(0, 1, 0)
```

The library's version number as a build-time constant. 

### define TIRO_VERSION

```cpp
#define TIRO_VERSION "0.1.0-dev"
```

The library's version string as a build-time constant. 

### define TIRO_SOURCE_ID

```cpp
#define TIRO_SOURCE_ID "git:71adb2626602ad78ab4774971650173e11afac77-dirty"
```

The full source id (from version control) as a build-time constant. 

### define TIRO_FULL_VERSION

```cpp
#define TIRO_FULL_VERSION "tiro 0.1.0-dev (git:71adb2626602ad78ab4774971650173e11afac77-dirty)"
```

The full version string as a build-time constant. 



-------------------------------

Updated on 24 July 2021 at 15:41:20 CEST
