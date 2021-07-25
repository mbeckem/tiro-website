---
title: tiro::result

---

# tiro::result






`#include "tiropp/objects.hpp"`

Inherits from [handle](/docs/api/classes/classtiro_1_1handle)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[result](/docs/api/classes/classtiro_1_1result#function-result)**([handle](/docs/api/classes/classtiro_1_1handle) h) |
| | **[result](/docs/api/classes/classtiro_1_1result#function-result)**(const [result](/docs/api/classes/classtiro_1_1result) & ) =default |
| | **[result](/docs/api/classes/classtiro_1_1result#function-result)**([result](/docs/api/classes/classtiro_1_1result) && ) =default |
| [result](/docs/api/classes/classtiro_1_1result) & | **[operator=](/docs/api/classes/classtiro_1_1result#function-operator=)**(const [result](/docs/api/classes/classtiro_1_1result) & ) =default |
| [result](/docs/api/classes/classtiro_1_1result) & | **[operator=](/docs/api/classes/classtiro_1_1result#function-operator=)**([result](/docs/api/classes/classtiro_1_1result) && ) =default |
| bool | **[is_success](/docs/api/classes/classtiro_1_1result#function-is_success)**() const |
| bool | **[is_error](/docs/api/classes/classtiro_1_1result#function-is_error)**() const |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[value](/docs/api/classes/classtiro_1_1result#function-value)**() const |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[error](/docs/api/classes/classtiro_1_1result#function-error)**() const |

## Additional inherited members

**Protected Classes inherited from [handle](/docs/api/classes/classtiro_1_1handle)**

|                | Name           |
| -------------- | -------------- |
| struct | **[check_kind_t](/docs/api/classes/structtiro_1_1handle_1_1check__kind__t)**  |

**Public Functions inherited from [handle](/docs/api/classes/classtiro_1_1handle)**

|                | Name           |
| -------------- | -------------- |
| | **[handle](/docs/api/classes/classtiro_1_1handle#function-handle)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) raw_vm)<br>Constructs a new handle instance.  |
| | **[handle](/docs/api/classes/classtiro_1_1handle#function-handle)**(const [handle](/docs/api/classes/classtiro_1_1handle) & other)<br>Constructs a new handle and initialize is it with the same value as `other`.  |
| | **[handle](/docs/api/classes/classtiro_1_1handle#function-handle)**([handle](/docs/api/classes/classtiro_1_1handle) && other) =default<br>Move constructs a handle.  |
| | **[~handle](/docs/api/classes/classtiro_1_1handle#function-~handle)**() =default |
| bool | **[valid](/docs/api/classes/classtiro_1_1handle#function-valid)**() const<br>Returns true if this handle points to an object (i.e. it was not moved from).  |
| [value_kind](/docs/api/namespaces/namespacetiro#enum-value_kind) | **[kind](/docs/api/classes/classtiro_1_1handle#function-kind)**() const<br>Returns the kind of the value currently held by this handle.  |
| template <typename T \> <br>T | **[as](/docs/api/classes/classtiro_1_1handle#function-as)**() const<br>Converts this value to the target type.  |
| template <typename T \> <br>T | **[as](/docs/api/classes/classtiro_1_1handle#function-as)**() |
| [type](/docs/api/classes/classtiro_1_1type) | **[type_of](/docs/api/classes/classtiro_1_1handle#function-type_of)**() const<br>Returns the type of the value currently held by this handle.  |
| [string](/docs/api/classes/classtiro_1_1string) | **[to_string](/docs/api/classes/classtiro_1_1handle#function-to_string)**() const<br>Returns a string that represents the current value.  |
| [tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) | **[raw_vm](/docs/api/classes/classtiro_1_1handle#function-raw_vm)**() const<br>Returns the raw vm instance associated with this handle.  |
| [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) | **[raw_handle](/docs/api/classes/classtiro_1_1handle#function-raw_handle)**() const<br>Returns the raw handle instance (nullptr for invalid handles).  |

**Protected Functions inherited from [handle](/docs/api/classes/classtiro_1_1handle)**

|                | Name           |
| -------------- | -------------- |
| | **[handle](/docs/api/classes/classtiro_1_1handle#function-handle)**([check_kind_t](/docs/api/classes/structtiro_1_1handle_1_1check__kind__t) , [handle](/docs/api/classes/classtiro_1_1handle) && other, [value_kind](/docs/api/namespaces/namespacetiro#enum-value_kind) expected) |

**Protected Attributes inherited from [handle](/docs/api/classes/classtiro_1_1handle)**

|                | Name           |
| -------------- | -------------- |
| constexpr [check_kind_t](/docs/api/classes/structtiro_1_1handle_1_1check__kind__t) | **[check_kind](/docs/api/classes/classtiro_1_1handle#variable-check_kind)**  |


## Public Functions Documentation

### function result

```cpp
inline explicit result(
    handle h
)
```


### function result

```cpp
result(
    const result & 
) =default
```


### function result

```cpp
result(
    result && 
) =default
```


### function operator=

```cpp
result & operator=(
    const result & 
) =default
```


### function operator=

```cpp
result & operator=(
    result && 
) =default
```


### function is_success

```cpp
inline bool is_success() const
```


### function is_error

```cpp
inline bool is_error() const
```


### function value

```cpp
inline handle value() const
```


### function error

```cpp
inline handle error() const
```


-------------------------------

Updated on 25 July 2021 at 13:14:57 CEST