---
title: tiro::coroutine

---

# tiro::coroutine






`#include "tiropp/objects.hpp"`

Inherits from [handle](/docs/api/classes/classtiro_1_1handle)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[started](/docs/api/classes/classtiro_1_1coroutine#function-started)**() const |
| void | **[start](/docs/api/classes/classtiro_1_1coroutine#function-start)**() |
| template <typename Callback \> <br>void | **[set_callback](/docs/api/classes/classtiro_1_1coroutine#function-set_callback)**(Callback && on_complete) |
| [tiro::result](/docs/api/classes/classtiro_1_1result) | **[result](/docs/api/classes/classtiro_1_1coroutine#function-result)**() const |
| [coroutine](/docs/api/classes/classtiro_1_1coroutine) & | **[operator=](/docs/api/classes/classtiro_1_1coroutine#function-operator=)**(const [coroutine](/docs/api/classes/classtiro_1_1coroutine) & ) =default |
| [coroutine](/docs/api/classes/classtiro_1_1coroutine) & | **[operator=](/docs/api/classes/classtiro_1_1coroutine#function-operator=)**([coroutine](/docs/api/classes/classtiro_1_1coroutine) && ) =default |
| | **[coroutine](/docs/api/classes/classtiro_1_1coroutine#function-coroutine)**([handle](/docs/api/classes/classtiro_1_1handle) h) |
| | **[coroutine](/docs/api/classes/classtiro_1_1coroutine#function-coroutine)**(const [coroutine](/docs/api/classes/classtiro_1_1coroutine) & ) =default |
| | **[coroutine](/docs/api/classes/classtiro_1_1coroutine#function-coroutine)**([coroutine](/docs/api/classes/classtiro_1_1coroutine) && ) =default |
| bool | **[completed](/docs/api/classes/classtiro_1_1coroutine#function-completed)**() const |

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

### function started

```cpp
inline bool started() const
```


### function start

```cpp
inline void start()
```


### function set_callback

```cpp
template <typename Callback >
inline void set_callback(
    Callback && on_complete
)
```


### function result

```cpp
inline tiro::result result() const
```


### function operator=

```cpp
coroutine & operator=(
    const coroutine & 
) =default
```


### function operator=

```cpp
coroutine & operator=(
    coroutine && 
) =default
```


### function coroutine

```cpp
inline explicit coroutine(
    handle h
)
```


### function coroutine

```cpp
coroutine(
    const coroutine & 
) =default
```


### function coroutine

```cpp
coroutine(
    coroutine && 
) =default
```


### function completed

```cpp
inline bool completed() const
```


-------------------------------

Updated on 24 July 2021 at 14:32:19 CEST