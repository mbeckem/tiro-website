---
title: tiro::error
summary: Base class for all errors thrown by this library. 

---

# tiro::error



Base class for all errors thrown by this library. 


`#include "tiropp/error.hpp"`

Inherits from exception

Inherited by [api_error](/docs/api/classes/classtiro_1_1api__error), [bad_handle_cast](/docs/api/classes/classtiro_1_1bad__handle__cast), [generic_error](/docs/api/classes/classtiro_1_1generic__error)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual const char * | **[message](/docs/api/classes/classtiro_1_1error#function-message)**() const =0<br>A simple message line that describes the error condition. Never null.  |
| virtual const char * | **[details](/docs/api/classes/classtiro_1_1error#function-details)**() const =0<br>Optional detailed error information. Never null, but may be empty.  |

## Public Functions Documentation

### function message

```cpp
virtual const char * message() const =0
```

A simple message line that describes the error condition. Never null. 

**Reimplemented by**: [tiro::generic_error::message](/docs/api/classes/classtiro_1_1generic__error#function-message), [tiro::api_error::message](/docs/api/classes/classtiro_1_1api__error#function-message), [tiro::bad_handle_cast::message](/docs/api/classes/classtiro_1_1bad__handle__cast#function-message)


### function details

```cpp
virtual const char * details() const =0
```

Optional detailed error information. Never null, but may be empty. 

**Reimplemented by**: [tiro::generic_error::details](/docs/api/classes/classtiro_1_1generic__error#function-details), [tiro::api_error::details](/docs/api/classes/classtiro_1_1api__error#function-details), [tiro::bad_handle_cast::details](/docs/api/classes/classtiro_1_1bad__handle__cast#function-details)


-------------------------------

Updated on 24 July 2021 at 15:38:22 CEST