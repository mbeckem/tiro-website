---
title: tiro::generic_error
summary: Generic error with a simple message. 

---

# tiro::generic_error



Generic error with a simple message. 


`#include "tiropp/error.hpp"`

Inherits from [error](/docs/api/classes/classtiro_1_1error), exception

Inherited by [bad_handle_check](/docs/api/classes/classtiro_1_1bad__handle__check)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[generic_error](/docs/api/classes/classtiro_1_1generic__error#function-generic-error)**(std::string message) |
| virtual const char * | **[message](/docs/api/classes/classtiro_1_1generic__error#function-message)**() const override<br>A simple message line that describes the error condition. Never null.  |
| virtual const char * | **[details](/docs/api/classes/classtiro_1_1generic__error#function-details)**() const override<br>Optional detailed error information. Never null, but may be empty.  |
| virtual const char * | **[what](/docs/api/classes/classtiro_1_1generic__error#function-what)**() const override |

## Public Functions Documentation

### function generic_error

```cpp
inline explicit generic_error(
    std::string message
)
```


### function message

```cpp
inline virtual const char * message() const override
```

A simple message line that describes the error condition. Never null. 

**Reimplements**: [tiro::error::message](/docs/api/classes/classtiro_1_1error#function-message)


### function details

```cpp
inline virtual const char * details() const override
```

Optional detailed error information. Never null, but may be empty. 

**Reimplements**: [tiro::error::details](/docs/api/classes/classtiro_1_1error#function-details)


### function what

```cpp
inline virtual const char * what() const override
```


-------------------------------

Updated on 2022-02-06 at 18:52:25 +0100