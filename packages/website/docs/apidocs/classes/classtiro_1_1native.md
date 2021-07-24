---
title: tiro::native

---

# tiro::native






`#include "tiropp/objects.hpp"`

Inherits from [handle](/docs/api/classes/classtiro_1_1handle)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[native](/docs/api/classes/classtiro_1_1native#function-native)**([handle](/docs/api/classes/classtiro_1_1handle) h) |
| | **[native](/docs/api/classes/classtiro_1_1native#function-native)**(const [native](/docs/api/classes/classtiro_1_1native) & ) =default |
| | **[native](/docs/api/classes/classtiro_1_1native#function-native)**([native](/docs/api/classes/classtiro_1_1native) && ) =default |
| [native](/docs/api/classes/classtiro_1_1native) & | **[operator=](/docs/api/classes/classtiro_1_1native#function-operator=)**(const [native](/docs/api/classes/classtiro_1_1native) & ) =default |
| [native](/docs/api/classes/classtiro_1_1native) & | **[operator=](/docs/api/classes/classtiro_1_1native#function-operator=)**([native](/docs/api/classes/classtiro_1_1native) && ) =default |
| const [tiro_native_type_t](/docs/api/files/objects_8h#typedef-tiro_native_type_t) * | **[type_descriptor](/docs/api/classes/classtiro_1_1native#function-type_descriptor)**() const |
| void * | **[data](/docs/api/classes/classtiro_1_1native#function-data)**() const |
| size_t | **[size](/docs/api/classes/classtiro_1_1native#function-size)**() const |

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

### function native

```cpp
inline explicit native(
    handle h
)
```


### function native

```cpp
native(
    const native & 
) =default
```


### function native

```cpp
native(
    native && 
) =default
```


### function operator=

```cpp
native & operator=(
    const native & 
) =default
```


### function operator=

```cpp
native & operator=(
    native && 
) =default
```


### function type_descriptor

```cpp
inline const tiro_native_type_t * type_descriptor() const
```


### function data

```cpp
inline void * data() const
```


### function size

```cpp
inline size_t size() const
```


-------------------------------

Updated on 24 July 2021 at 15:41:20 CEST