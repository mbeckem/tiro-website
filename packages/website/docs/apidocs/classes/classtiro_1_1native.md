---
title: tiro::native
summary: Refers to a native object. 

---

# tiro::native



Refers to a native object. 


`#include "tiropp/objects.hpp"`

Inherits from [handle](/docs/api/classes/classtiro_1_1handle)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[native](/docs/api/classes/classtiro_1_1native#function-native)**([handle](/docs/api/classes/classtiro&#95;1&#95;1handle) h) |
| | **[native](/docs/api/classes/classtiro_1_1native#function-native)**(const [native](/docs/api/classes/classtiro&#95;1&#95;1native) & ) =default |
| | **[native](/docs/api/classes/classtiro_1_1native#function-native)**([native](/docs/api/classes/classtiro&#95;1&#95;1native) && ) =default |
| [native](/docs/api/classes/classtiro_1_1native) & | **[operator=](/docs/api/classes/classtiro_1_1native#function-operator=)**(const [native](/docs/api/classes/classtiro&#95;1&#95;1native) & ) =default |
| [native](/docs/api/classes/classtiro_1_1native) & | **[operator=](/docs/api/classes/classtiro_1_1native#function-operator=)**([native](/docs/api/classes/classtiro&#95;1&#95;1native) && ) =default |
| const [tiro_native_type_t](/docs/api/files/objects_8h#typedef-tiro-native-type-t) * | **[type_descriptor](/docs/api/classes/classtiro_1_1native#function-type-descriptor)**() const<br>Returns the native point descriptor.  |
| void * | **[data](/docs/api/classes/classtiro_1_1native#function-data)**() const<br>Returns a pointer to this object's internal storage.  |
| size_t | **[size](/docs/api/classes/classtiro_1_1native#function-size)**() const<br>Returns the size (in bytes) of the storage pointed to by [data()](/docs/api/classes/classtiro_1_1native#function-data).  |

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

Returns the native point descriptor. 

### function data

```cpp
inline void * data() const
```

Returns a pointer to this object's internal storage. 

**Warning**: The pointer returned by this function points into the object's current storage. Because objects may move on the heap (e.g. because of garbage collection), this data may be invalidated. The data may only be used immediately after calling this function in native code that is guaranteed to NOT allocate on the tiro heap. It MUST NOT be used as input tiro an allocating function (which includes most functions of this API), or after such a function has been called. 

### function size

```cpp
inline size_t size() const
```

Returns the size (in bytes) of the storage pointed to by [data()](/docs/api/classes/classtiro_1_1native#function-data). 

-------------------------------

Updated on 2021-10-02 at 22:50:45 +0200