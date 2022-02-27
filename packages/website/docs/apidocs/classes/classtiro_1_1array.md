---
title: tiro::array
summary: Refers to an array value. 

---

# tiro::array



Refers to an array value. 


`#include "tiropp/objects.hpp"`

Inherits from [handle](/docs/api/classes/classtiro_1_1handle)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[array](/docs/api/classes/classtiro_1_1array#function-array)**([handle](/docs/api/classes/classtiro&#95;1&#95;1handle) h) |
| | **[array](/docs/api/classes/classtiro_1_1array#function-array)**(const [array](/docs/api/classes/classtiro&#95;1&#95;1array) & ) =default |
| | **[array](/docs/api/classes/classtiro_1_1array#function-array)**([array](/docs/api/classes/classtiro&#95;1&#95;1array) && ) =default |
| [array](/docs/api/classes/classtiro_1_1array) & | **[operator=](/docs/api/classes/classtiro_1_1array#function-operator=)**(const [array](/docs/api/classes/classtiro&#95;1&#95;1array) & ) =default |
| [array](/docs/api/classes/classtiro_1_1array) & | **[operator=](/docs/api/classes/classtiro_1_1array#function-operator=)**([array](/docs/api/classes/classtiro&#95;1&#95;1array) && ) =default |
| size_t | **[size](/docs/api/classes/classtiro_1_1array#function-size)**() const<br>Returns the number of elements in this array.  |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[get](/docs/api/classes/classtiro_1_1array#function-get)**(size&#95;t index) const<br>Returns the value at the given index (`0 <= index < size`).  |
| void | **[set](/docs/api/classes/classtiro_1_1array#function-set)**(size&#95;t index, const [handle](/docs/api/classes/classtiro&#95;1&#95;1handle) & value)<br>Sets the value at the given index (`0 <= index < size`) to `value`.  |
| void | **[push](/docs/api/classes/classtiro_1_1array#function-push)**(const [handle](/docs/api/classes/classtiro&#95;1&#95;1handle) & value)<br>Appends `value` at the end of the array.  |
| void | **[pop](/docs/api/classes/classtiro_1_1array#function-pop)**()<br>Removes the last element from the array.  |
| void | **[clear](/docs/api/classes/classtiro_1_1array#function-clear)**()<br>Removes all elements from the array.  |

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

### function array

```cpp
inline explicit array(
    handle h
)
```


### function array

```cpp
array(
    const array & 
) =default
```


### function array

```cpp
array(
    array && 
) =default
```


### function operator=

```cpp
array & operator=(
    const array & 
) =default
```


### function operator=

```cpp
array & operator=(
    array && 
) =default
```


### function size

```cpp
inline size_t size() const
```

Returns the number of elements in this array. 

### function get

```cpp
inline handle get(
    size_t index
) const
```

Returns the value at the given index (`0 <= index < size`). 

### function set

```cpp
inline void set(
    size_t index,
    const handle & value
)
```

Sets the value at the given index (`0 <= index < size`) to `value`. 

### function push

```cpp
inline void push(
    const handle & value
)
```

Appends `value` at the end of the array. 

### function pop

```cpp
inline void pop()
```

Removes the last element from the array. 

### function clear

```cpp
inline void clear()
```

Removes all elements from the array. 

-------------------------------

Updated on 2022-02-27 at 21:17:13 +0100