---
title: tiro::bad_handle_cast
summary: Thrown when an invalid cast is attempted. 

---

# tiro::bad_handle_cast



Thrown when an invalid cast is attempted. 


`#include "tiropp/objects.hpp"`

Inherits from [error](/docs/api/classes/classtiro_1_1error), exception

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[bad_handle_cast](/docs/api/classes/classtiro_1_1bad__handle__cast#function-bad-handle-cast)**([value&#95;kind](/docs/api/namespaces/namespacetiro#enum-value-kind) actual, [value&#95;kind](/docs/api/namespaces/namespacetiro#enum-value-kind) expected) |
| virtual const char * | **[message](/docs/api/classes/classtiro_1_1bad__handle__cast#function-message)**() const override<br>A simple message line that describes the error condition. Never null.  |
| virtual const char * | **[details](/docs/api/classes/classtiro_1_1bad__handle__cast#function-details)**() const override<br>Optional detailed error information. Never null, but may be empty.  |
| virtual const char * | **[what](/docs/api/classes/classtiro_1_1bad__handle__cast#function-what)**() const override |

## Public Functions Documentation

### function bad_handle_cast

```cpp
inline explicit bad_handle_cast(
    value_kind actual,
    value_kind expected
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

Updated on 2021-09-26 at 20:39:59 +0200