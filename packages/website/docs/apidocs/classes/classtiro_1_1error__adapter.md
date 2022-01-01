---
title: tiro::error_adapter
summary: Error adapter class for the tiro_error_t* argument expected by most tiro_* functions. 

---

# tiro::error_adapter



Error adapter class for the tiro_error_t* argument expected by most tiro_* functions.  [More...](#detailed-description)


`#include "tiropp/error.hpp"`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[error_adapter](/docs/api/classes/classtiro_1_1error__adapter#function-error-adapter)**() =default |
| | **[~error_adapter](/docs/api/classes/classtiro_1_1error__adapter#function-~error-adapter)**() |
| | **[error_adapter](/docs/api/classes/classtiro_1_1error__adapter#function-error-adapter)**([error&#95;adapter](/docs/api/classes/classtiro&#95;1&#95;1error&#95;&#95;adapter) && ) =delete |
| [error_adapter](/docs/api/classes/classtiro_1_1error__adapter) & | **[operator=](/docs/api/classes/classtiro_1_1error__adapter#function-operator=)**([error&#95;adapter](/docs/api/classes/classtiro&#95;1&#95;1error&#95;&#95;adapter) && ) =delete |
| | **[operator tiro_error_t *](/docs/api/classes/classtiro_1_1error__adapter#function-operator-tiro-error-t-*)**() |

## Detailed Description

```cpp
class tiro::error_adapter;
```

Error adapter class for the tiro_error_t* argument expected by most tiro_* functions. 

This class implicitly converts to a tiro_error_t* and will throw any error from its destructor.

Thanks to Stefanus Du Toit ([https://www.slideshare.net/StefanusDuToit/cpp-con-2014-hourglass-interfaces-for-c-apis](https://www.slideshare.net/StefanusDuToit/cpp-con-2014-hourglass-interfaces-for-c-apis)) for showing this technique. 

## Public Functions Documentation

### function error_adapter

```cpp
error_adapter() =default
```


### function ~error_adapter

```cpp
inline ~error_adapter()
```


### function error_adapter

```cpp
error_adapter(
    error_adapter && 
) =delete
```


### function operator=

```cpp
error_adapter & operator=(
    error_adapter && 
) =delete
```


### function operator tiro_error_t *

```cpp
inline operator tiro_error_t *()
```


-------------------------------

Updated on 2022-01-01 at 12:38:40 +0100