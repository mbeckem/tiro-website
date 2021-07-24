---
title: tiro::record

---

# tiro::record






`#include "tiropp/objects.hpp"`

Inherits from [handle](/docs/api/classes/classtiro_1_1handle)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[set](/docs/api/classes/classtiro_1_1record#function-set)**(const [string](/docs/api/classes/classtiro_1_1string) & key, const [handle](/docs/api/classes/classtiro_1_1handle) & value) |
| | **[record](/docs/api/classes/classtiro_1_1record#function-record)**([handle](/docs/api/classes/classtiro_1_1handle) h) |
| | **[record](/docs/api/classes/classtiro_1_1record#function-record)**(const [record](/docs/api/classes/classtiro_1_1record) & ) =default |
| | **[record](/docs/api/classes/classtiro_1_1record#function-record)**([record](/docs/api/classes/classtiro_1_1record) && ) =default |
| [record](/docs/api/classes/classtiro_1_1record) & | **[operator=](/docs/api/classes/classtiro_1_1record#function-operator=)**(const [record](/docs/api/classes/classtiro_1_1record) & ) =default |
| [record](/docs/api/classes/classtiro_1_1record) & | **[operator=](/docs/api/classes/classtiro_1_1record#function-operator=)**([record](/docs/api/classes/classtiro_1_1record) && ) =default |
| [array](/docs/api/classes/classtiro_1_1array) | **[keys](/docs/api/classes/classtiro_1_1record#function-keys)**() const |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[get](/docs/api/classes/classtiro_1_1record#function-get)**(const [string](/docs/api/classes/classtiro_1_1string) & key) const |

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

### function set

```cpp
inline void set(
    const string & key,
    const handle & value
)
```


### function record

```cpp
inline explicit record(
    handle h
)
```


### function record

```cpp
record(
    const record & 
) =default
```


### function record

```cpp
record(
    record && 
) =default
```


### function operator=

```cpp
record & operator=(
    const record & 
) =default
```


### function operator=

```cpp
record & operator=(
    record && 
) =default
```


### function keys

```cpp
inline array keys() const
```


### function get

```cpp
inline handle get(
    const string & key
) const
```


-------------------------------

Updated on 24 July 2021 at 14:32:19 CEST