---
title: tiro::exception
summary: Refers to an exception. 

---

# tiro::exception



Refers to an exception. 


`#include "tiropp/objects.hpp"`

Inherits from [handle](/docs/api/classes/classtiro_1_1handle)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[exception](/docs/api/classes/classtiro_1_1exception#function-exception)**([handle](/docs/api/classes/classtiro&#95;1&#95;1handle) h) |
| | **[exception](/docs/api/classes/classtiro_1_1exception#function-exception)**(const [exception](/docs/api/classes/classtiro&#95;1&#95;1exception) & ) =default |
| | **[exception](/docs/api/classes/classtiro_1_1exception#function-exception)**([exception](/docs/api/classes/classtiro&#95;1&#95;1exception) && ) =default |
| [exception](/docs/api/classes/classtiro_1_1exception) & | **[operator=](/docs/api/classes/classtiro_1_1exception#function-operator=)**(const [exception](/docs/api/classes/classtiro&#95;1&#95;1exception) & ) =default |
| [exception](/docs/api/classes/classtiro_1_1exception) & | **[operator=](/docs/api/classes/classtiro_1_1exception#function-operator=)**([exception](/docs/api/classes/classtiro&#95;1&#95;1exception) && ) =default |
| [string](/docs/api/classes/classtiro_1_1string) | **[message](/docs/api/classes/classtiro_1_1exception#function-message)**() const<br>The message string associated with this exception.  |

## Additional inherited members

**Protected Classes inherited from [handle](/docs/api/classes/classtiro_1_1handle)**

|                | Name           |
| -------------- | -------------- |
| struct | **[check_kind_t](/docs/api/classes/structtiro_1_1handle_1_1check__kind__t)**  |

**Public Functions inherited from [handle](/docs/api/classes/classtiro_1_1handle)**

|                | Name           |
| -------------- | -------------- |
| template <typename T \> <br>T | **[as](/docs/api/classes/classtiro_1_1handle#function-as)**() const<br>Converts this value to the target type.  |
| template <typename T \> <br>T | **[as](/docs/api/classes/classtiro_1_1handle#function-as)**()<br>Converts this value to the target type.  |
| | **[handle](/docs/api/classes/classtiro_1_1handle#function-handle)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) raw_vm)<br>Constructs a new handle instance.  |
| | **[handle](/docs/api/classes/classtiro_1_1handle#function-handle)**(const [handle](/docs/api/classes/classtiro&#95;1&#95;1handle) & other)<br>Constructs a new handle and initialize is it with the same value as `other`.  |
| | **[handle](/docs/api/classes/classtiro_1_1handle#function-handle)**([handle](/docs/api/classes/classtiro&#95;1&#95;1handle) && other) =default<br>Move constructs a handle.  |
| | **[~handle](/docs/api/classes/classtiro_1_1handle#function-~handle)**() =default |
| bool | **[valid](/docs/api/classes/classtiro_1_1handle#function-valid)**() const<br>Returns true if this handle points to an object (i.e. it was not moved from).  |
| [value_kind](/docs/api/namespaces/namespacetiro#enum-value-kind) | **[kind](/docs/api/classes/classtiro_1_1handle#function-kind)**() const<br>Returns the kind of the value currently held by this handle.  |
| [type](/docs/api/classes/classtiro_1_1type) | **[type_of](/docs/api/classes/classtiro_1_1handle#function-type-of)**() const<br>Returns the type of the value currently held by this handle.  |
| [string](/docs/api/classes/classtiro_1_1string) | **[to_string](/docs/api/classes/classtiro_1_1handle#function-to-string)**() const<br>Returns a string that represents the current value.  |
| [tiro_vm_t](/docs/api/files/def_8h#typedef-tiro-vm-t) | **[raw_vm](/docs/api/classes/classtiro_1_1handle#function-raw-vm)**() const<br>Returns the raw vm instance associated with this handle.  |
| [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro-handle-t) | **[raw_handle](/docs/api/classes/classtiro_1_1handle#function-raw-handle)**() const<br>Returns the raw handle instance (nullptr for invalid handles).  |

**Protected Functions inherited from [handle](/docs/api/classes/classtiro_1_1handle)**

|                | Name           |
| -------------- | -------------- |
| | **[handle](/docs/api/classes/classtiro_1_1handle#function-handle)**([check&#95;kind&#95;t](/docs/api/classes/structtiro&#95;1&#95;1handle&#95;1&#95;1check&#95;&#95;kind&#95;&#95;t) , [handle](/docs/api/classes/classtiro&#95;1&#95;1handle) && other, [value&#95;kind](/docs/api/namespaces/namespacetiro#enum-value-kind) expected) |

**Protected Attributes inherited from [handle](/docs/api/classes/classtiro_1_1handle)**

|                | Name           |
| -------------- | -------------- |
| constexpr [check&#95;kind&#95;t](/docs/api/classes/structtiro&#95;1&#95;1handle&#95;1&#95;1check&#95;&#95;kind&#95;&#95;t) | **[check_kind](/docs/api/classes/classtiro_1_1handle#variable-check-kind)**  |


## Public Functions Documentation

### function exception

```cpp
inline explicit exception(
    handle h
)
```


### function exception

```cpp
exception(
    const exception & 
) =default
```


### function exception

```cpp
exception(
    exception && 
) =default
```


### function operator=

```cpp
exception & operator=(
    const exception & 
) =default
```


### function operator=

```cpp
exception & operator=(
    exception && 
) =default
```


### function message

```cpp
inline string message() const
```

The message string associated with this exception. 

-------------------------------

Updated on 2021-10-02 at 22:50:45 +0200