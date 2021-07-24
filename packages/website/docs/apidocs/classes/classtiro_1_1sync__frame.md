---
title: tiro::sync_frame

---

# tiro::sync_frame




`#include "tiropp/objects.hpp"`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[sync_frame](/docs/api/classes/classtiro_1_1sync__frame#function-sync_frame)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) raw_vm, [tiro_sync_frame_t](/docs/api/files/def_8h#typedef-tiro_sync_frame_t) raw_frame) |
| | **[sync_frame](/docs/api/classes/classtiro_1_1sync__frame#function-sync_frame)**(const [sync_frame](/docs/api/classes/classtiro_1_1sync__frame) & ) |
| [tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) | **[raw_vm](/docs/api/classes/classtiro_1_1sync__frame#function-raw_vm)**() const |
| [tiro_sync_frame_t](/docs/api/files/def_8h#typedef-tiro_sync_frame_t) | **[raw_frame](/docs/api/classes/classtiro_1_1sync__frame#function-raw_frame)**() const |
| [sync_frame](/docs/api/classes/classtiro_1_1sync__frame) & | **[operator=](/docs/api/classes/classtiro_1_1sync__frame#function-operator=)**(const [sync_frame](/docs/api/classes/classtiro_1_1sync__frame) & ) |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[closure](/docs/api/classes/classtiro_1_1sync__frame#function-closure)**() const |
| size_t | **[argc](/docs/api/classes/classtiro_1_1sync__frame#function-argc)**() const |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[arg](/docs/api/classes/classtiro_1_1sync__frame#function-arg)**(size_t index) const |

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
)
```


### function raw_vm

```cpp
inline tiro_vm_t raw_vm() const
```


### function raw_frame

```cpp
inline tiro_sync_frame_t raw_frame() const
```


### function operator=

```cpp
sync_frame & operator=(
    const sync_frame & 
)
```


### function closure

```cpp
inline handle closure() const
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


-------------------------------

Updated on  5 May 2021 at 11:21:35 CEST