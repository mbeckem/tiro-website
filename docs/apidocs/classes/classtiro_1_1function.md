---
title: tiro::function

---

# tiro::function




`#include "tiropp/objects.hpp"`

Inherits from [handle](/docs/api/classes/classtiro_1_1handle)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| [function](/docs/api/classes/classtiro_1_1function) & | **[operator=](/docs/api/classes/classtiro_1_1function#function-operator=)**(const [function](/docs/api/classes/classtiro_1_1function) & ) =default |
| [function](/docs/api/classes/classtiro_1_1function) & | **[operator=](/docs/api/classes/classtiro_1_1function#function-operator=)**([function](/docs/api/classes/classtiro_1_1function) && ) =default |
| | **[function](/docs/api/classes/classtiro_1_1function#function-function)**([handle](/docs/api/classes/classtiro_1_1handle) h) |
| | **[function](/docs/api/classes/classtiro_1_1function#function-function)**(const [function](/docs/api/classes/classtiro_1_1function) & ) =default |
| | **[function](/docs/api/classes/classtiro_1_1function#function-function)**([function](/docs/api/classes/classtiro_1_1function) && ) =default |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[call](/docs/api/classes/classtiro_1_1function#function-call)**(const [handle](/docs/api/classes/classtiro_1_1handle) & args)<br>Calls `func` with the provided arguments and returns the result.  |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[call](/docs/api/classes/classtiro_1_1function#function-call)**()<br>Calls `func` with zero arguments and returns the result.  |

## Additional inherited members

**Protected Classes inherited from [handle](/docs/api/classes/classtiro_1_1handle)**

|                | Name           |
| -------------- | -------------- |
| struct | **[check_kind_t](/docs/api/classes/structtiro_1_1handle_1_1check__kind__t)**  |

**Public Functions inherited from [handle](/docs/api/classes/classtiro_1_1handle)**

|                | Name           |
| -------------- | -------------- |
| | **[~handle](/docs/api/classes/classtiro_1_1handle#function-~handle)**() =default |
| bool | **[valid](/docs/api/classes/classtiro_1_1handle#function-valid)**() const<br>Returns true if this handle points to an object (i.e. it was not moved from).  |
| [type](/docs/api/classes/classtiro_1_1type) | **[type_of](/docs/api/classes/classtiro_1_1handle#function-type_of)**() const<br>Returns the type of the value currently held by this handle.  |
| [string](/docs/api/classes/classtiro_1_1string) | **[to_string](/docs/api/classes/classtiro_1_1handle#function-to_string)**() const<br>Returns a string that represents the current value.  |
| [tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) | **[raw_vm](/docs/api/classes/classtiro_1_1handle#function-raw_vm)**() const<br>Returns the raw vm instance associated with this handle.  |
| [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) | **[raw_handle](/docs/api/classes/classtiro_1_1handle#function-raw_handle)**() const<br>Returns the raw handle instance (nullptr for invalid handles).  |
| [value_kind](/docs/api/namespaces/namespacetiro#enum-value_kind) | **[kind](/docs/api/classes/classtiro_1_1handle#function-kind)**() const<br>Returns the kind of the value currently held by this handle.  |
| | **[handle](/docs/api/classes/classtiro_1_1handle#function-handle)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) raw_vm)<br>Constructs a new handle instance.  |
| | **[handle](/docs/api/classes/classtiro_1_1handle#function-handle)**(const [handle](/docs/api/classes/classtiro_1_1handle) & other)<br>Constructs a new handle and initialize is it with the same value as `other`.  |
| | **[handle](/docs/api/classes/classtiro_1_1handle#function-handle)**([handle](/docs/api/classes/classtiro_1_1handle) && other) =default<br>Move constructs a handle.  |
| template <typename T \> <br>T | **[as](/docs/api/classes/classtiro_1_1handle#function-as)**() const<br>Converts this value to the target type.  |
| template <typename T \> <br>T | **[as](/docs/api/classes/classtiro_1_1handle#function-as)**() |

**Protected Functions inherited from [handle](/docs/api/classes/classtiro_1_1handle)**

|                | Name           |
| -------------- | -------------- |
| | **[handle](/docs/api/classes/classtiro_1_1handle#function-handle)**([check_kind_t](/docs/api/classes/structtiro_1_1handle_1_1check__kind__t) , [handle](/docs/api/classes/classtiro_1_1handle) && other, [value_kind](/docs/api/namespaces/namespacetiro#enum-value_kind) expected) |

**Protected Attributes inherited from [handle](/docs/api/classes/classtiro_1_1handle)**

|                | Name           |
| -------------- | -------------- |
| constexpr [check_kind_t](/docs/api/classes/structtiro_1_1handle_1_1check__kind__t) | **[check_kind](/docs/api/classes/classtiro_1_1handle#variable-check_kind)**  |


## Public Functions Documentation

### function operator=

```cpp
function & operator=(
    const function & 
) =default
```


### function operator=

```cpp
function & operator=(
    function && 
) =default
```


### function function

```cpp
inline explicit function(
    handle h
)
```


### function function

```cpp
function(
    const function & 
) =default
```


### function function

```cpp
function(
    function && 
) =default
```


### function call

```cpp
inline handle call(
    const handle & args
)
```

Calls `func` with the provided arguments and returns the result. 

`args` may be null (for 0 arguments), or a tuple. 


### function call

```cpp
inline handle call()
```

Calls `func` with zero arguments and returns the result. 

-------------------------------

Updated on  5 May 2021 at 11:21:35 CEST