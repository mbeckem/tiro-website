---
title: tiro::bad_handle_check
summary: Thrown when a debug mode handle check failed. 

---

# tiro::bad_handle_check



Thrown when a debug mode handle check failed. 
`#include "tiropp/error.hpp"`

Inherits from [generic_error](/docs/api/classes/classtiro_1_1generic__error), [error](/docs/api/classes/classtiro_1_1error), exception

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[bad_handle_check](/docs/api/classes/classtiro_1_1bad__handle__check#function-bad_handle_check)**(std::string message) |

## Additional inherited members

**Public Functions inherited from [generic_error](/docs/api/classes/classtiro_1_1generic__error)**

|                | Name           |
| -------------- | -------------- |
| virtual const char * | **[what](/docs/api/classes/classtiro_1_1generic__error#function-what)**() const override |
| virtual const char * | **[message](/docs/api/classes/classtiro_1_1generic__error#function-message)**() const override<br>A simple message line that describes the error condition. Never null.  |
| | **[generic_error](/docs/api/classes/classtiro_1_1generic__error#function-generic_error)**(std::string message) |
| virtual const char * | **[details](/docs/api/classes/classtiro_1_1generic__error#function-details)**() const override<br>Optional detailed error information. Never null, but may be empty.  |

**Public Functions inherited from [error](/docs/api/classes/classtiro_1_1error)**

|                | Name           |
| -------------- | -------------- |
| virtual const char * | **[message](/docs/api/classes/classtiro_1_1error#function-message)**() const =0<br>A simple message line that describes the error condition. Never null.  |
| virtual const char * | **[details](/docs/api/classes/classtiro_1_1error#function-details)**() const =0<br>Optional detailed error information. Never null, but may be empty.  |


## Public Functions Documentation

### function bad_handle_check

```cpp
inline explicit bad_handle_check(
    std::string message
)
```


-------------------------------

Updated on  5 May 2021 at 11:21:35 CEST