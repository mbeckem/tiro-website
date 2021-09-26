---
title: tiro::handle
summary: A handle represents a reference to an object. 

---

# tiro::handle



A handle represents a reference to an object.  [More...](#detailed-description)


`#include "tiropp/objects.hpp"`

Inherited by [array](/docs/api/classes/classtiro_1_1array), [boolean](/docs/api/classes/classtiro_1_1boolean), [coroutine](/docs/api/classes/classtiro_1_1coroutine), [exception](/docs/api/classes/classtiro_1_1exception), [float_](/docs/api/classes/classtiro_1_1float__), [function](/docs/api/classes/classtiro_1_1function), [integer](/docs/api/classes/classtiro_1_1integer), [module](/docs/api/classes/classtiro_1_1module), [native](/docs/api/classes/classtiro_1_1native), [null](/docs/api/classes/classtiro_1_1null), [record](/docs/api/classes/classtiro_1_1record), [result](/docs/api/classes/classtiro_1_1result), [string](/docs/api/classes/classtiro_1_1string), [tuple](/docs/api/classes/classtiro_1_1tuple), [type](/docs/api/classes/classtiro_1_1type)

## Protected Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[check_kind_t](/docs/api/classes/structtiro_1_1handle_1_1check__kind__t)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[handle](/docs/api/classes/classtiro_1_1handle#function-handle)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro-vm-t) raw_vm)<br>Constructs a new handle instance.  |
| | **[handle](/docs/api/classes/classtiro_1_1handle#function-handle)**(const [handle](/docs/api/classes/classtiro_1_1handle) & other)<br>Constructs a new handle and initialize is it with the same value as `other`.  |
| | **[handle](/docs/api/classes/classtiro_1_1handle#function-handle)**([handle](/docs/api/classes/classtiro_1_1handle) && other) =default<br>Move constructs a handle.  |
| | **[~handle](/docs/api/classes/classtiro_1_1handle#function-~handle)**() =default |
| [handle](/docs/api/classes/classtiro_1_1handle) & | **[operator=](/docs/api/classes/classtiro_1_1handle#function-operator=)**(const [handle](/docs/api/classes/classtiro_1_1handle) & other)<br>Copy assigns a handle.  |
| [handle](/docs/api/classes/classtiro_1_1handle) & | **[operator=](/docs/api/classes/classtiro_1_1handle#function-operator=)**([handle](/docs/api/classes/classtiro_1_1handle) && other) =default<br>Move assigns a handle.  |
| bool | **[valid](/docs/api/classes/classtiro_1_1handle#function-valid)**() const<br>Returns true if this handle points to an object (i.e. it was not moved from).  |
| [value_kind](/docs/api/namespaces/namespacetiro#enum-value-kind) | **[kind](/docs/api/classes/classtiro_1_1handle#function-kind)**() const<br>Returns the kind of the value currently held by this handle.  |
| template <typename T \> <br>T | **[as](/docs/api/classes/classtiro_1_1handle#function-as)**() const<br>Converts this value to the target type.  |
| template <typename T \> <br>T | **[as](/docs/api/classes/classtiro_1_1handle#function-as)**() |
| [type](/docs/api/classes/classtiro_1_1type) | **[type_of](/docs/api/classes/classtiro_1_1handle#function-type-of)**() const<br>Returns the type of the value currently held by this handle.  |
| [string](/docs/api/classes/classtiro_1_1string) | **[to_string](/docs/api/classes/classtiro_1_1handle#function-to-string)**() const<br>Returns a string that represents the current value.  |
| [tiro_vm_t](/docs/api/files/def_8h#typedef-tiro-vm-t) | **[raw_vm](/docs/api/classes/classtiro_1_1handle#function-raw-vm)**() const<br>Returns the raw vm instance associated with this handle.  |
| [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro-handle-t) | **[raw_handle](/docs/api/classes/classtiro_1_1handle#function-raw-handle)**() const<br>Returns the raw handle instance (nullptr for invalid handles).  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[handle](/docs/api/classes/classtiro_1_1handle#function-handle)**([check_kind_t](/docs/api/classes/structtiro_1_1handle_1_1check__kind__t) , [handle](/docs/api/classes/classtiro_1_1handle) && other, [value_kind](/docs/api/namespaces/namespacetiro#enum-value-kind) expected) |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr [check_kind_t](/docs/api/classes/structtiro_1_1handle_1_1check__kind__t) | **[check_kind](/docs/api/classes/classtiro_1_1handle#variable-check-kind)**  |

## Detailed Description

```cpp
class tiro::handle;
```

A handle represents a reference to an object. 

Valid handles point to an object slot which is managed by the tiro runtime. All handles internally refer to the virtual machine they belong to. 

## Public Functions Documentation

### function handle

```cpp
inline explicit handle(
    tiro_vm_t raw_vm
)
```

Constructs a new handle instance. 

**Precondition**: `raw_vm != nullptr`. 

The handle will belong to the given virtual machine and will be initialized with null.


### function handle

```cpp
inline handle(
    const handle & other
)
```

Constructs a new handle and initialize is it with the same value as `other`. 

If `other` is invalid, then the new handle will also become invalid. 


### function handle

```cpp
handle(
    handle && other
) =default
```

Move constructs a handle. 

The other handle will become invalid: it may not longer be used for any operations other than destruction and assignments. 


### function ~handle

```cpp
~handle() =default
```


### function operator=

```cpp
inline handle & operator=(
    const handle & other
)
```

Copy assigns a handle. 

This handle will contain the same value as `other`. If other was invalid, then this handle will also become invalid. 


### function operator=

```cpp
handle & operator=(
    handle && other
) =default
```

Move assigns a handle. 

The other handle will become invalid: it may not longer be used for any operations other than destruction and assignments. 


### function valid

```cpp
inline bool valid() const
```

Returns true if this handle points to an object (i.e. it was not moved from). 

### function kind

```cpp
inline value_kind kind() const
```

Returns the kind of the value currently held by this handle. 

### function as

```cpp
template <typename T >
inline T as() const
```

Converts this value to the target type. 

### function as

```cpp
template <typename T >
inline T as()
```


### function type_of

```cpp
inline type type_of() const
```

Returns the type of the value currently held by this handle. 

### function to_string

```cpp
inline string to_string() const
```

Returns a string that represents the current value. 

### function raw_vm

```cpp
inline tiro_vm_t raw_vm() const
```

Returns the raw vm instance associated with this handle. 

### function raw_handle

```cpp
inline tiro_handle_t raw_handle() const
```

Returns the raw handle instance (nullptr for invalid handles). 

## Protected Functions Documentation

### function handle

```cpp
inline handle(
    check_kind_t ,
    handle && other,
    value_kind expected
)
```


## Protected Attributes Documentation

### variable check_kind

```cpp
static constexpr check_kind_t check_kind {};
```


-------------------------------

Updated on 26 September 2021 at 09:32:12 CEST