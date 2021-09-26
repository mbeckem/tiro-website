---
title: tiro::sync_frame

---

# tiro::sync_frame






`#include "tiropp/objects.hpp"`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[sync_frame](/docs/api/classes/classtiro_1_1sync__frame#function-sync-frame)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) raw_vm, [tiro&#95;sync&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-sync-frame-t) raw_frame) |
| | **[sync_frame](/docs/api/classes/classtiro_1_1sync__frame#function-sync-frame)**(const [sync&#95;frame](/docs/api/classes/classtiro&#95;1&#95;1sync&#95;&#95;frame) & ) =delete |
| [sync_frame](/docs/api/classes/classtiro_1_1sync__frame) & | **[operator=](/docs/api/classes/classtiro_1_1sync__frame#function-operator=)**(const [sync&#95;frame](/docs/api/classes/classtiro&#95;1&#95;1sync&#95;&#95;frame) & ) =delete |
| size_t | **[argc](/docs/api/classes/classtiro_1_1sync__frame#function-argc)**() const |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[arg](/docs/api/classes/classtiro_1_1sync__frame#function-arg)**(size&#95;t index) const |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[closure](/docs/api/classes/classtiro_1_1sync__frame#function-closure)**() const |
| [tiro_vm_t](/docs/api/files/def_8h#typedef-tiro-vm-t) | **[raw_vm](/docs/api/classes/classtiro_1_1sync__frame#function-raw-vm)**() const |
| [tiro_sync_frame_t](/docs/api/files/def_8h#typedef-tiro-sync-frame-t) | **[raw_frame](/docs/api/classes/classtiro_1_1sync__frame#function-raw-frame)**() const |

## Public Functions Documentation

### function sync_frame

```cpp
inline sync_frame(
    tiro_vm_t raw_vm,
    tiro_sync_frame_t raw_frame
)
```


### function sync_frame

```cpp
sync_frame(
    const sync_frame & 
) =delete
```


### function operator=

```cpp
sync_frame & operator=(
    const sync_frame & 
) =delete
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


### function raw_vm

```cpp
inline tiro_vm_t raw_vm() const
```


### function raw_frame

```cpp
inline tiro_sync_frame_t raw_frame() const
```


-------------------------------

Updated on 2021-09-26 at 20:39:59 +0200