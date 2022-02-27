---
title: tiro::string
summary: Refers to a string value. 

---

# tiro::string



Refers to a string value. 


`#include "tiropp/objects.hpp"`

Inherits from [handle](/docs/api/classes/classtiro_1_1handle)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[string](/docs/api/classes/classtiro_1_1string#function-string)**([handle](/docs/api/classes/classtiro&#95;1&#95;1handle) h) |
| | **[string](/docs/api/classes/classtiro_1_1string#function-string)**(const [string](/docs/api/classes/classtiro&#95;1&#95;1string) & ) =default |
| | **[string](/docs/api/classes/classtiro_1_1string#function-string)**([string](/docs/api/classes/classtiro&#95;1&#95;1string) && ) =default |
| [string](/docs/api/classes/classtiro_1_1string) & | **[operator=](/docs/api/classes/classtiro_1_1string#function-operator=)**(const [string](/docs/api/classes/classtiro&#95;1&#95;1string) & ) =default |
| [string](/docs/api/classes/classtiro_1_1string) & | **[operator=](/docs/api/classes/classtiro_1_1string#function-operator=)**([string](/docs/api/classes/classtiro&#95;1&#95;1string) && ) =default |
| std::string_view | **[view](/docs/api/classes/classtiro_1_1string#function-view)**() const<br>Returns an unowned view into the string's storage without performing a copy.  |
| std::string | **[value](/docs/api/classes/classtiro_1_1string#function-value)**() const<br>Returns a copy of the string's content, converted to a std::string.  |

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
| template <typename T \> <br>bool | **[is](/docs/api/classes/classtiro_1_1handle#function-is)**() const<br>Returns true if this value is of the target type.  |
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

### function string

```cpp
inline explicit string(
    handle h
)
```


### function string

```cpp
string(
    const string & 
) =default
```


### function string

```cpp
string(
    string && 
) =default
```


### function operator=

```cpp
string & operator=(
    const string & 
) =default
```


### function operator=

```cpp
string & operator=(
    string && 
) =default
```


### function view

```cpp
inline std::string_view view() const
```

Returns an unowned view into the string's storage without performing a copy. 

**Warning**: The view points into the string's current storage. Because objects may move on the heap (e.g. because of garbage collection) this data may be invalidated. The data may only be used immediately after calling this function, before any other vm function might allocate and therefore might trigger a garbage collection cycle. 

The view is not zero terminated.


### function value

```cpp
inline std::string value() const
```

Returns a copy of the string's content, converted to a std::string. 

-------------------------------

Updated on 2022-02-27 at 21:17:13 +0100