---
title: tiro::float_

---

# tiro::float_




`#include "tiropp/objects.hpp"`

Inherits from [handle](/docs/api/classes/classtiro_1_1handle)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| double | **[value](/docs/api/classes/classtiro_1_1float__#function-value)**() const |
| [float_](/docs/api/classes/classtiro_1_1float__) & | **[operator=](/docs/api/classes/classtiro_1_1float__#function-operator=)**(const [float_](/docs/api/classes/classtiro_1_1float__) & ) =default |
| [float_](/docs/api/classes/classtiro_1_1float__) & | **[operator=](/docs/api/classes/classtiro_1_1float__#function-operator=)**([float_](/docs/api/classes/classtiro_1_1float__) && ) =default |
| | **[float_](/docs/api/classes/classtiro_1_1float__#function-float_)**([handle](/docs/api/classes/classtiro_1_1handle) h) |
| | **[float_](/docs/api/classes/classtiro_1_1float__#function-float_)**(const [float_](/docs/api/classes/classtiro_1_1float__) & ) =default |
| | **[float_](/docs/api/classes/classtiro_1_1float__#function-float_)**([float_](/docs/api/classes/classtiro_1_1float__) && ) =default |

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

### function value

```cpp
inline double value() const
```


### function operator=

```cpp
float_ & operator=(
    const float_ & 
) =default
```


### function operator=

```cpp
float_ & operator=(
    float_ && 
) =default
```


### function float_

```cpp
inline explicit float_(
    handle h
)
```


### function float_

```cpp
float_(
    const float_ & 
) =default
```


### function float_

```cpp
float_(
    float_ && 
) =default
```


-------------------------------

Updated on 11 April 2021 at 12:05:09 CEST