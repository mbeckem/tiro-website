---
title: tiro::module
summary: Refers to a module. 

---

# tiro::module



Refers to a module. 


`#include "tiropp/objects.hpp"`

Inherits from [handle](/docs/api/classes/classtiro_1_1handle)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[module](/docs/api/classes/classtiro_1_1module#function-module)**([handle](/docs/api/classes/classtiro&#95;1&#95;1handle) h) |
| | **[module](/docs/api/classes/classtiro_1_1module#function-module)**(const [module](/docs/api/classes/classtiro&#95;1&#95;1module) & ) =default |
| | **[module](/docs/api/classes/classtiro_1_1module#function-module)**([module](/docs/api/classes/classtiro&#95;1&#95;1module) && ) =default |
| [module](/docs/api/classes/classtiro_1_1module) & | **[operator=](/docs/api/classes/classtiro_1_1module#function-operator=)**(const [module](/docs/api/classes/classtiro&#95;1&#95;1module) & ) =default |
| [module](/docs/api/classes/classtiro_1_1module) & | **[operator=](/docs/api/classes/classtiro_1_1module#function-operator=)**([module](/docs/api/classes/classtiro&#95;1&#95;1module) && ) =default |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[get_export](/docs/api/classes/classtiro_1_1module#function-get-export)**(std::string&#95;view export_name) const<br>Retrieves the exported module member with the given name from this module.  |

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

### function module

```cpp
inline explicit module(
    handle h
)
```


### function module

```cpp
module(
    const module & 
) =default
```


### function module

```cpp
module(
    module && 
) =default
```


### function operator=

```cpp
module & operator=(
    const module & 
) =default
```


### function operator=

```cpp
module & operator=(
    module && 
) =default
```


### function get_export

```cpp
inline handle get_export(
    std::string_view export_name
) const
```

Retrieves the exported module member with the given name from this module. 

-------------------------------

Updated on 2022-01-01 at 12:38:40 +0100