---
title: tiro::coroutine
summary: Refers to a coroutine. 

---

# tiro::coroutine



Refers to a coroutine. 


`#include "tiropp/objects.hpp"`

Inherits from [handle](/docs/api/classes/classtiro_1_1handle)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[coroutine](/docs/api/classes/classtiro_1_1coroutine#function-coroutine)**([handle](/docs/api/classes/classtiro&#95;1&#95;1handle) h) |
| | **[coroutine](/docs/api/classes/classtiro_1_1coroutine#function-coroutine)**(const [coroutine](/docs/api/classes/classtiro&#95;1&#95;1coroutine) & ) =default |
| | **[coroutine](/docs/api/classes/classtiro_1_1coroutine#function-coroutine)**([coroutine](/docs/api/classes/classtiro&#95;1&#95;1coroutine) && ) =default |
| [coroutine](/docs/api/classes/classtiro_1_1coroutine) & | **[operator=](/docs/api/classes/classtiro_1_1coroutine#function-operator=)**(const [coroutine](/docs/api/classes/classtiro&#95;1&#95;1coroutine) & ) =default |
| [coroutine](/docs/api/classes/classtiro_1_1coroutine) & | **[operator=](/docs/api/classes/classtiro_1_1coroutine#function-operator=)**([coroutine](/docs/api/classes/classtiro&#95;1&#95;1coroutine) && ) =default |
| bool | **[started](/docs/api/classes/classtiro_1_1coroutine#function-started)**() const<br>Returns true if the coroutine started execution.  |
| bool | **[completed](/docs/api/classes/classtiro_1_1coroutine#function-completed)**() const<br>Returns true if the coroutine completed execution (implies `started`).  |
| [tiro::result](/docs/api/classes/classtiro_1_1result) | **[result](/docs/api/classes/classtiro_1_1coroutine#function-result)**() const<br>Returns the coroutine's result (which must have completed).  |
| template <typename Callback \> <br>void | **[set_callback](/docs/api/classes/classtiro_1_1coroutine#function-set-callback)**(Callback && on_complete)<br>Schedules the given callback to be invoked once the coroutine completes.  |
| void | **[start](/docs/api/classes/classtiro_1_1coroutine#function-start)**()<br>Starts this coroutine's execution.  |

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


### function started

```cpp
inline bool started() const
```

Returns true if the coroutine started execution. 

### function completed

```cpp
inline bool completed() const
```

Returns true if the coroutine completed execution (implies `started`). 

### function result

```cpp
inline tiro::result result() const
```

Returns the coroutine's result (which must have completed). 

If the coroutine terminated with an uncaught panic, the result will hold an error. 


### function set_callback

```cpp
template <typename Callback >
inline void set_callback(
    Callback && on_complete
)
```

Schedules the given callback to be invoked once the coroutine completes. 

There can only be one callback associated with a coroutine.

`on_complete` will be invoked when the coroutine completes its execution. A coroutine completes when the outermost function returns normally or if an uncaught panic is thrown from that function. The callback receives a handle to the completed coroutine, which can be inspected in order to retrieve the coroutine's result. It will _not_ be invoked if the virtual machine shuts down before the coroutine has completed.

Note: all callback invocations happen from within one of the `vm.run*` method. 


### function start

```cpp
inline void start()
```

Starts this coroutine's execution. 

The coroutine's function will be invoked from within a call to a `vm.run*` method. 


-------------------------------

Updated on 2021-10-02 at 22:50:45 +0200