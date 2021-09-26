---
title: tiro::sync_frame

---

# tiro::sync_frame






`#include "tiropp/objects.hpp"`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[sync_frame](/docs/api/classes/classtiro_1_1sync__frame#function-sync-frame)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro-vm-t) raw_vm, [tiro_sync_frame_t](/docs/api/files/def_8h#typedef-tiro-sync-frame-t) raw_frame) |
| | **[sync_frame](/docs/api/classes/classtiro_1_1sync__frame#function-sync-frame)**(const [sync_frame](/docs/api/classes/classtiro_1_1sync__frame) & ) =deleted |
| [sync_frame](/docs/api/classes/classtiro_1_1sync__frame) & | **[operator=](/docs/api/classes/classtiro_1_1sync__frame#function-operator=)**(const [sync_frame](/docs/api/classes/classtiro_1_1sync__frame) & ) =deleted |
| size_t | **[argc](/docs/api/classes/classtiro_1_1sync__frame#function-argc)**() const |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[arg](/docs/api/classes/classtiro_1_1sync__frame#function-arg)**(size_t index) const |
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
) =deleted
```


### function operator=

```cpp
sync_frame & operator=(
    const sync_frame & 
) =deleted
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

Updated on 26 September 2021 at 09:32:12 CEST