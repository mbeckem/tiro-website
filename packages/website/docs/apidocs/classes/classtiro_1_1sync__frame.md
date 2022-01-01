---
title: tiro::sync_frame
summary: Represents the call frame of a synchronous function call. 

---

# tiro::sync_frame



Represents the call frame of a synchronous function call.  [More...](#detailed-description)


`#include "tiropp/objects.hpp"`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[sync_frame](/docs/api/classes/classtiro_1_1sync__frame#function-sync-frame)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) raw_vm, [tiro&#95;sync&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-sync-frame-t) raw_frame) |
| | **[sync_frame](/docs/api/classes/classtiro_1_1sync__frame#function-sync-frame)**(const [sync&#95;frame](/docs/api/classes/classtiro&#95;1&#95;1sync&#95;&#95;frame) & ) =delete |
| [sync_frame](/docs/api/classes/classtiro_1_1sync__frame) & | **[operator=](/docs/api/classes/classtiro_1_1sync__frame#function-operator=)**(const [sync&#95;frame](/docs/api/classes/classtiro&#95;1&#95;1sync&#95;&#95;frame) & ) =delete |
| size_t | **[argc](/docs/api/classes/classtiro_1_1sync__frame#function-argc)**() const<br>Returns the number of arguments passed to this function call.  |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[arg](/docs/api/classes/classtiro_1_1sync__frame#function-arg)**(size&#95;t index) const<br>Returns the argument at the given index (`0 <= index < argc`).  |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[closure](/docs/api/classes/classtiro_1_1sync__frame#function-closure)**() const<br>Returns the closure value referenced by this function (if any).  |
| [tiro_vm_t](/docs/api/files/def_8h#typedef-tiro-vm-t) | **[raw_vm](/docs/api/classes/classtiro_1_1sync__frame#function-raw-vm)**() const |
| [tiro_sync_frame_t](/docs/api/files/def_8h#typedef-tiro-sync-frame-t) | **[raw_frame](/docs/api/classes/classtiro_1_1sync__frame#function-raw-frame)**() const |

## Detailed Description

```cpp
class tiro::sync_frame;
```

Represents the call frame of a synchronous function call. 

References to sync_frames are only valid from within the surrounding function call. 

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

Returns the number of arguments passed to this function call. 

### function arg

```cpp
inline handle arg(
    size_t index
) const
```

Returns the argument at the given index (`0 <= index < argc`). 

### function closure

```cpp
inline handle closure() const
```

Returns the closure value referenced by this function (if any). 

### function raw_vm

```cpp
inline tiro_vm_t raw_vm() const
```


### function raw_frame

```cpp
inline tiro_sync_frame_t raw_frame() const
```


-------------------------------

Updated on 2022-01-01 at 12:38:40 +0100