---
title: tiro::async_frame

---

# tiro::async_frame






`#include "tiropp/objects.hpp"`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[async_frame](/docs/api/classes/classtiro_1_1async__frame#function-async-frame)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) raw_vm, [tiro&#95;async&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-async-frame-t) raw_frame) |
| | **[async_frame](/docs/api/classes/classtiro_1_1async__frame#function-async-frame)**([async&#95;frame](/docs/api/classes/classtiro&#95;1&#95;1async&#95;&#95;frame) && ) =default |
| [async_frame](/docs/api/classes/classtiro_1_1async__frame) & | **[operator=](/docs/api/classes/classtiro_1_1async__frame#function-operator=)**([async&#95;frame](/docs/api/classes/classtiro&#95;1&#95;1async&#95;&#95;frame) && ) =default |
| size_t | **[argc](/docs/api/classes/classtiro_1_1async__frame#function-argc)**() const |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[arg](/docs/api/classes/classtiro_1_1async__frame#function-arg)**(size&#95;t index) const |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[closure](/docs/api/classes/classtiro_1_1async__frame#function-closure)**() const |
| void | **[return_value](/docs/api/classes/classtiro_1_1async__frame#function-return-value)**(const [handle](/docs/api/classes/classtiro&#95;1&#95;1handle) & value) |
| [tiro_vm_t](/docs/api/files/def_8h#typedef-tiro-vm-t) | **[raw_vm](/docs/api/classes/classtiro_1_1async__frame#function-raw-vm)**() const |
| [tiro_async_frame_t](/docs/api/files/def_8h#typedef-tiro-async-frame-t) | **[raw_frame](/docs/api/classes/classtiro_1_1async__frame#function-raw-frame)**() const |

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

Updated on 2021-09-26 at 16:20:41 +0200