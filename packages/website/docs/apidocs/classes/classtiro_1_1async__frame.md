---
title: tiro::async_frame

---

# tiro::async_frame






`#include "tiropp/objects.hpp"`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[async_frame](/docs/api/classes/classtiro_1_1async__frame#function-async_frame)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) raw_vm, [tiro_async_frame_t](/docs/api/files/def_8h#typedef-tiro_async_frame_t) raw_frame) |
| | **[async_frame](/docs/api/classes/classtiro_1_1async__frame#function-async_frame)**([async_frame](/docs/api/classes/classtiro_1_1async__frame) && ) =default |
| [async_frame](/docs/api/classes/classtiro_1_1async__frame) & | **[operator=](/docs/api/classes/classtiro_1_1async__frame#function-operator=)**([async_frame](/docs/api/classes/classtiro_1_1async__frame) && ) =default |
| size_t | **[argc](/docs/api/classes/classtiro_1_1async__frame#function-argc)**() const |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[arg](/docs/api/classes/classtiro_1_1async__frame#function-arg)**(size_t index) const |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[closure](/docs/api/classes/classtiro_1_1async__frame#function-closure)**() const |
| void | **[return_value](/docs/api/classes/classtiro_1_1async__frame#function-return_value)**(const [handle](/docs/api/classes/classtiro_1_1handle) & value) |
| [tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) | **[raw_vm](/docs/api/classes/classtiro_1_1async__frame#function-raw_vm)**() const |
| [tiro_async_frame_t](/docs/api/files/def_8h#typedef-tiro_async_frame_t) | **[raw_frame](/docs/api/classes/classtiro_1_1async__frame#function-raw_frame)**() const |

## Public Functions Documentation

### function async_frame

```cpp
inline async_frame(
    tiro_vm_t raw_vm,
    tiro_async_frame_t raw_frame
)
```


### function async_frame

```cpp
async_frame(
    async_frame && 
) =default
```


### function operator=

```cpp
async_frame & operator=(
    async_frame && 
) =default
```


### function argc

```cpp
inline size_t argc() const
```


### function arg

```cpp
inline handle arg(
    size_t index
) const
```


### function closure

```cpp
inline handle closure() const
```


### function return_value

```cpp
inline void return_value(
    const handle & value
)
```


### function raw_vm

```cpp
inline tiro_vm_t raw_vm() const
```


### function raw_frame

```cpp
inline tiro_async_frame_t raw_frame() const
```


-------------------------------

Updated on 25 July 2021 at 13:14:57 CEST